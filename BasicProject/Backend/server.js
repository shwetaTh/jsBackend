import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready');
})

app.get('/api/books', (req, res)=>{
    const books =[
        {
            id: 1,
            title: 'crime and punishment',
            content: 'good'
        },
        {
            id: 2,
            title: 'no longer human',
            content: 'very good'
        },
        {
            id:3,
            title: 'once upon a broken heart',
            content: 'ok'
        }
    ]
    res.send(books)
})

app.get('/login', (req, res)=>{
    res.send("please login");
})

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Serving at port ${port}`);
})