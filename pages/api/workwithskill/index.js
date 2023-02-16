const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                let page = +req.query.page || 1;
                let pageSize = +req.query.pageSize || 10;
                const data = await prisma.$transaction([
                    prisma.workWithSkill.count(),
                    prisma.workWithSkill.findMany({
                        skip: (page - 1) * pageSize,
                        take: pageSize,
                    })
                ])
                const totalPage = Math.ceil(data[0] / pageSize);
                res.status(200).json({ data: data[1], page, pageSize, totalPage })

            } catch (error) {
                console.log(error);

                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const nameCheck = await prisma.workWithSkill.findMany({
                    where: { workWithId: req.body.workWithId, skillId: req.body.skillId }
                });
                if (nameCheck.length === 0) {
                    await prisma.workWithSkill.create({
                        data: {
                            workWithId: req.body.workWithId,
                            skillId: req.body.skillId,
                            createdBy: req.body.createdBy,
                        }
                    });
                    res.status(201).json({ success: true });
                } else {
                    console.log(error);
                    res.status(400).json({ success: false, message: 'มีสกิล ' + req.body.name + ' แล้ว' });
                }
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false })
            }
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
