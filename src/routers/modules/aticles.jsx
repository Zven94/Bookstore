import { useState } from 'react'
import '../style/article.css'
import ReloadList from './addingBook'
const BookList = ({ booksProps, setBook, delBook }) => {

  return (
    <ul>
      {booksProps.map((book) => (
        <article className="display-flex-row bookstore-article" >
          <div>
            <ReloadList key={book.id} bookData={book} setBook={setBook} delBook={delBook}/>
          </div>
        </article>
      ))}
    </ul>
  )
}


export default BookList