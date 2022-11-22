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
import OlahragaPagi from "./components/olahragaComponents/OlahragaPagi/OlahragaPagi";
import Peregangan from "./components/olahragaComponents/OlahragaPagi/Peregangan";

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
        <Route path="olahragaPagi" element={<OlahragaPagi />} />
        <Route path="peregangan" element={<Peregangan />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
