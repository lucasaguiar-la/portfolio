const { validateFormData } = require('../validators/emailValidators');
const { sendEmail } = require('../services/emailServices');

exports.handleEmailForm = async (req, res) => {
    try {
        await sendEmail(req.body);
        return res.status(200).json({ 
            sucess: true, 
            message: 'E-mail enviado com sucesso!' 
        })
    } catch(err) {
        console.error('Erro ao enviar e-mail:', err);
        return res.status(500).json({ 
            sucess: false,
            message: 'Erro ao enviar e-mail. Tente novamente mais tarde.'
        })
    }
}