const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

exports.validateFormData = ({ nome, email, mensagem }) => {
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