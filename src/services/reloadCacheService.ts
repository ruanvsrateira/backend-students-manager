import prismaClient from "../database/PrismaClient";
import { setRedis } from "../config/redisConfig";


const main = async() => {
    const students_bd = await prismaClient.student.findMany();

    await setRedis("students", JSON.stringify(students_bd));
};

export default main;