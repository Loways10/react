import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Person from './pages/person/Person';
import Header from './template/header/Header';
import Footer from './template/footer/Footer';
import People from './pages/people/People'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/person/:number' element={<Person />} />
        <Route path='/people' element={<People />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
