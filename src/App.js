import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formations from './Formations';
import Acceuil from './Accueil';
import Experience from './Experience';
import Cours from './Cours';
import Projets from './Projets';
import Galerie from './Galerie';
import Certificat from './Certificat';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="" element={<Acceuil />} />
        <Route path="formations" element={<Formations />} />
        <Route path="experience" element={<Experience />} />
        <Route path="certificat" element={<Certificat />} />
        <Route path="projets" element={<Projets />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


