const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.skill.findFirst({
                    where: {
                        id: req.query.id
                    }
                });
                
                res.status(200).json(data)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'PUT':
            try {
                await prisma.skill.update({
                    where: {
                        id: req.query.id
                    },
                    data: {
                        name: req.body.name,
                        updatedBy: req.body.updatedBy,
                    }
                })
                
                res.status(201).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                await prisma.skill.delete({
                    where: {
                        id: req.query.id
                    }
                });
                
                res.status(204).end()
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
