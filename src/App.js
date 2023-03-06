import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CommingSoon from './pages/CommingSoon';
import LandingPage from './components/landing page/LandingPage';

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user_list' element={<LandingPage/>}/>
        <Route path='/comming_soon' element={<CommingSoon/>}/>
        <Route path='/landing_page' element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
