import { Student } from "@prisma/client";
import prismaClient from "../../database/PrismaClient";

import { User } from "../../entities/User";
import { IStudentRepository } from "./IStudentRepository";

class prismaStudentsRepository implements IStudentRepository{
    async index(): Promise<Student[]>{
        const students = await prismaClient.student.findMany();
        
        return students; 
    };

    async existsById(id: number): Promise<Student|null>{
        const exists = await prismaClient.student.findUnique({
            where: { id }
        });

        return exists;
    };

    async existsByEmail(email: string): Promise<Student|null>{
        const exists = await prismaClient.student.findUnique({
            where: { email }
        });

        return exists;
    };

    async store(user: User): Promise<Student>{
        
        const student_created = await prismaClient.student.create({
            data: {
                name: user.name,
                email: user.email,
                cpf: user.cpf,
                age: user.age
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

    async edit(user: User): Promise<Student> {
        const student_edited = await prismaClient.student.update({
            where: { id: user.id },
            data: {
                name: user.name,
                email: user.email,
                cpf: user.cpf,
                age: user.age
            }
        });  

        return student_edited;
    };
}

export default new prismaStudentsRepository();