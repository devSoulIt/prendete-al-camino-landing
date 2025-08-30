'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface VirtualizedGridProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  itemHeight: number;
  containerHeight: number;
  columns: number;
}

export const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  renderItem,
  itemHeight,
  containerHeight,
  columns
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const rowsPerPage = Math.ceil(containerHeight / itemHeight);
  const totalRows = Math.ceil(items.length / columns);
  const startRow = Math.floor(scrollTop / itemHeight);
  const endRow = Math.min(startRow + rowsPerPage + 1, totalRows);

  const visibleItems = [];
  for (let row = startRow; row < endRow; row++) {
    for (let col = 0; col < columns; col++) {
      const index = row * columns + col;
      if (index < items.length) {
        visibleItems.push({
          item: items[index],
          index,
          style: {
            position: 'absolute',
            top: row * itemHeight,
            left: `${(col / columns) * 100}%`,
            width: `${100 / columns}%`,
            height: itemHeight,
            padding: '4px'
          }
        });
      }
    }
  }

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const totalHeight = totalRows * itemHeight;

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative'
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map(({ item, index, style }) => (
          <div key={index} style={style}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
