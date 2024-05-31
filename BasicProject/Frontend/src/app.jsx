import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import axios from 'axios'

export function App() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    axios.get('/api/books')
    .then((response)=>{
      setBooks(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1>Full Stack Project</h1>
      <p>Books: {books.length}</p>
      {
        books.map((book, index)=>{
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.content}</p>
          </div>
        })
      }
    </>
  )
}
