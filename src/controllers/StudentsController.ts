import { Request, Response } from "express"

//Services
import getAllStudentsService from '../services/getAllStudentsService';
import createNewStudentService from '../services/createNewStudentService';
import deleteStudentService from '../services/deleteStudentService';
import editStudentService from '../services/editStudentService';
import reloadCacheService from '../services/reloadCacheService';

// getRedis e setRedis com promise
import { getRedis, setRedis } from '../config/redisConfig';


class StudentController {

    async index(req:Request, res:Response): Promise<Response>{
        const students = await getAllStudentsService();
        const cached = await getRedis("students")

        if (cached) {

            return res.json({ students: JSON.parse(`${cached}`) })

        } else {

            console.log("No chace")

        };
        
        await setRedis("students", JSON.stringify(students));

        return res.json({ students });
    };

    async store(req:Request, res:Response): Promise<Response>{
        const {name, email, age, cpf} = req.body;

        try {
            const student_created = await createNewStudentService(name, email, cpf, age);

            await reloadCacheService();

            return res.json({ student_created });
        }

        catch(err) {

            if(err == "Error: there is already a student with this email") {

                return res.json({ error: "there is already a student with this email" })

            } else {

                return res.json({ error: "Fatal error"});

            } 
        };      
    };

    async destroy(req:Request, res:Response): Promise<Response> {
        const { id }  = req.params;

        try {
            const student_deleted = await deleteStudentService(Number(id));

            await reloadCacheService();

            return res.json({ student_deleted });
        }
        
        catch(err) {
            if(err == "Error: no student with this id was found") {

                return res.json({ error: "no student with this id was found" });

            } else {

                return res.json({ error: "fatal error" })

            }
        };
    };

    async edit(req:Request, res:Response): Promise<Response>{
        const { id } = req.params;
        const { name, email, cpf, age } = req.body; 

        try {
            const student_edited = await editStudentService(Number(id), name, email, cpf, Number(age));
            
            await reloadCacheService();

            return res.json({ student_edited });
        }

        catch(err) {
            if(err == "Error: email already used by another student") {

                return res.json({ error: "email already used by another student" });

            } else if(err == "Error: this id not exist") {

                return res.json({ error: "this id not exist" })

            }else {

                return res.json({ error: "fatal error" })
            };
        };
    };
    
}

export default new StudentController();