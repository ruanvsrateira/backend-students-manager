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
const User_1 = require("../entities/User");
const main = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.User(data);
    const exists = yield studentsRepository_1.default.existsByEmail(user.email);
    if (exists) {
        throw new Error("This email is already being used by another student");
    }
    const user_created = yield studentsRepository_1.default.store(user);
    return user_created;
});
exports.default = main;
