const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                let page = +req.query.page || 1;
                let pageSize = +req.query.pageSize || 10;
                const data = await prisma.$transaction([
                    prisma.member.count() || 0,
                    prisma.member.findMany({
                        skip: (page - 1) * pageSize,
                        take: pageSize,
                        include: { Position: true },
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
                const nameCheck = await prisma.member.findMany({
                    where: { firstname: req.body.firstname, lastname: req.body.lastname }
                });
                if (nameCheck.length === 0) {
                    await prisma.member.create({
                        data: {
                            username: req.body.username,
                            password: req.body.password,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            facebook: req.body.facebook,
                            line: req.body.line,
                            instagram: req.body.instagram,
                            addressOne: req.body.addressOne,
                            addressTwo: req.body.addressTwo,
                            subDistrict: req.body.subDistrict,
                            district: req.body.district,
                            city: req.body.city,
                            postalCode: req.body.postalCode,
                            positionId: req.body.positionId,
                            createdBy: req.body.createdBy,
                        }
                    });
                    res.status(201).json({ success: true });
                } else {
                    res.status(400).json({ success: false, message: 'มีสกิล ' + req.body.firstname + ' ' + req.body.lastname + ' แล้ว' });
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



