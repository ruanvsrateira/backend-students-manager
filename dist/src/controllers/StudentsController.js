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
//Services
const getAllStudentsService_1 = __importDefault(require("../services/getAllStudentsService"));
const createNewStudentService_1 = __importDefault(require("../services/createNewStudentService"));
const deleteStudentService_1 = __importDefault(require("../services/deleteStudentService"));
const editStudentService_1 = __importDefault(require("../services/editStudentService"));
const reloadCacheService_1 = __importDefault(require("../services/reloadCacheService"));
// getRedis e setRedis com promise
const redisConfig_1 = require("../config/redisConfig");
class StudentController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield (0, getAllStudentsService_1.default)();
            const cached = yield (0, redisConfig_1.getRedis)("students");
            if (cached) {
                return res.json({ students: JSON.parse(`${cached}`) });
            }
            else {
                console.log("No chace");
            }
            ;
            yield (0, redisConfig_1.setRedis)("students", JSON.stringify(students));
            return res.json({ students });
        });
    }
    ;
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, age, cpf } = req.body;
            try {
                const student_created = yield (0, createNewStudentService_1.default)({
                    name, email, age, cpf
                });
                yield (0, reloadCacheService_1.default)();
                return res.json({ student_created });
            }
            catch (err) {
                if (err == "Error: This email is already being used by another student") {
                    return res.json({ error: "This email is already being used by another student" });
                }
                else {
                    return res.json({ error: "fatal error" });
                }
            }
        });
    }
    ;
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const student_deleted = yield (0, deleteStudentService_1.default)(Number(id));
                yield (0, reloadCacheService_1.default)();
                return res.json({ student_deleted });
            }
            catch (err) {
                if (err == "Error: no student with this id was found") {
                    return res.json({ error: "no student with this id was found" });
                }
                else {
                    return res.json({ error: "fatal error" });
                }
            }
            ;
        });
    }
    ;
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email, cpf, age } = req.body;
            try {
                const student_edited = yield (0, editStudentService_1.default)({
                    id: Number(id),
                    name, email, cpf, age
                });
                yield (0, reloadCacheService_1.default)();
                return res.json({ student_edited });
            }
            catch (err) {
                if (err == "Error: email already used by another student") {
                    return res.json({ error: "email already used by another student" });
                }
                else if (err == "Error: this id not exist") {
                    return res.json({ error: "this id not exist" });
                }
                else {
                    return res.json({ error: "fatal error" });
                }
                ;
            }
            ;
        });
    }
    ;
}
exports.default = new StudentController();
