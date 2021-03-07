import  {Router} from 'express'

const route = Router()

//GET /user
route.get('/', (req,res)=> {
    res.send('GET /user it has hit') //TODO; temporary
})

export const userRoute = route