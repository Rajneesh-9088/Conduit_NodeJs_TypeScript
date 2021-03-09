
import jwt from 'jsonwebtoken'
import{User} from "../entities/User"

//TODO: move to config file

const JWT_SECRET = 'some-very-very-secret-string-no-one-can-guess'

export async function sign(user: User): Promise<string> {
   return new Promise((resolve,reject)=> {
         jwt.sign({
        username: user.username,
        email: user.email
    },JWT_SECRET, (err:any, encoded:string | undefined) =>{
        if(err) return reject(err)
        else resolve(encoded as string)
    })
   })
}

// for testing

async function run() {
    const token = await sign({email:'raj@gmail.com', username:'raj'})
    console.log("===============================================================================")
    console.log("token",token)
    console.log("---------------------------------------------------------------------------------")
}

run();