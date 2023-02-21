const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                let page = +req.query.page || 1;
                let pageSize = +req.query.pageSize || 10;
                const data = await prisma.$transaction([
                    prisma.blog.count(),
                    prisma.blog.findMany({
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

                await prisma.blog.create({
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
                        createdBy: req.body.createdBy,
                    }
                });
                res.status(201).json({ success: true });
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
