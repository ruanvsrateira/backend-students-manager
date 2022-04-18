import prismaClient from "../database/PrismaClient";

const main = async(id:number, name:string, email:string, cpf:string, age:number) => {
    const existsEmail = await prismaClient.student.findUnique({
        where: { email }
    });

    if(existsEmail) {
        return { error: "email already used by another student" }
    };

    const existsId = await prismaClient.student.findUnique({
        where: { id }
    });

    if(!existsId) {
        return { error: "this id not exist" };
    }
    
    const student_edited = prismaClient.student.update({
        where: { id },
        data: { name, email, cpf, age },
    });

    return student_edited;
};

export default main;