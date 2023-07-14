import { useState } from 'react'
import { ArrBook } from './newBook'

const ReloadList = ({ key, bookData, delBook}) => {

  

  return (
    <li key={key}>
      <h2 className="article-category" >{key}</h2>
      <h2 className="article-title">{bookData.title} </h2>
      <h2 className="article-writer">{bookData.author} </h2>
      <div className="article-div2">
        <button className="article-comments-button">Comments</button>
        <button className="article-remove-button" onClick={() => delBook(bookData.id)}>Remove</button>
        <button className="article-edit-button">Edit</button>
      </div>
    </li>
  )
}

export default ReloadList

