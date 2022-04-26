"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrismaClient_1 = __importDefault(require("../../database/client/PrismaClient"));
class prismaStudentsRepository {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield PrismaClient_1.default.student.findMany();
            return students;
        });
    }
    ;
    existsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield PrismaClient_1.default.student.findUnique({
                where: { id }
            });
            return exists;
        });
    }
    ;
    existsByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield PrismaClient_1.default.student.findUnique({
                where: { email }
            });
            return exists;
        });
    }
    ;
    store(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const student_created = yield PrismaClient_1.default.student.create({
                data: {
                    name: user.name,
                    email: user.email,
                    cpf: user.cpf,
                    age: user.age
                }
            });
            return student_created;
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student_deleted = yield PrismaClient_1.default.student.delete({
                where: { id }
            });
            return student_deleted;
        });
    }
    ;
    edit(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const student_edited = yield PrismaClient_1.default.student.update({
                where: { id: user.id },
                data: {
                    name: user.name,
                    email: user.email,
                    cpf: user.cpf,
                    age: user.age
                }
            });
            return student_edited;
        });
    }
    ;
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield PrismaClient_1.default.student.findUnique({
                where: { id }
            });
            return student;
        });
    }
}
exports.default = new prismaStudentsRepository();
