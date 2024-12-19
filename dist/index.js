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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
;
;
function insertOne(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client.user.create({
            data: obj,
            select: {
                userName: true,
                email: true
            }
        });
        console.log(res);
    });
}
function insertOneTodo(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client.todo.create({
            data: obj,
        });
        console.log(res);
    });
}
function findMany() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client.user.findMany({
            where: {
                email: {
                    contains: "sayanghosh",
                    mode: "insensitive"
                }
            },
            select: {
                userName: true,
                email: true
            }
        });
        console.log(res);
    });
}
function findTodoMany() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client.todo.findMany({
            include: {
                user: true
            }
        });
        console.log(res);
    });
}
//findMany()
//insertOne({userName:"test",email:"SayanGhosh14nov2003",password:"test"})
//insertOneTodo({title:"test",userId:1})
findTodoMany();
