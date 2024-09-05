import './App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 shadow-lg rounded-lg z-10 max-w-2xl w-full">
      <ul className="flex justify-center space-x-8 font-body text-lg">
        <li className="relative group">
          <Link to="/blogs" className="transition-transform transform group-hover:scale-110 hover:text-sky-300 hover:font-bold hover:text-lg">Blogs</Link>
        </li>
        <li className="relative group">
          <Link to="/projects" className="transition-transform transform group-hover:scale-110 hover:text-sky-300 hover:font-bold hover:text-lg">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
