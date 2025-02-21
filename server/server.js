require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

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

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validateFormData = (data) => {
    const { nome, email, mensagem } = data;
    const errors = [];

    if (!nome || nome.trim().length < 3) {
        errors.push('Nome inválido');
    }

    if (!email || !validateEmail(email)) {
        errors.push('Email inválido');
    }

    if (!mensagem || mensagem.trim().length < 10) {
        errors.push('Mensagem muito curta');
    }

    return errors;
};

app.post('/submit-form', async (req, res) => {
    try {
        const { nome, email, mensagem } = req.body;

        const errors = validateFormData(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ 
                success: false, 
                errors 
            });
        }

        const sanitizedData = {
            nome: nome.trim(),
            email: email.trim().toLowerCase(),
            mensagem: mensagem.trim()
        };

        const transportador = createTransporter();
        const mailOptions = {
            from: sanitizedData.email,
            to: process.env.EMAIL_USER,
            subject: `[PORTFÓLIO] - Nova mensagem de ${sanitizedData.nome}!`,
            text: `
                Nome: ${sanitizedData.nome}
                Email: ${sanitizedData.email}
                
                Mensagem:
                ${sanitizedData.mensagem}
            `,
            html: `
                <h2>Nova mensagem do portfólio</h2>
                <p><strong>Nome:</strong> ${sanitizedData.nome}</p>
                <p><strong>Email:</strong> ${sanitizedData.email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${sanitizedData.mensagem}</p>
            `
        };

        await transportador.sendMail(mailOptions);
        
        res.status(200).json({ 
            success: true, 
            message: 'Email enviado com sucesso!' 
        });

    } catch (error) {
        console.error('Erro ao processar requisição:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao enviar email. Tente novamente mais tarde.' 
        });
    }
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Erro interno do servidor' 
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

process.on('unhandledRejection', (error) => {
    console.error('Erro não tratado:', error);
});
