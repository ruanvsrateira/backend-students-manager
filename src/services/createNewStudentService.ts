import prismaClient from "../database/PrismaClient";

const main = async(name:string, email:string, cpf:string, age:number) => {
    const exists = await prismaClient.student.findUnique({
        where: { email }
    });

    if(exists) {
        return { error: "email already used by another student" }
    } 
    
    const student_created = await prismaClient.student.create({
        data: { name, email, cpf, age }
    });

    return student_created;
};

export default main;