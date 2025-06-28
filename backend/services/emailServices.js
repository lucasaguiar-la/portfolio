const nodemailer = require('nodemailer');

/**
 * Function to escape HTML special characters to prevent XSS attacks
 * @param {string} unsafe - The unsafe user input
 * @returns {string} - Sanitized string safe for HTML insertion
 */
const escapeHtml = (unsafe) => {
    if (unsafe === undefined || unsafe === null) {
        return '';
    }
    return String(unsafe)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

const createTransporter = () => {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

exports.sendEmail = async ({ nome, email, mensagem }) => {
    const transporter = createTransporter();

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `[PORTFÓLIO] - Nova mensagem de ${escapeHtml(nome)}!`,
        text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
        html: `
            <h2>Nova mensagem do portfólio</h2>
            <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${escapeHtml(mensagem)}</p>
        `
    };

    await transporter.sendMail(mailOptions);
}