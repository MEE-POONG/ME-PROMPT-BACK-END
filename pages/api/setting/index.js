const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                let page = +req.query.page || 1;
                let pageSize = +req.query.pageSize || 10;
                const data = await prisma.$transaction([
                    prisma.department.count(),
                    prisma.department.findMany({
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
                await prisma.department.create({
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
                        createdBy: req.body.createdBy,
                    }
                });
                res.status(201).json({ success: true });
            } catch (error) {

                res.status(400).json({ success: false });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
