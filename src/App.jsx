import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Navbar component
const Navbar = () => {
  return (
    <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 shadow-lg rounded-lg z-10 max-w-2xl w-full">
      <ul className="flex justify-center space-x-8 font-body text-lg">
        <li className="relative group">
          <Link 
            to="/" 
            className="transition-transform transform group-hover:scale-110 hover:text-sky-300 hover:font-bold hover:text-lg"
          >
            Home
          </Link>
        </li>
        <li className="relative group">
          <Link 
            to="/blogs" 
            className="transition-transform transform group-hover:scale-110 hover:text-sky-300 hover:font-bold hover:text-lg"
          >
            Blogs
          </Link>
        </li>
        <li className="relative group">
          <Link 
            to="/projects" 
            className="transition-transform transform group-hover:scale-110 hover:text-sky-300 hover:font-bold hover:text-lg"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="bg-light-pattern p-4 shadow-lg rounded-lg mt-auto max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <a 
            href="https://www.linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-center text-sky-500 hover:text-sky-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <a 
            href="https://github.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-center text-sky-500 hover:text-sky-700 transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <a 
            href="https://twitter.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-center text-sky-500 hover:text-sky-700 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

// Blogs component
const Blogs = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Tech Blogs</h2>
          <p className="mb-4">Explore various articles and insights on the latest tech trends and developments.</p>
          <a 
            href="https://medium.com/@rajyagurupurva28" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sky-500 hover:underline"
          >
            Read Tech Blogs
          </a>
        </div>
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Fiction Stories</h2>
          <p className="mb-4">Dive into creative and engaging fiction stories crafted to captivate your imagination.</p>
          <a 
            href="https://storymirror.com/profile/hnhix3du/purva-rajyaguru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sky-500 hover:underline"
          >
            Read Fiction Stories
          </a>
        </div>
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold mb-2">About Life</h2>
          <p className="mb-4">Insights and reflections on life experiences, personal growth, and more.</p>
          <a 
            href="#" 
            className="text-sky-500 hover:underline"
          >
            Coming Soon
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects component
const Projects = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center text-white">Projects</h1>
      <p className="text-white">Adding soon</p>
    </div>
  );
};

// Home component
const Home = () => {
  const curiosity = "curiosity";
  return (
    <div className="text-content bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <p className="mb-2 text-center font-body text-custom-lg leading-custom-lg">Hiii, I am Purva.</p>
      <p className="mb-2 text-center font-body text-custom-lg leading-custom-lg">You are seeing my creative side where I am cool & nerd :D</p>
      <p className="mb-2 text-center font-body text-custom-lg leading-custom-lg">Been trying to learn everything since I can't hold back my {curiosity}.</p>
      <p className="mb-2 text-center font-body text-custom-lg leading-custom-lg">I always wanted to build something interesting, I am not a perfectionist but I make sure my code is working :)</p>
      <p className="text-center font-body text-custom-lg leading-custom-lg">Even though frontend is the first thing that attracts a user, my interest got into deep tech {"<3"} and backend more.</p>
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-10 bg-light-pattern">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
