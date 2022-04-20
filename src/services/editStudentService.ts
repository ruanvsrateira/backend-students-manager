import prismaClient from "../database/PrismaClient";
import prismaStudentsRespository from "../repositories/prisma/prismaStudentsRespository";

const main = async(id:number, name:string, email:string, cpf:string, age:number) => {
    const existsEmail = await prismaStudentsRespository.existsByEmail(email);
    const existsId = await prismaStudentsRespository.existsById(id);

    if(existsEmail) {
        throw new Error("email already used by another student");
    };

    if(!existsId) {
        throw new Error("this id not exist")
    }
    
    const student_edited = prismaStudentsRespository.edit(id, name, email, cpf, age);

    return student_edited;
};

export default main;