const pool = require('../db/db')

exports.getProjetos = async (req, res) => {
    try{
        const projetos = await pool.query('SELECT * FROM projects');
        const projetosComTecnologias = await Promise.all(projetos.rows.map(async (projetos) => {
            const tecnologias = await pool.query(
                `SELECT t.name, t.iconsrc
                FROM tecnologies t
                JOIN projects_tecnologies pt ON t.id = pt.id_tecnologie
                WHERE pt.id_project = $1`,
                [projeto.id]
            );

            return {
                ...projeto,
                tecnologias: tecnologias.rows
            };
        }));

        res.json(projetosComTecnologias);
    } catch (err){
    console.log(err);
    res.status(500).send('Erro ao buscar projetos');
    }
};
