-- MODELO NOVO (NEON / UUID)
-- projects(id, title, description, image_url, github_url, live_url, created_at)
-- technologies(id, name, iconsrc)
-- projects_technologies(project_id, technology_id)

-- Populando a tabela projects
INSERT INTO projects (title, description, image_url, github_url, live_url) VALUES
('API Weather', 'API REST em Python para coleta de dados climáticos, com armazenamento em PostgreSQL.', './assets/images/geral/projeto.png', 'https://github.com/lucasaguiar-la/api_Weather', 'https://github.com/lucasaguiar-la/api_Weather'),
('ETL GitHub', 'Pipeline ETL para análise de dados de repositórios Python no GitHub. Dataset via Kaggle.', './assets/images/geral/projeto.png', 'https://github.com/lucasaguiar-la/ETL_GitHub', 'https://github.com/lucasaguiar-la/ETL_GitHub'),
('DocsPro', 'Projeto de automação para tratamento e carregamento de arquivos, com python, interface e base de dados.', './assets/images/geral/projeto.png', 'https://github.com/lucasaguiar-la/app_DocsPro', 'https://github.com/lucasaguiar-la/app_DocsPro'),
('Portfolio', 'Meu portfólio de programação, feito para organizar e demonstrar um pouco sobre meus projetos e exercícios.', './assets/images/geral/projeto.png', 'https://github.com/lucasaguiar-la/portfolio', 'https://github.com/lucasaguiar-la/portfolio');

-- Populando a tabela technologies
INSERT INTO technologies (name, iconsrc) VALUES
('Python', './assets/images/icones/projetos/python-icon.png'),
('PostgreSQL', './assets/images/icones/projetos/postgresql-icon.png'),
('Docker', './assets/images/icones/projetos/docker-icon.png'),
('Kaggle', './assets/images/icones/projetos/kaggle-icon.png'),
('JavaScript', './assets/images/icones/projetos/javascript-icon.png'),
('Selenium', './assets/images/icones/projetos/selenium-icon.png'),
('MongoDB', './assets/images/icones/projetos/mongodb-icon.png'),
('AirFlow', './assets/images/icones/projetos/airflow-icon.png'),
('GhostScript', './assets/images/icones/projetos/ghostscript.png'),
('HTML5', './assets/images/icones/projetos/html-icon.png'),
('CSS5', './assets/images/icones/projetos/css-icon.png'),
('NodeJS', './assets/images/icones/projetos/node-icon.png');

-- Populando a tabela projects_technologies (relacionamento por UUID)
INSERT INTO projects_technologies (project_id, technology_id)
SELECT p.id, t.id
FROM projects p
JOIN technologies t ON t.name IN ('PostgreSQL', 'Docker', 'Python')
WHERE p.title = 'API Weather';

INSERT INTO projects_technologies (project_id, technology_id)
SELECT p.id, t.id
FROM projects p
JOIN technologies t ON t.name IN ('Python', 'Kaggle')
WHERE p.title = 'ETL GitHub';

INSERT INTO projects_technologies (project_id, technology_id)
SELECT p.id, t.id
FROM projects p
JOIN technologies t ON t.name IN ('Python', 'GhostScript', 'MongoDB')
WHERE p.title = 'DocsPro';

INSERT INTO projects_technologies (project_id, technology_id)
SELECT p.id, t.id
FROM projects p
JOIN technologies t ON t.name IN ('HTML5', 'CSS5', 'JavaScript', 'NodeJS', 'PostgreSQL')
WHERE p.title = 'Portfolio';
