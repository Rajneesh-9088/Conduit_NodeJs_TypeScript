import  {Router} from 'express'
import { getUserByEmail } from '../controllers/users'
import { authByToken } from '../middlewares/auth'

const route = Router()

//GET /user get current user
route.get('/', authByToken, async (req,res)=> {
   try {
       const user = await getUserByEmail((req as any).user.email)
       if(!user) throw new Error('No such user found')
   } catch (e) {
       return res.status(402).json({
           errors: {body: [e.message]}
       })
   }
})

// PATCH /user update data of current user
route.patch('/', authByToken, async (req,res) =>{

})


export const userRoute = route