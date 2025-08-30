"use client";
import React, { useState, memo } from 'react'

const ERROR_IMG_SRC = '/images/error-img.svg'

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const ImageWithFallback = memo(function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setDidError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const { src, alt, style, className, fallbackSrc = ERROR_IMG_SRC, ...rest } = props

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img 
            src={fallbackSrc} 
            alt="Error loading image" 
            {...rest} 
            data-original-url={src}
            loading="lazy"
          />
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center ${className}`}>
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      <img 
        src={src ?? ''} 
        alt={alt ?? ''} 
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style} 
        {...rest} 
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </>
  )
})
