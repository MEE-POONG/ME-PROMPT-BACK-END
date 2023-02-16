const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                let page = +req.query.page || 1;
                let pageSize = +req.query.pageSize || 10;
                const data = await prisma.$transaction([
                    prisma.memberSkill.count(),
                    prisma.memberSkill.findMany({
                        skip: (page - 1) * pageSize,
                        take: pageSize,
                    })
                ])
                const totalPage = Math.ceil(data[0] / pageSize);
                res.status(200).json({ data: data[1], page, pageSize, totalPage })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const nameCheck = await prisma.memberSkill.findMany({
                    where: { name: req.body.name }
                });
                if (nameCheck.length === 0) {
                    await prisma.memberSkill.create({
                        data: {
                            name: req.body.name,
                            createdBy: req.body.createdBy,
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
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
