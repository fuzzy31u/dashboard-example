import * as express from 'express';

const app = express();

app.get('/alive', (req, res) => {
    res.status(200).send({alive: Date.now()});
});

app.listen(80, () => {
    // tslint:disable-next-line:no-console
    console.log('listening...');
});