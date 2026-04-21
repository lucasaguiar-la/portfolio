const pool = require('../db/db');

exports.getProjects = async (req, res) => {
    try {
        const projectsResult = await pool.query(
            `
            SELECT
                p.id,
                p.title,
                p.description,
                p.image_url,
                p.github_url,
                p.live_url,
                t.name AS technology_name,
                t.iconsrc AS technology_icon_url
            FROM projects p
            LEFT JOIN projects_technologies pt
                ON pt.project_id = p.id
            LEFT JOIN technologies t
                ON t.id = pt.technology_id
            ORDER BY p.created_at DESC
            `
        );

        const projectsMap = new Map();

        projectsResult.rows.forEach((row) => {
            if (!projectsMap.has(row.id)) {
                projectsMap.set(row.id, {
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    imageUrl: row.image_url,
                    githubUrl: row.github_url,
                    liveUrl: row.live_url,
                    technologies: []
                });
            }

            if (row.technology_name && row.technology_icon_url) {
                projectsMap.get(row.id).technologies.push({
                    name: row.technology_name,
                    iconUrl: row.technology_icon_url
                });
            }
        });

        const projectsWithTechnologies = Array.from(projectsMap.values());

        res.json(projectsWithTechnologies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching projects' });
    }
};

exports.createProject = async (req, res) => {
    try {
        const {
            title,
            description,
            imageUrl,
            githubUrl,
            liveUrl,
            technologies
        } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: 'title and description are required' });
        }

        if (!imageUrl) {
            return res.status(400).json({ error: 'imageUrl is required' });
        }

        const { rows } = await pool.query(
            `
            INSERT INTO projects
            (title, description, image_url, github_url, live_url)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            `,
            [title, description, imageUrl, githubUrl || null, liveUrl || null]
        );

        const projectId = rows[0].id;

        if (technologies) {
            const techIds = Array.isArray(technologies)
                ? technologies
                : JSON.parse(technologies);

            for (const techId of techIds) {
                await pool.query(
                    `
                    INSERT INTO projects_technologies (project_id, technology_id)
                    VALUES ($1, $2)
                    `,
                    [projectId, techId]
                );
            }
        }

        res.status(201).json({
            id: rows[0].id,
            title: rows[0].title,
            description: rows[0].description,
            imageUrl: rows[0].image_url,
            githubUrl: rows[0].github_url,
            liveUrl: rows[0].live_url,
            technologies: []
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error creating project' });
    }
};
