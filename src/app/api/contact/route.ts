import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nombre = String(formData.get('nombre') || '');
    const edad = String(formData.get('edad') || '');
    const email = String(formData.get('email') || '');
    const telefono = String(formData.get('telefono') || '');
    const estadoFisico = String(formData.get('estado_fisico') || '');
    const disponibilidad = String(formData.get('disponibilidad') || '');
    const disposicionEconomica = String(formData.get('disposicion_economica') || '');
    const queTeAtrae = String(formData.get('que_te_atrae') || '');

    if (!nombre || !email) {
      return NextResponse.json({ success: false, message: 'Faltan campos obligatorios.' }, { status: 400 });
    }

    const subject = `Nuevo contacto: ${nombre}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222">
        <h2 style="margin:0 0 12px 0;">Formulario de contacto recibido</h2>
        <p><strong>Nombre y apellido:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Edad:</strong> ${escapeHtml(edad)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono/WhatsApp:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Estado físico:</strong> ${escapeHtml(estadoFisico)}</p>
        <p><strong>Disponibilidad en junio 2026:</strong> ${escapeHtml(disponibilidad)}</p>
        <p><strong>Disposición económica:</strong> ${escapeHtml(disposicionEconomica)}</p>
        <p><strong>¿Qué le atrae del camino?</strong><br/>${nl2br(escapeHtml(queTeAtrae))}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p style="font-size:12px;color:#666;">Este email fue enviado automáticamente desde el formulario del sitio.</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Prendete al Camino <notification@lemonpad.app>',
      to: ['prendetealcamino@gmail.com'],
      // to: ['lautarooyt837@gmail.com'],
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ success: false, message: 'No se pudo enviar el email', error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Error inesperado al procesar el formulario' }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(input: string) {
  return input.replace(/\n/g, '<br/>');
}


