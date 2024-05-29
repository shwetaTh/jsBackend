import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready');
})

app.get('/books', (req, res)=>{
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
        }
    ]
    res.send(books)
})

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Serving at port ${port}`);
})