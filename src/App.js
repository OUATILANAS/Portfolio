import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formations from './Formations';
import Acceuil from './Accueil';
import Experience from './Experience';
import Cours from './Cours';
import Projets from './Projets';
import Galerie from './Galerie';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="" element={<Acceuil />} />
        <Route path="formations" element={<Formations />} />
        <Route path="experience" element={<Experience />} />
        <Route path="cours" element={<Cours />} />
        <Route path="projets" element={<Projets />} />
        <Route path="galerie" element={<Galerie />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


