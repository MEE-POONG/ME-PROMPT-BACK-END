import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.customer.findFirst({
                    // include: {
                    //     category: true,
                    //     unit: true
                    // },
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
                await prisma.customer.update({
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
                    }
                })

                res.status(201).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: falserror })
            }
            break
        case 'DELETE':
            try {
                await prisma.customer.delete({
                    where: {
                        id: req.query.id
                    }
                });

                res.status(204).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
