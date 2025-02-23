export class EmailFormManager {
    constructor() {
        this.form = document.querySelector('.form-footer');
        this.submitButton = this.form?.querySelector('button[type="submit"]');
        this.inputs = {
            nome: this.form?.querySelector('#nome'),
            email: this.form?.querySelector('#email'),
            mensagem: this.form?.querySelector('#mensagem')
        };
        
        this.apiUrl = window.location.hostname === 'localhost' 
            ? 'http://localhost:3000' 
            : 'https://portfolio-yzp5.onrender.com';
    }

    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    validateName(name) {
        return name.trim().length >= 3 && !/\d/.test(name);
    }

    validateMessage(message) {
        return message.trim().length >= 10;
    }

    validateForm(formData) {
        const errors = [];

        if (!this.validateName(formData.nome)) {
            errors.push('Nome deve ter pelo menos 3 caracteres e não conter números');
        }

        if (!this.validateEmail(formData.email)) {
            errors.push('Email inválido');
        }

        if (!this.validateMessage(formData.mensagem)) {
            errors.push('Mensagem deve ter pelo menos 10 caracteres');
        }

        return errors;
    }

    showLoadingState() {
        if (this.submitButton) {
            this.submitButton.disabled = true;
            this.submitButton.textContent = 'Enviando...';
        }
    }

    resetLoadingState() {
        if (this.submitButton) {
            this.submitButton.disabled = false;
            this.submitButton.textContent = 'Enviar';
        }
    }

    sanitizeInput(input) {
        return input.trim().replace(/<[^>]*>/g, '');
    }

    showMessage(type, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        const oldMessage = this.form.querySelector('.form-message');
        if (oldMessage) {
            oldMessage.remove();
        }

        this.form.insertBefore(messageDiv, this.submitButton);
        setTimeout(() => messageDiv.remove(), 5000);
    }

    async submitForm(formData) {
        try {
            const response = await fetch(`${this.apiUrl}/submit-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(responseData.errors?.join('\n') || `HTTP error! status: ${response.status}`);
            }

            return responseData;
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            throw error;
        }
    }

    addInputValidation() {
        this.inputs.nome?.addEventListener('input', (e) => {
            const isValid = this.validateName(e.target.value);
            e.target.classList.toggle('invalid', !isValid);
        });

        this.inputs.email?.addEventListener('input', (e) => {
            const isValid = this.validateEmail(e.target.value);
            e.target.classList.toggle('invalid', !isValid);
        });

        this.inputs.mensagem?.addEventListener('input', (e) => {
            const isValid = this.validateMessage(e.target.value);
            e.target.classList.toggle('invalid', !isValid);
        });
    }

    init() {
        if (!this.form) {
            console.error('Formulário não encontrado');
            return;
        }

        this.addInputValidation();

        this.form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = {
                nome: this.sanitizeInput(this.inputs.nome.value),
                email: this.sanitizeInput(this.inputs.email.value),
                mensagem: this.sanitizeInput(this.inputs.mensagem.value)
            };

            const errors = this.validateForm(formData);

            if (errors.length > 0) {
                this.showMessage('error', errors.join('\n'));
                return;
            }

            try {
                this.showLoadingState();
                await this.submitForm(formData);
                this.showMessage('success', 'Mensagem enviada com sucesso!');
                console.log("Mensagem enviada com sucesso!")
                this.form.reset();
            } catch (error) {
                this.showMessage('error', 'Erro ao enviar mensagem. Tente novamente mais tarde.');
            } finally {
                this.resetLoadingState();
            }
        });
    }
}
