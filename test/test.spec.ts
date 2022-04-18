/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import app from '../src/app';
import request from "supertest";

 describe("Create Student Controller", () => {
   it("Should be able to create a new user", async () => {
     const response = await request(app).post("/students").send({
       name: "ruan",
       email: "ruan@ruan.com",
       age: 18,
       cpf: "123-123-123-123"
     })

     console.log(response.body)
   });
 });