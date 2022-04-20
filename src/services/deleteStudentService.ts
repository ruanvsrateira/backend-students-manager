import { User } from "../entities/User";
import prismaStudentsRespository from "../repositories/prisma/studentsRepository";

const main = async(id: number): Promise<User> => {
    const exists = await prismaStudentsRespository.existsById(id);

    if(!exists) {
        throw new Error("no student with this id was found");
    }

    const student_deleted = await prismaStudentsRespository.delete(id)

    return student_deleted;
};

export default main;