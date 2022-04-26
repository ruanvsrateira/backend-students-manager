"use strict";
/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
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
const app_1 = __importDefault(require("../src/app"));
const supertest_1 = __importDefault(require("supertest"));
describe("Create Student Controller", () => {
    it("Should be able to create a new student", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/students").send({
            name: "teste1",
            email: "teste1@teste.com",
            age: 18,
            cpf: "123-123-123-123"
        });
        expect(response.status).toEqual(200);
    }));
    it("Should be not able create a new student", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).post('/students').send({
            name: "teste2",
            email: "teste2@teste.com",
            age: 19,
            cpf: "22-22-22-22"
        });
        const response = yield (0, supertest_1.default)(app_1.default).post('/students').send({
            name: "teste2",
            email: "teste2@teste.com",
            age: 19,
            cpf: "22-22-22-22"
        });
        expect(response.body.error).toEqual("This email is already being used by another student");
    }));
    it("Should be able create new Student", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/students').send({
            name: "teste3",
            email: "teste3@teste.com",
            age: 19,
            cpf: "22-22-22-22"
        });
    }));
});
describe("Get all Students", () => {
    it("Should be able returns students", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/students");
        expect(typeof response.body.students).toBe("object");
    }));
});
describe("Delete Student a id equal a 1", () => {
    it("Should be able Delete Student Service", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/students/1/delete");
        expect(typeof response.body.student_deleted).toBe("object");
    }));
    it("Should be show error, this student by this id not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/students/1/delete");
        expect(response.body.error).toEqual("no student with this id was found");
        expect(typeof response.body).toBe("object");
    }));
});
describe("Edit Student Service", () => {
    it("Should able edit a user a id equal a 2", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/students/1/edit").send({
            name: "test3",
            email: "test4@test.com",
            age: 19,
            cpf: "22-22-22-22",
        });
        expect(response.body.error).toEqual("this id not exist");
        expect(typeof response.body).toBe("object");
    }));
    it("Should not able edit user by id equal a 1 not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/students/1/edit").send({
            name: " ",
            email: " ",
            age: 0,
            cpf: " ",
        });
        expect(typeof response.body).toBe("object");
        expect(response.body.error).toEqual("this id not exist");
    }));
    it("Delete test3", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/students/2/delete");
    }));
});
afterAll((done) => {
    done();
});
