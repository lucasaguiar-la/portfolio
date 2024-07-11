
const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://portfolio-my2v.onrender.com/'
document.querySelector('.form-footer').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formulario = event.target;
    const formularioData = new FormData(formulario);
    const data = Object.fromEntries(formularioData.entries());

    try {
        const response = await fetch(`${apiUrl}/submit-form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            formulario.reset();
        } else {
            alert('Falha ao enviar a mensagem. Tente novamente mais tarde.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
    }
});
