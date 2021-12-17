import express, { Express, Request, Response } from 'express';
import bodyParser, { urlencoded } from 'body-parser';
import 'dotenv/config';
import helmet from 'helmet';

const app: Express = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(bodyParser.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
        res.send(`<h2>Hello TypeScript!</h2>`);
});

app.listen(PORT, () => console.log(`server App running on port:::${PORT}⚡`));
