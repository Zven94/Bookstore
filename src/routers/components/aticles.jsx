import { useSelector } from 'react-redux';
import '../style/article.css';
import ReloadList from './addingBook';

const BookList = () => {
  const booksArr = useSelector((state) => state.books.booksArr);

  return (
    <ul>
      {booksArr.map((book) => (

        <article key={book.item_id} className="display-flex-row bookstore-article">
          <div>
            <ReloadList key={book.item_id} bookData={book} />
          </div>
        </article>
      ))}
    </ul>
  );
};
export default BookList;
