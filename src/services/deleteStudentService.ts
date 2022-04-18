import prismaClient from "../database/PrismaClient";

const main = async(id:number) => {
    const exists = await prismaClient.student.findUnique({
        where: { id }
    });

    if(!exists) {
        return { error: "user not exists" }
    }

    const student_deleted = await prismaClient.student.delete({
        where: {
            id
        }
    });

    return student_deleted;
};

export default main;