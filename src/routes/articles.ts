 import {Router} from "express"
import { createArticle } from "../controllers/articles"
import { authByToken } from "../middlewares/auth"


const route = Router()

// GET /api/articles List articles
route.get('/', async  (req,res) =>{

})
// GET /api/articles/feed Feed articles for give user
route.get('/feed',authByToken, async (req,res) =>{

})

// GET /api/articles/:slug Get a single article
route.get('/:slug', async (req,res) =>{

})

// POST /api/articles Create an article
route.post('/',authByToken, async (req,res) =>{
    try {
        const article = await createArticle(req.body.article,(req as any).req.user.email)
        res.status(200).json({article})

    } catch(e){
        return res.status(422).json({
            errors: {body: ['Could not create article', e.message]}
        })
    }
    
})

// PATCH /api/articles/:slug update an article
route.patch('/:slug', (req,res) =>{


})

// DELETE /api/articles/:slug
route.delete('/:slug', async (req,res) =>{

})


export const articlesRoute = route