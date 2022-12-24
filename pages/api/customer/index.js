import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        // case 'GET':
        //     try {
        //         const data = await prisma.customer.findMany({
        //             include: { Position: true }
        //         });
        //         res.status(200).json(data)
        //     } catch (error) {
        //         res.status(400).json({ success: false })
        //     }
        //     break
        case 'GET':
            try {
                let page = +req.query.page || 1;
                let pageSize = +req.query.pageSize || 10;
                const data = await prisma.$transaction([
                    prisma.customer.count(),
                    prisma.customer.findMany({
                        include: { Position: true },
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
                await prisma.customer.create({
                    data: {
                        name: req.body.name,
                        price: parseInt(req.body.price),
                        description: req.body.description,
                        image: req.body.image,
                        categoryId: req.body.categoryId,
                        amount: parseInt(req.body.amount),
                        unitId: req.body.unitId,
                    }
                })
                res.status(201).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
