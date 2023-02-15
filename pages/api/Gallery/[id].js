const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.gallery.findFirst({
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
                await prisma.gallery.update({
                    where: {
                        id: req.query.id
                    },
                    data: {
                        alt: req.body.alt,
                        how: req.body.how,
                        updatedBy: req.body.updatedBy,
                        blogId: req.body.blogId,
                        memberId: req.body.memberId,
                        departmentId: req.body.departmentId,
                        ourWorkId: req.body.ourWorkId,
                        settingId: req.body.settingId,
                        newsId: req.body.newsId,
                        serviceId: req.body.serviceId,
                        ImgListId: req.body.ImgListId,
                    }
                })

                res.status(201).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                await prisma.gallery.delete({
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
