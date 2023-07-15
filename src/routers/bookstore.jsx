import App from '../App';
import AddNewBook from './modules/newBook';

const Bookstore = () => (
  <>
    <App />
    <div className="bookstore-div">
      <AddNewBook />
    </div>
  </>
);

export default Bookstore;
