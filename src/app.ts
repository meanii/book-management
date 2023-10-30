import { Express } from 'express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ErrorMiddleware } from '@middlewares/error.middleware';
import BooksRouter from '@routes/books';
import { MongoClient } from '@client/mongodb';

const PORT: string = process.env.PORT ?? `3000`;
const MONGO_URL: string = process.env.MONGO_URL ?? `mongodb://127.0.0.1:27017/test`;


const app: Express = express();

app.use(express.json());
app.use(cors())
app.use(morgan(`dev`));


app.use(`/books`, BooksRouter)
app.use(ErrorMiddleware.error);

app.listen(PORT, async () => {
    await new MongoClient(MONGO_URL).connect();
    console.log(`Server is running on port http://0.0.0.0:${PORT}/books`);
});