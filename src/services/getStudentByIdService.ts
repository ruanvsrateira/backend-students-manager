import { Student } from "@prisma/client";
import studentsRepository from "../repositories/prisma/studentsRepository";

const main = async(id: number): Promise<Student | null> => {
    const student = await studentsRepository.getStudentById(id);
    
    if(!student) {
        throw new Error("not found student on this id");
    }

    return student;
};

export default main;