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
const User_1 = require("../entities/User");
const studentsRepository_1 = __importDefault(require("../repositories/prisma/studentsRepository"));
const main = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const existsEmail = yield studentsRepository_1.default.existsByEmail(data.email);
    const existsId = yield studentsRepository_1.default.existsById(Number(data.id));
    if (existsEmail) {
        if (existsEmail.id == data.id) {
            const user = new User_1.User(data);
            const user_edited = yield studentsRepository_1.default.edit(user);
            return user_edited;
        }
        else {
            throw new Error("email already used by another student");
        }
    }
    if (!existsId) {
        throw new Error("this id not exist");
    }
    const user = new User_1.User(data);
    const user_edited = yield studentsRepository_1.default.edit(user);
    return user_edited;
});
exports.default = main;
