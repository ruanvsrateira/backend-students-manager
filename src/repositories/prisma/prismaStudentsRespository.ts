import prismaClient from "../../database/PrismaClient"

class prismaStudentsRepository{
    async index() {
        const students = await prismaClient.student.findMany();
        
        return students; 
    };

    async existsById(id:number) {
        const exists = await prismaClient.student.findUnique({
            where: { id }
        });

        return exists;
    };

    async existsByEmail(email:string) {
        const exists = await prismaClient.student.findUnique({
            where: { email }
        });

        return exists;
    };

    async store(name: string, email: string, cpf: string, age: number) {
        const student_created = await prismaClient.student.create({
            data: { name, email, cpf, age }
        });

        return student_created;
    };

    async delete(id: number) {
        const student_deleted = await prismaClient.student.delete({
            where: { id }
        });

        return student_deleted;
    };

    async edit(id: number, name: string,  email: string, age: number, cpf: string) {
        const student_edited = await prismaClient.student.update({
            where: { id },
            data: { name, email, age, cpf }
        });  

        return student_edited;
    };
}

export default new prismaStudentsRepository();