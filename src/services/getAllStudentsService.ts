import prismaClient from "../database/PrismaClient";

const main = async() => {
    const students = await prismaClient.student.findMany();

    return students;
};

export default main;