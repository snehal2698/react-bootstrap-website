import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';

import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
     < Header />
     <Routes>
      <Route path='/'element={<Home />}></Route>
      <Route path='/about'element={<About />}></Route>

     </Routes>
     < Home />
     < Footer />
    </BrowserRouter>
   
  );
}

export default App;
