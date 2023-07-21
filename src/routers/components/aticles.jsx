import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks, AllBooks } from '../../redux/books/bookSlice';
import '../style/article.css';
import ReloadList from './addingBook';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(AllBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books]);

  if (!books) {
    return null;
  }

  return (
    <ul className="display-flex-column">
      {books.map((book) => (

        <article key={book.item_id} className="bookstore-article">

          <ReloadList key={book.item_id} bookData={book} />

        </article>
      ))}
    </ul>
  );
};
export default BookList;
