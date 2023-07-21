import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BookList from './aticles';
import { addBook } from '../../redux/books/bookSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      category: '',
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="article-container">
      <BookList />
      <div className="divider" />
      <div className="display-flex-column ">
        <div className="div-form-container">
          <h2 className="div-form-h2">ADD NEW BOOK</h2>
          <form onSubmit={handleSubmit} className="display-flex-row form-container">
            <input type="text" placeholder="Add Title" onChange={(e) => setTitle(e.target.value)} value={title} required className="title-input" />
            <input type="text" placeholder="Add Author" onChange={(e) => setAuthor(e.target.value)} value={author} required className="author-input" />
            <button type="submit" className="submit-input">Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
