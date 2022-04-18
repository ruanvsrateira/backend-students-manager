import prismaClient from "../database/PrismaClient";

import prismaStudentsRespository from "../repositories/prisma/prismaStudentsRespository";

const main = async(name:string, email:string, cpf:string, age:number) => {
    
    const exists:any = await prismaStudentsRespository.existsByEmail(email);

    if(exists) {
        return { error: "there is already a student with this email" };
    }

    const student_created = await prismaStudentsRespository.store(name, email, cpf, age);

    return student_created;
};

export default main;