import { useState } from "react";
import BookList from "./aticles";

export const AddNewBook = () => {

  const [book, setBook] = useState([
    {
      id: Math.floor(Math.random() * (9999 - 1000)),
      title: '',
      author: '',
    }
  ])

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Math.floor(Math.random() * (9999 - 1000)),
      title: title,
      author: author,
    }
    setBook([...book, newBook])
    console.log(book)
  }

  const delBook = (id) => {
    console.log('book deleted',id)
    console.log(book)
    setBook([
      ...book.filter((book) => {
        return book.id !== id;
      }),
    ]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="input the book title" onChange={handleChangeTitle} />
        <input type="text" placeholder="input the book author" onChange={handleChangeAuthor} />
        <button type="submit">Add Book</button>
      </form>
      <BookList booksProps={book} setBook={setBook} delBook={delBook}/>
    </div>
  );
}