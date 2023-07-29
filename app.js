import express from 'express';
import userRouter from './routes/user.js';
import {config} from 'dotenv'


export const app = express();

config({
    path: "./data/config.env"
})
// Using middlewares
app.use(express.json());
app.use(userRouter);

app.get('/', (req, res) => {
    res.send('Welcome');
});

