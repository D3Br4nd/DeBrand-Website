import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, company, message } = await request.json();

        // Log configuration for debugging (without sensitive data)
        console.log('Email config:', {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            from: process.env.MAIL_FROM_ADDRESS,
            encryption: process.env.MAIL_ENCRYPTION || 'ssl'
        });

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: true, // true for port 465 (SSL), false for 587 (STARTTLS)
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false // Allow self-signed certificates if needed
            }
        });

        const mailOptions = {
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: process.env.MAIL_FROM_ADDRESS, // Send to self
            // replyTo: email, // Commented out to avoid SPF/DMARC issues for now
            subject: `Nuovo messaggio da ${name} - DeBrand Studio`,
            text: `
        Nuovo messaggio dal sito web:
        
        Nome: ${name}
        Email del visitatore: ${email}
        Azienda: ${company || 'N/A'}
        
        Messaggio:
        ${message}
      `,
            html: `
        <h3>Nuovo messaggio dal sito web</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email del visitatore:</strong> ${email}</p>
        <p><strong>Azienda:</strong> ${company || 'N/A'}</p>
        <br>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error: String(error) }, { status: 500 });
    }
}
