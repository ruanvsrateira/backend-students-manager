import { Student } from "@prisma/client";
import { User } from "../../entities/User";

export interface IStudentRepository {
    existsById(id: number): Promise<Student|null>
    existsByEmail(email: string): Promise<Student|null>
    index(): Promise<Student[]>
    store(user: User): Promise<Student>
    delete(id: number): Promise<Student>
    edit(user: User): Promise<Student>
}