import bcrypt from 'bcrypt'
import { resolveModuleName, StructuredType } from 'typescript'

const SALT_ROUNDS = 10

export function hashPassword(password: string): Promise<string> {
    
    return new Promise<string>((resolve,reject) =>{
        bcrypt.hash(password, SALT_ROUNDS, (err: Error, encrypted: string) =>{
            if(err) return reject(err)

            resolve(encrypted)
        })
    })
}

export function matchPassword(hash: string, password: string): Promise<boolean> {
        return new Promise<boolean>((resolve,reject) =>{
            bcrypt.compare(password, hash, (err:Error, same:boolean) =>{
                if(err) return reject(err)

                resolve(same)

            })
        })
}
//  for testing 
async function test () {
    const pass = "rjrkekjrkerjerklrj"
    const hash = await  hashPassword(pass)
    console.log(pass,hash)

    // check with correct password
    const check1 = "rjrkekjrkerjerklrj"
    const matched1 = await matchPassword(hash,check1)
    console.log("matched1",matched1)
    // check with wrong password
    const check2 = "jklfjkljfjlkjjfj"
    const matched2 = await matchPassword(hash,check2)
    console.log("matched2",matched2)
}

test()