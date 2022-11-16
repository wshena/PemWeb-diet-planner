import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from './pages/homePage'
import OlahragaPage from "./pages/olahragaPage";
import ResepPage from "./pages/reseppage";
import ProgramPage from "./pages/programPage";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path="program" element={<ProgramPage />} />
        <Route path="olahraga" element={<OlahragaPage />} />
        <Route path="resep" element={<ResepPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
