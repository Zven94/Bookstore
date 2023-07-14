import App from "../App";
import BookList from "./modules/aticles";
import { AddNewBook } from "./modules/newBook";

const Bookstore = () => {
  return (
    <>
      <App />
      <div className="bookstore-div">
        <AddNewBook />
      </div>
    </>
  )
}

export default Bookstore;