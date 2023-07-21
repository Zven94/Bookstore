import { Link } from 'react-router-dom';
import ProfilePic from './assets/logo-no-circle.png';
import './App.css';

function App() {
  return (
    <header className="display-flex-row header">
      <div className="header-div">
        <h1 className="header-h1">Bookstore CMS</h1>
        <Link to="/">Bookstore</Link>
        <Link to="categories">Categories</Link>
      </div>
      <span className="header-span">
        <img src={ProfilePic} alt="" className="profile-picture" />
      </span>
    </header>
  );
}

export default App;
