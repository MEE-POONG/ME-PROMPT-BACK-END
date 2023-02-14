const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.member.findFirst({
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
                await prisma.member.update({
                    where: {
                        id: req.query.id
                    },
                    data: {
                        positionId: req.body.positionId,
                        username: req.body.username,
                        password: req.body.password,
                        img: req.body.img,
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
                        statusManager: req.body.statusManager,
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
                await prisma.member.delete({
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
