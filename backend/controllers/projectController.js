const pool = require('../db/db')

exports.getProjetos = async (req, res) => {
    try{
        const projetos = await pool.query('SELECT * FROM projects');
        const projetosComTecnologias = await Promise.all(projetos.rows.map(async (projeto) => {
            const tecnologias = await pool.query(
                `SELECT t.name, t.iconsrc
                FROM technologies t
                JOIN projects_technologies pt ON t.id_technologies = pt.id_technologie
                WHERE pt.id_project = $1`,
                [projeto.id_project]
            );

            return {
                titulo: projeto.title,
                imagemSrc: projeto.imagesrc,
                descricao: projeto.description,
                linkProjeto: projeto.projectlink,
                tecnologias: tecnologias.rows.map(t => ({
                    nome: t.name,
                    caminho: t.iconsrc
                }))
            };
        }));

        res.json(projetosComTecnologias);
    } catch (err){
    console.log(err);
    res.status(500).send('Erro ao buscar projetos');
    }
};
