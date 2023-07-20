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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="input the book title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <input type="text" placeholder="input the book author" onChange={(e) => setAuthor(e.target.value)} value={author} />
        <button type="submit">Add Book</button>
      </form>
      <BookList />
    </div>
  );
};

export default AddNewBook;
