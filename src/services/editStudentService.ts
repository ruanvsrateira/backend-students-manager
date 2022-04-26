import { User } from "../entities/User";

import prismaStudentsRespository from "../repositories/prisma/studentsRepository";

import { IStudent } from "./interfaces/student";

const main = async(data: IStudent) => {
    const existsEmail = await prismaStudentsRespository.existsByEmail(data.email);
    const existsId = await prismaStudentsRespository.existsById(Number(data.id));

    if(existsEmail) {
        if(existsEmail.id == data.id) {
            const user = new User(data);

            const user_edited = await prismaStudentsRespository.edit(user);

            return user_edited;
        } else {
            throw new Error("email already used by another student");
        }
    }

    if(!existsId) {
        throw new Error("this id not exist")
    }

    const user = new User(data);

    const user_edited = await prismaStudentsRespository.edit(user);

    return user_edited;
};

export default main;