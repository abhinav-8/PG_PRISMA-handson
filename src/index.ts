// import { Client } from "pg";

// const client = new Client({
//   connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
// });

// async function createUserTable() {
//   await client.connect();
//   let result = await client.query(`
//             CREATE TABLE users(
//                 id SERIAL PRIMARY KEY,
//                 username VARCHAR(50) UNIQUE NOT NULL,
//                 email VARCHAR(255) UNIQUE NOT NULL,
//                 password VARCHAR(255) NOT NULL,
//                 created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//             );
//         `);
//   console.log(result);
// }

// createUserTable();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  name: string,
  phoneNumber?: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      name,
      phoneNumber,
    },
  });

  console.log("insert",res);
}

// insertUser("abhinavkumar@email.com", "password", "Abhinav", "+918288932789");

interface updateParams {
  name: string;
  password: string;
}

async function updateUser(email: string, { name, password }: updateParams) {
 const res = await prisma.user.update({
    where: { email },
    data: {
      name,
      password,
    },
  });

  console.log("update",res);
}

// updateUser("abhinavkumar@email.com",{name:"Abhinav",password:"lol"});

async function getUser(email: string) {
    const res = await prisma.user.findUnique({
        where:{
            email
        }
    })

    console.log("getuser",res);
}

getUser("abhinavkumar@email.com")