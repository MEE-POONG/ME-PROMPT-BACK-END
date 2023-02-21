const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                let page = +req.query.page || 1;
                let pageSize = +req.query.pageSize || 10;
                const data = await prisma.$transaction([
                    prisma.auditLog.count(),
                    prisma.auditLog.findMany({
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

                await prisma.auditLog.create({
                    data: {
                        code: req.body.code,
                        dataOld: req.body.dataOld,
                        dataNew: req.body.dataNew,
                        contactId: req.body.contactId,
                        skillId: req.body.skillId,
                        memberId:req.body.memberId,
                        memberSkillId: req.body.memberSkillId,
                        workWithSkillId: req.body.workWithSkillId,
                        workWithId: req.body.workWithId,
                        positionId: req.body.positionId,
                        auditLogId: req.body.auditLogId,
                        roleId: req.body.roleId,
                        permissionId: req.body.permissionId,
                        galleryId: req.body.galleryId,
                        settingId: req.body.settingId,
                        ourworkId: req.body.ourworkId,
                        newsId: req.body.newsId,
                        blogId: req.body.blogId,
                        packagePriceId: req.body.packagePriceId,
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
