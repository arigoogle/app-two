// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetups';
import Layout from './components/layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />}></Route>
          <Route path='/new-meetup' element={<NewMeetupPage />}></Route>
          <Route path='/favorites' element={<FavoritesPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>


  );

}

export default App;
