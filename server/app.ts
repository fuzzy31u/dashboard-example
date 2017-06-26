import * as express from 'express';

const app = express();

app.get('/alive', (req, res) => {
    res.status(200).send({alive: Date.now()});
});

app.use(express.static(__dirname));

app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log('listening...' + __dirname);
});