import { PrismaClient } from "@prisma/client";
const client=new PrismaClient()
interface User{
    userName:string
    email:string
    password:string
};
interface Todo{
   title:string,
   description?:string,
   userId:number
};
async function insertOne(obj:User){
    const res=await client.user.create({
        data:obj,
        select:{
            userName:true,
            email:true
        }
    })
    console.log(res)
}
async function insertOneTodo(obj:Todo){
    const res=await client.todo.create({
        data:obj,
    })
    console.log(res)
}
async function findMany(){
    const res=await client.user.findMany({
        where:{
            email:{
                 contains:"sayanghosh",
                 mode:"insensitive"
            }
        },
        select:{
            userName:true,
            email:true
        }
    })
    console.log(res)
}
async function findTodoMany(){
    const res=await client.todo.findMany({
        include:{
            user:{
                select:{
                    email:true
                }
            }
        }
    })
    console.log(res)
}
//findMany()
//insertOne({userName:"test",email:"SayanGhosh14nov2003",password:"test"})
//insertOneTodo({title:"test",userId:1})
findTodoMany()