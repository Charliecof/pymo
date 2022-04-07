const PrismaClient = require("@prisma/client").PrismaClient;
const model = new PrismaClient();

exports.findUserByMail = async (mail) =>{
    return await model.user.findFirst({
        where:{
            mail: mail
        }
    })
}

exports.createUser = async (payload) =>{
    return await model.user.create({
        data: payload
    })
}
