// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import Profile from './components/Profile';


function App() {
  return (

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>



  );

}

export default App;
