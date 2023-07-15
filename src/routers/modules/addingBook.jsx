import PropTypes from 'prop-types';

const ReloadList = ({ listKey, bookData, delBook }) => (
  <li key={listKey}>
    <h2 className="article-category">{listKey}</h2>
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
      <button className="article-remove-button" type="submit" onClick={() => delBook(bookData.id)}>Remove</button>
      <button className="article-edit-button" type="submit">Edit</button>
    </div>
  </li>
);

ReloadList.propTypes = {
  listKey: PropTypes.number.isRequired,
  bookData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default ReloadList;
