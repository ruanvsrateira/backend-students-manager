import { Request, Response } from "express"

import getAllStudentsService from '../services/getAllStudentsService';
import createNewStudentService from '../services/createNewStudentService';
import deleteStudentService from '../services/deleteStudentService';
import editStudentService from '../services/editStudentService';
import reloadCacheService from '../services/reloadCacheService';

import { getRedis, setRedis } from '../config/redisConfig';

class StudentController{

    async index(req:Request, res:Response) {
        const students = await getAllStudentsService();
        const cached = await getRedis("students")

        if (cached) {
            return res.json({ students: JSON.parse(cached) })
        }
        
        await setRedis("students", JSON.stringify(students));

        return res.json({ students });
    };

    async store(req:Request, res:Response) {
        const {name, email, age, cpf} = req.body;

        const student_created: any = await createNewStudentService(name, email, cpf, Number(age));
        
        if(student_created.error) {
            return res.json({ error: `${student_created.error}`})
        }

        await reloadCacheService();

        return res.json({ student_created });
    };

    async destroy(req:Request, res:Response) {
        const { id }  = req.params;

        const student_deleted: any = await deleteStudentService(Number(id));

        if(student_deleted.error) {
            return res.json({ error: `${student_deleted.error}` })
        }

        await reloadCacheService();

        return res.json({ student_deleted });
    };

    async edit(req:Request, res:Response) {
        const { id } = req.params;
        const { name, email, cpf, age } = req.body;

        const student_edited: any = await editStudentService(Number(id), name, email, cpf, Number(age));
        
        if(student_edited.error) {
            return res.json({ error: `${student_edited.error}` })
        }
        
        await reloadCacheService();

        return res.json({ student_edited });
    };
    
}

export default new StudentController();