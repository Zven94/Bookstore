import '../style/article.css';
import PropTypes from 'prop-types';
import ReloadList from './addingBook';

const BookList = ({ booksProps, setBook, delBook }) => (
  <ul>
    {booksProps.map((book) => (

      <article key={book.id} className="display-flex-row bookstore-article">
        <div>
          <ReloadList key={book.id} bookData={book} setBook={setBook} delBook={delBook} />
        </div>
      </article>
    ))}
  </ul>
);

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(PropTypes.func).isRequired,
  setBook: PropTypes.func.isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookList;
