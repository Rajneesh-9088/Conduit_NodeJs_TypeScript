import { getRepository } from "typeorm";
import { User } from "../entities/User";
import {sanitizeFields} from "../utils/security";
import { hashPassword, matchPassword } from "../utils/password";
import { sign } from "../utils/jwt";
import { singularize } from "sequelize/types/lib/utils";

interface UserSignupData {
    username: string
    password: string  
    email: string
}

interface UserLoginData{
    email: string
    password: string

}

export async function createUser(data: UserSignupData):Promise<User> {
        // Check for data validity
    if(!data.username) throw new Error("username is blank")
    if(!data.email) throw new Error("email is blank")
    if(!data.password) throw new Error("password is blank")

    const repo = await getRepository(User)
    // Check if user exists
    const existing = await repo.findOne(data.email)
    if(existing) throw new Error("User with this email exists")

    // Create user and send back
    
    try {
      const user = new User()
      user.username = data.username
      user.email = data.email
      user.password = await hashPassword(data.password)
      const result = await getRepository(User).save(user)
      user.token = await sign(user)
     
      return sanitizeFields(user)
    

    } catch (e) {
        console.error(e)
         throw e
    }

}

export async function loginUser(data: UserLoginData):Promise<User> {
    // check for data validity
    if(!data.email) throw new Error("email is blank")
    if(!data.password) throw new Error("password is blank")

    const repo = getRepository(User)

    // check if email exists
    const user = await repo.findOne(data.email)

    if(!user) throw new Error("No user with this email id")


    // check if password match
    const password = await matchPassword(user.password!, data.password)

    if(!password) throw new Error("Wrong password")
    
    user.token = await sign(user)
    return sanitizeFields(user)
}

