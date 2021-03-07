import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface UserSignupData {
    username: string
    // password:   // TODO: securely handle passwords
    email: string
}

export async function createUser(data: UserSignupData) {
    
    try {
        const user = await getRepository(User).save({
            username: data.username,
            email: data.email
    })
    console.log("createUser ======== ", user)
    return user
    } catch (e) {
        console.error(e)
    }

}