const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.ourWork.findFirst({
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
                await prisma.ourWork.update({
                    where: {
                        id: req.query.id
                    },
                    data: {
                        businessName: req.body.businessName,
                        facebook: req.body.facebook,
                        intragarm: req.body.intragarm,
                        line: req.body.line,
                        tel: req.body.tel,
                        addressOne: req.body.addressOne,
                        addressTwo: req.body.addressTwo,
                        subDistrict: req.body.subDistrict,
                        district: req.body.district,
                        city: req.body.city,
                        postalCode: req.body.postalCode,
                        location: req.body.location,
                        aboutTitile: req.body.aboutTitile,
                        aboutSubTitle: req.body.aboutSubTitle,
                        aboutDetailOne: req.body.aboutDetailOne,
                        aboutSubDetailOne: req.body.aboutSubDetailOne,
                        aboutDetailTwo: req.body.aboutDetailTwo,
                        aboutSubDetailTwo: req.body.aboutSubDetailTwo,
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
                await prisma.ourWork.delete({
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
