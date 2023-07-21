import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks, removeBook, AllBooks } from '../../redux/books/bookSlice';

const ReloadList = ({ bookData }) => {
  const dispatch = useDispatch();
  const books = useSelector(AllBooks);

  const handleRemove = () => {
    dispatch(removeBook(bookData.item_id));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books]);

  return (
    <li key={bookData.item_id}>
      <h2 className="article-category">{bookData.item_id}</h2>
      <h2 className="article-title">
        {bookData.title}
        {' '}
      </h2>
      <h2 className="article-writer">
        {bookData.author}
        {' '}
      </h2>
      <div className="article-div2">
        <button className="article-comments-button" type="submit">Comments</button>
        <button className="article-remove-button" type="submit" onClick={handleRemove}>Remove</button>
        <button className="article-edit-button" type="submit">Edit</button>
      </div>
    </li>
  );
};

ReloadList.propTypes = {
  bookData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReloadList;
