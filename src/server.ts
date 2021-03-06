import   express from 'express';
import {createConnection} from "typeorm";

const app = express()

app.get('/', (req,res) => {
    res.send("Hello World");
})

async function start() {
    await createConnection({
        type: "mysql",
        username: 'clone',
        password: 'clone',
        database: 'clone',
        entities: [],
        synchronize: true,
        logging: true,
        logger: "advanced-console"

    })
    app.listen(3232, () => {
        console.log(`Server started on http://localhost:3232`);
    })
}

start();


