import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/bookSlice';

const ReloadList = ({ bookData }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(bookData.item_id));
  };

  return (
    <li key={bookData.item_id} className="display-flex-row article-li">
      <div>
        <h2 className="article-id">{bookData.item_id}</h2>
        <h2 className="article-title">
          {bookData.title}
          {' '}
        </h2>
        <h2 className="article-writer">
          {bookData.author}
          {' '}
        </h2>
        <div className="article-div2">
          <div className="grey-border">
            <button className="article-comments-button" type="submit">Comments</button>
          </div>
          <div className="grey-border">
            <button className="article-remove-button" type="submit" onClick={handleRemove}>Remove</button>
          </div>
          <button className="article-edit-button" type="submit">Edit</button>
        </div>
      </div>
      <div className="display-flex-row book-status-container">
        <div className="Oval-2" />
        <div className="display-flex-column">
          <h2 className="book-percentage">0%</h2>
          <h2 className="book-status">Completed</h2>
        </div>
      </div>
      <div className="updateProgress-container">
        <h2 className="book-Chapter">CURRENT CHAPTER</h2>
        <h2 className="book-currrentChapter">Chapter 1</h2>
        <button type="submit" className="book-Update-button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

ReloadList.propTypes = {
  bookData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReloadList;
