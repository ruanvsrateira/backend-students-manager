import { User } from "../entities/User";

import prismaStudentsRespository from "../repositories/prisma/studentsRepository";

import { IStudent } from "./interfaces/student";

const main = async(data: IStudent): Promise<User>=> {
    const existsEmail = await prismaStudentsRespository.existsByEmail(data.email);
    const existsId = await prismaStudentsRespository.existsById(Number(data.id));

    if(existsEmail) {
        throw new Error("email already used by another student");
    };

    if(!existsId) {
        throw new Error("this id not exist")
    }
    
    const user = new User(data)

    const student_edited = prismaStudentsRespository.edit(user);

    return student_edited;
};

export default main;