import express from 'express';
import router from './src/routes';
const app = express();
const port = 8080;

var allowCrossDomain = (req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:52113");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Request-With, content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(express.json());
app.use(router)
// example of componenet routers app.use('component', componentRouter);

/*app.get('/', (req: Request, res: Response, next: any) => {
    res.send('Express + TypeScript Server');
});*/

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
