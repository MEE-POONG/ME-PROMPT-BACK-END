const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.memberSkill.findFirst({
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
                const nameCheck = await prisma.memberSkill.findMany({
                    where: { memberId: req.body.memberId, skillId: req.body.skillId }
                });
                if (nameCheck.length === 0) {
                    await prisma.memberSkill.create({
                        data: {
                            memberId: req.body.memberId,
                            skillId: req.body.skillId,
                            updatedBy: req.body.updatedBy,
                        }
                    });
                    res.status(201).json({ success: true });
                } else {
                    res.status(400).json({ success: false, message: 'มีสกิล ' + req.body.name + ' แล้ว' });
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                await prisma.memberSkill.delete({
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
