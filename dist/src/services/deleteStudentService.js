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
const studentsRepository_1 = __importDefault(require("../repositories/prisma/studentsRepository"));
const main = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield studentsRepository_1.default.existsById(id);
    if (!exists) {
        throw new Error("no student with this id was found");
    }
    const student_deleted = yield studentsRepository_1.default.delete(id);
    return student_deleted;
});
exports.default = main;
