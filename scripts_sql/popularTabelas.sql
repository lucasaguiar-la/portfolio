-- Criando a tabela PROJECTS
CREATE TABLE projects (
    id_project INTEGER PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    imagesrc VARCHAR(255),
    description TEXT,
    projectlink VARCHAR(255)
);

-- Criando a tabela TECHNOLOGIES
CREATE TABLE technologies (
    id_technologies INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    iconsrc VARCHAR(255) NOT NULL
);

-- Criando a tabela PROJECTS_TECHNOLOGIES
CREATE TABLE projects_technologies (
    id_project INTEGER NOT NULL,
    id_tecnologie INTEGER NOT NULL,
    FOREIGN KEY (id_project) REFERENCES projects(id_project),
    FOREIGN KEY (id_tecnologie) REFERENCES technologies(id_technologies)
);

-- Populando a tabela PROJECTS
INSERT INTO projects (id_project, title, imagesrc, description, projectlink) VALUES
(1, 'API Weather', './assets/images/geral/projeto.png', 'API REST em Python para coleta de dados climáticos, com armazenamento em PostgreSQL.', 'https://github.com/lucasaguiar-la/api_Weather'),
(2, 'ETL GitHub', './assets/images/geral/projeto.png', 'Pipeline ETL para análise de dados de repositórios Python no GitHub. Dataset via Kaggle.', 'https://github.com/lucasaguiar-la/ETL_GitHub'),
(3, 'DocsPro', './assets/images/geral/projeto.png', 'Projeto de automação para tratamento e carregamento de arquivos, com python, interface e base de dados.', 'https://github.com/lucasaguiar-la/app_DocsPro'),
(4, 'App Vagas', './assets/images/geral/projeto.png', 'Aplicativo que faz scrapping web nas vagas do LinkedIn, com python, selenium e airflow.', 'https://github.com/lucasaguiar-la/app_Vagas'),
(5, 'Portfolio', './assets/images/geral/projeto.png', 'Meu portfólio de programação, feito para organizar e demonstrar um pouco sobre meus projetos e exercícios.', 'https://github.com/lucasaguiar-la/portfolio');

-- Populando a tabela TECHNOLOGIES
INSERT INTO technologies (id_technologies, name, iconsrc) VALUES
(1, 'Python', './assets/images/icones/projetos/python-icon.png'),
(2, 'PostgreSQL', './assets/images/icones/projetos/postgresql-icon.png'),
(3, 'Docker', './assets/images/icones/projetos/docker-icon.png'),
(4, 'Kaggle', './assets/images/icones/projetos/kaggle-icon.png'),
(5, 'JavaScript', './assets/images/icones/projetos/javascript-icon.png'),
(6, 'Selenium', './assets/images/icones/projetos/selenium-icon.png'),
(7, 'MongoDB', './assets/images/icones/projetos/mongodb-icon.png'),
(8, 'AirFlow', './assets/images/icones/projetos/airflow-icon.png'),
(9, 'GhostScript', './assets/images/icones/projetos/ghostscript.png'),
(10, 'HTML5', './assets/images/icones/projetos/html-icon.png'),
(11, 'CSS5', './assets/images/icones/projetos/css-icon.png'),
(12, 'NodeJS', './assets/images/icones/projetos/node-icon.png');

-- Populando a tabela PROJECTS_TECHNOLOGIES
INSERT INTO projects_technologies (id_project, id_tecnologie) VALUES
(1, 2), (1, 3), (1, 1),
(2, 1), (2, 4),
(3, 1), (3, 9), (3, 7),
(4, 1), (4, 2), (4, 7), (4, 6), (4, 8),
(5, 10), (5, 11), (5, 5), (5, 12), (5, 2);
