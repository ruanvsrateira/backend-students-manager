import prismaClient from "../database/PrismaClient";
import prismaStudentsRespository from "../repositories/prisma/prismaStudentsRespository";

const main = async(id:number, name:string, email:string, cpf:string, age:number) => {
    const existsEmail = await prismaStudentsRespository.existsByEmail(email);

    if(existsEmail) {
        return { error: "email already used by another student" }
    };

    const existsId = await prismaStudentsRespository.existsById(id);

    if(!existsId) {
        return { error: "this id not exist" };
    }
    
    const student_edited = prismaStudentsRespository.edit(id, name, email, age, cpf);

    return student_edited;
};

export default main;