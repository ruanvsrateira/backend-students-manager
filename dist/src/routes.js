"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StudentsController_1 = __importDefault(require("./controllers/StudentsController"));
const routes = (0, express_1.Router)();
routes.get("/students", StudentsController_1.default.index);
routes.post("/students", StudentsController_1.default.store);
routes.get("/students/:id/delete", StudentsController_1.default.destroy);
routes.post("/students/:id/edit", StudentsController_1.default.edit);
exports.default = routes;
