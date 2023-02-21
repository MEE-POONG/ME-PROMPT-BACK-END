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
                        title: req.body.title,
                        subTitle: req.body.subTitle,
                        subDetail: req.body.subDetail,
                        detailOne: req.body.detailOne,
                        detailTwo: req.body.detailTwo,
                        detailThree: req.body.detailThree,
                        listOne: req.body.listOne,
                        listTwo: req.body.listTwo,
                        listThree: req.body.listThree,
                        start: req.body.start,
                        end: req.body.end,
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
