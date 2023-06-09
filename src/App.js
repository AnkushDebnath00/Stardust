import './App.css';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import MovieDetails from './components/moviedetail/MovieDetails';
import { Routes, Route } from 'react-router-dom'
import SearchResults from './components/moviedetail/SearchResults';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Maincomp />} />
        <Route path='movie/:id' element={<MovieDetails />} />
        <Route path='movies/:movietype' element={<SearchResults />} />
        {/* <Route path='/search/:query' element={<SearchResults />} /> */}
      </Routes>
      {/* <div> */}
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
