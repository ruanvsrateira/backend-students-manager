import { Student } from "@prisma/client";
import prismaStudentsRespository from "../repositories/prisma/studentsRepository";

const main = async(): Promise<Student[]> => {
    const students = await prismaStudentsRespository.index();

    return students;
};

export default main;