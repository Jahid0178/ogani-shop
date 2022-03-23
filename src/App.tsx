import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Shared/Navigation/Navigation';
import TopNav from './components/Shared/TopNav/TopNav';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

function App() {
  return (
    <>
      <BrowserRouter>
      <TopNav/>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
