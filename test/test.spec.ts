/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import app from '../src/app';
import request from "supertest";

describe("Create Student Controller", () => {
  it("Should be able to create a new student", async () => {
    const response = await request(app).post("/students").send({
      name: "teste1",
      email: "teste1@teste.com",
      age: 18,
      cpf: "123-123-123-123"
    })

    expect(response.status).toEqual(200);
  });

  it("Should be not able create a new student", async() => {
    await request(app).post('/students').send({
      name: "teste2",
      email: "teste2@teste.com",
      age: 19,
      cpf: "22-22-22-22"
    });
    
    const response = await request(app).post('/students').send({
      name: "teste2",
      email: "teste2@teste.com",
      age: 19,
      cpf: "22-22-22-22"
    });

    expect(response.body.error).toEqual("there is already a student with this email")
    
  });
});

describe("Get all Students", () => {
  it("Should be able returns students", async() => {
    const response = await request(app).get("/students");

    expect(typeof response.body.students).toBe("object");
  });
});

describe("Delete Student a id equal a 1", () => {
  it("Should be able Delete Dtudent Service", async() => {
    const response = await request(app).get("/students/1/delete");

    expect(typeof response.body.student_deleted).toBe("object");
  });

  it("Should be show error, this student by this id not exist", async() => {
    const response = await request(app).get("/students/1/delete");

    expect(response.body.error).toEqual("no student with this id was found");
    expect(typeof response.body).toBe("object")
  });
});

describe("Edit Student Service", () => {
  it("Should able edit a user a id equal a 2", async() => {
    const response = await request (app).post("/students/2/edit").send({
      name: "test3",
      email: "test3@test.com",
      age: 19,
      cpf: "22-22-22-22",
    });

    expect(response.status).toEqual(200);
    expect(typeof response.body).toBe("object")
  });

  it("Should not able edit user by id equal a 1 not exist", async() => {
    const response = await request(app).post("/students/1/edit").send({
      name: " ",
      email: " ",
      age: 0,
      cpf: " ",
    });

    expect(typeof response.body).toBe("object");
    expect(response.body.error).toEqual("this id not exist");
  })

  it("Should not able edit use by email equal a another user", async() => {
    const response = await request(app).post("/students/2/edit").send({
      name: "test3",
      email: "test3@test.com",
      age: 19,
      cpf: "22-22-22-22"
    });

    expect(typeof response.body).toBe("object");
    expect(response.body.error).toEqual("email already used by another student");
  });
});