const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                let page = +req.query.page || 1;
                let pageSize = +req.query.pageSize || 10;
                const data = await prisma.$transaction([
                    prisma.gallery.count(),
                    prisma.gallery.findMany({
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
                const nameCheck = await prisma.gallery.findMany({
                    where: { ImgListId: req.body.ImgListId, }
                });
                if (nameCheck.length === 0) {
                    await prisma.gallery.create({
                        data: {
                            alt: req.body.alt,
                            how: req.body.how,
                            createdBy: req.body.createdBy,
                            blogId: req.body.blogId,
                            memberId: req.body.memberId,
                            departmentId: req.body.departmentId,
                            ourWorkId: req.body.ourWorkId,
                            settingId: req.body.settingId,
                            newsId: req.body.newsId,
                            serviceId: req.body.serviceId,
                            ImgListId: req.body.ImgListId,

                        }
                    });
                    res.status(201).json({ success: true });
                } else {
                    res.status(400).json({ success: false, message: "มีแผนก" + req.body.name + "แล้ว" });
                }
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
