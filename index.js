import express from 'express';

const port = 8000;
const app = express();

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.redirect('/page404');
});

app.get('/page404', (req, res) => {
    res.send('404 - not found');
});

app.all('/hello', (req, res, next) => {
    console.log('ALL handler');
    next();
});

app.get('/hello', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //res.setDefaultEncoding('utf-8');
    res.send('Hello');
});
