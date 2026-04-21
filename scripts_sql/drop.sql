-- Limpar a tabela de relacionamento primeiro devido a restrições de chave estrangeira
DELETE FROM projects_technologies;

-- Limpar as tabelas principais
DELETE FROM projects;
DELETE FROM technologies;

DROP TABLE IF EXISTS projects_technologies;
DROP TABLE IF EXISTS technologies;
DROP TABLE IF EXISTS projects;