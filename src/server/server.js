import express from 'express';
import ReactDom from 'react-dom/server';
import { indexTemplate } from '../server/index.Template';
import { Header } from '../shared/Header';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDom.renderToString(Header()))
    );
});

app.listen(3001, () => {
    console.log('Server started on http://localhost:3001');
});
