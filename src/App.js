import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <header className='display-flex-row header'>
      <div className='header-div'>
        <h1 className='header-h1'>Bookstore CMS</h1>
        <Link to={'bookstore'}>Bookstore</Link>
        <Link to={'bookstore'}>Categories</Link>
      </div>
      <span className='header-span'>Profile Picture</span>
    </header>
  );
}

export default App;
