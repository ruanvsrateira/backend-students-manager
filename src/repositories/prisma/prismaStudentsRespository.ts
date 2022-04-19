import { Student } from "@prisma/client";
import prismaClient from "../../database/PrismaClient"

class prismaStudentsRepository{
    async index(): Promise<Student[]>{
        const students = await prismaClient.student.findMany();
        
        return students; 
    };

    async existsById(id:number): Promise<Student|null>{
        const exists = await prismaClient.student.findUnique({
            where: { id }
        });

        return exists;
    };

    async existsByEmail(email:string): Promise<Student|null>{
        const exists = await prismaClient.student.findUnique({
            where: { email }
        });

        return exists;
    };

    async store(name: string, email: string, cpf: string, age: number): Promise<Student>{
        
        const student_created = await prismaClient.student.create({
            data: {
                name: name,
                email: email,
                cpf: cpf,
                age: age
            }
        });

        return student_created;
    };

    async delete(id: number): Promise<Student> {
        const student_deleted = await prismaClient.student.delete({
            where: { id }
        });

        return student_deleted;
    };

    async edit(id: number, name: string,  email: string, age: number, cpf: string): Promise<Student> {
        const student_edited = await prismaClient.student.update({
            where: { id },
            data: { name, email, age, cpf }
        });  

        return student_edited;
    };
}

export default new prismaStudentsRepository();