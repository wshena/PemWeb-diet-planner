import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from './pages/homePage'
import OlahragaPage from "./pages/olahragaPage";
import ResepPage from "./pages/reseppage";
import ProgramPage from "./pages/programPage";
import OlahragaPagi from "./components/olahragaComponents/OlahragaPagi/OlahragaPagi";
import Peregangan from "./components/olahragaComponents/OlahragaPagi/Peregangan";
import HiitPembakarLemak from "./components/olahragaComponents/OlahragaPagi/hiitPembakarLemak";
import ResepMakanan0 from "./components/resepPage/resepPageLanjutan/resepMakanan0";
import ResepMakanan1 from "./components/resepPage/resepPageLanjutan/resepMakanan1";
import ResepMakanan2 from "./components/resepPage/resepPageLanjutan/resepMakanan2";
import ResepMakanan3 from "./components/resepPage/resepPageLanjutan/resepMakanan3";
import ResepMaknanan4 from "./components/resepPage/resepPageLanjutan/resepMakanan4";
import ResepMaknanan5 from "./components/resepPage/resepPageLanjutan/resepMakanan5";
import ResepMaknanan6 from "./components/resepPage/resepPageLanjutan/resepMakanan6";
import ResepMaknanan7 from "./components/resepPage/resepPageLanjutan/resepMakanan7";
import ResepPageLanjutan from "./components/resepPage/resepPageLanjutan/resepPageLanjutan";
import ProfilePage from "./pages/profilePage";
import Register from "./loginSystem/Register/Register";
import Login from "./loginSystem/Login/Login";

import {useContext} from 'react'
import {UserContext} from './loginSystem/context/UserContext';

function App() {
  const {user} = useContext(UserContext); 
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path="program" element={<ProgramPage />} />
        <Route path="olahraga" element={<OlahragaPage />} />
        <Route path="resep" element={<ResepPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="olahragaPagi" element={<OlahragaPagi />} />
        <Route path="peregangan" element={<Peregangan />} />
        <Route path="hiit" element={<HiitPembakarLemak />} />
        <Route path="resepLanjutan" element={<ResepPageLanjutan />} />
        <Route path="resepMakanan0" element={<ResepMakanan0 />} />
        <Route path="resepMakanan1" element={<ResepMakanan1 />} />
        <Route path="resepMakanan2" element={<ResepMakanan2 />} />
        <Route path="resepMakanan3" element={<ResepMakanan3 />} />
        <Route path="resepMakanan4" element={<ResepMaknanan4 />} />
        <Route path="resepMakanan5" element={<ResepMaknanan5 />} />
        <Route path="resepMakanan6" element={<ResepMaknanan6 />} />
        <Route path="resepMakanan7" element={<ResepMaknanan7 />} />
        
        {!user && (
              <>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              </>
            )}
        { user && <Route path="/" element={<ProfilePage/>} /> }
        <Route path="*" element={<Navigate to={user ? '/':'/login'} />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
