import prismaClient from "../database/PrismaClient";
import prismaStudentsRespository from "../repositories/prisma/prismaStudentsRespository";

const main = async(id: number) => {
    const exists = await prismaStudentsRespository.existsById(id);

    if(!exists) {
        throw new Error("no student with this id was found");
    }

    const student_deleted = await prismaStudentsRespository.delete(id)

    return student_deleted;
};

export default main;