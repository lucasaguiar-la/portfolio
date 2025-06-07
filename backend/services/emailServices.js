const nodemailer = require('nodemailer');

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
        subject: `[PORTFÓLIO] - Nova mensagem de ${nome}!`,
        text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
        html: `
            <h2>Nova mensagem do portfólio</h2>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${mensagem}</p>
        `
    };

    await transporter.sendMail(mailOptions);
}