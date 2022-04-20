import prismaStudentsRespository from "../repositories/prisma/studentsRepository";

import { User } from "../entities/User";
import { IStudent } from "./interfaces/student";

const main = async(data: IStudent): Promise<User> => {
    const user = new User(data);
    
    const exists = await prismaStudentsRespository.existsByEmail(user.email);

    if(exists) {
        throw new Error("This email is already being used by another student");
    }

    const user_created = await prismaStudentsRespository.store(user);

    return user_created;
};

export default main;
