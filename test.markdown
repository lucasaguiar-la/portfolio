# Configuração do Formulário de Contato - Ambiente Local

Este guia explica como configurar e testar o formulário de contato localmente.

## 1. Configuração do Gmail

1. Acesse as configurações da sua conta Google
2. Ative a "Verificação em duas etapas"
3. Gere uma "Senha de App":
   - Vá em Segurança
   - Procure por "Senhas de App"
   - Selecione "App: Email"
   - Selecione "Dispositivo: Outro (Nome personalizado)"
   - Digite um nome (ex: "Nodemailer")
   - Copie a senha gerada

## 2. Configuração do Projeto

### 2.1 Arquivo .env
Crie um arquivo `.env` na pasta `server`:

```bash
plaintext
PORT=3000
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-do-gmail
```

### 2.2 Ajuste no emailForm.js

```javascript
export class EmailFormManager {
constructor() {
this.form = document.querySelector('.form-footer');
this.apiUrl = 'http://localhost:3000';
}
}
```


## 3. Instalação e Execução

### 3.1 Instale as dependências

```bash
npm install
```

### 3.2 Execute o servidor

```bash
npm run dev
```


## 4. Testando

1. Abra `http://localhost:3000` no navegador
2. Preencha o formulário de contato
3. Envie o formulário
4. Verifique o email configurado no `.env`

## 5. Debugging

Se precisar debugar, adicione logs no `server.js`:

```javascript
app.post('/submit-form', async (req, res) => {
try {
console.log('Dados recebidos:', req.body);
// ... código do processamento ...
console.log('Email enviado com sucesso!');
} catch (error) {
console.error('Erro detalhado:', error);
}
});
```

## 6. Estrutura de Arquivos

```bash
projeto/
├── public/
│ ├── assets/
│ │ └── js/
│ │ └── modules/
│ │ └── emailForm.js
│ └── index.html
├── server/
│ ├── .env
│ └── server.js
└── package.json
```

## 7. Possíveis Erros e Soluções

### 7.1 Erro de Autenticação
- Verifique se a senha do app está correta
- Confirme se o email no .env está correto
- Certifique-se que a verificação em duas etapas está ativa

### 7.2 Erro de Conexão
- Verifique se o servidor está rodando
- Confirme se a porta 3000 está livre
- Verifique se o apiUrl está correto no emailForm.js

### 7.3 Erro no Envio
- Verifique os logs no console do servidor
- Confirme se os dados do formulário estão corretos
- Verifique se há conexão com internet

## 8. Observações Importantes

- Mantenha o arquivo `.env` no `.gitignore`
- Não compartilhe sua senha de app
- Use apenas para testes locais
- Para produção, configure um novo ambiente
