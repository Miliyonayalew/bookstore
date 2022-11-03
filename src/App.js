import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Catagories from './pages/Catagories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Catagories />} />
      </Routes>
    </>
  );
}

export default App;
