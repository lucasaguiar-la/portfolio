module.exports = {
    apps: [
        {
            name: "portfolio-api",

            // Arquivo principal
            script: "backend/server.js",

            // Diretório de execução
            cwd: "/var/www/portfolio",

            // Instâncias (1 = simples, cluster = escala)
            instances: 1,

            // Reinício automático
            autorestart: true,

            // Reinicia se usar muita memória
            max_memory_restart: "300M",

            // Delay entre restarts
            restart_delay: 3000,

            // Logs
            out_file: "/var/log/pm2/portfolio-out.log",
            error_file: "/var/log/pm2/portfolio-error.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss",

            // Junta logs
            merge_logs: true,

            // Variáveis de ambiente
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};