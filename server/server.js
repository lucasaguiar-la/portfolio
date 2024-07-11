
require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

// [CONFIGURAÇÕES NODEMAILER]
const transportador = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// [ENVIO DO FORMULÁRIO]
app.post('/submit-form', (req, res) => {
    const { nome, email, mensagem } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `[PORTFÓLIO] - Nova mensagem para contato!`,
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    transportador.sendMail(mailOptions, (error, data) => {
        if (error) {
            console.log('Erro ao enviar o email:', error);
            res.status(500).send('Erro ao enviar o email');
        } else {
            console.log('Email enviado com sucesso!');
            res.status(200).send('Email enviado com sucesso!');
        }
    });
});

// [ROTA DO HTML PRINCIPAL]
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// [PORTA DA APLICAÇÃO]
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
