import { Router } from 'express';
import StudentsController from './controllers/StudentsController';

const routes = Router();

routes.get("/students", StudentsController.index);
routes.post("/students", StudentsController.store);
routes.get("/students/getStudent/:id", StudentsController.getStudentById);
routes.get("/students/:id/delete", StudentsController.destroy);
routes.post("/students/:id/edit", StudentsController.edit);

export default routes;