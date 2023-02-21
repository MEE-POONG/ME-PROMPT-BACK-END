const prisma = require('../prisma');

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.auditLog.findFirst({
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
                await prisma.auditLog.update({
                    where: {
                        id: req.query.id
                    },
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
                        departmentId: req.body.departmentId,
                        roleId: req.body.roleId,
                        permissionId: req.body.permissionId,
                        galleryId: req.body.galleryId,
                        settingId: req.body.settingId,
                        ourworkId: req.body.ourworkId,
                        newsId: req.body.newsId,
                        blogId: req.body.blogId,
                        packagePriceId: req.body.packagePriceId,
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
                await prisma.auditLog.delete({
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
