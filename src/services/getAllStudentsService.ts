import prismaStudentsRespository from "../repositories/prisma/prismaStudentsRespository";

const main = async() => {
    const students = await prismaStudentsRespository.index();

    return students;
};

export default main;