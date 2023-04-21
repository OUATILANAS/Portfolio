import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
import "primereact/resources/primereact.min.css";  

import { Card } from 'primereact/card';
import NavBar from './NavBar';
import Footer from './Footer';
import image from './1.jpeg'; 

      
    
function Acceuil() {
  return (
    <div>
    <NavBar />
    <Card className='App' style={{backgroundColor: '#c06dff' , color:'#ffffff',marginTop: '10px'}}>
    <img src={image} alt="Logo" height={150} width={150} style={{ borderRadius: 100}} />
    <h1>OUATIL ANAS</h1>
    <h2>EMSI ETUDIANT</h2>
</Card> 

<Card title="OUATIL ANAS" style={{marginTop: '40px'}}>
    <p className="m-0">
    Je m'appelle Anas OUATIL et je suis étudiant en informatique. J'ai étudié à l'ESMA pendant trois ans avant de rejoindre l'EMSI cette année. J'ai effectué trois stages, dont deux chez NORSYS AFRIQUE en 2021 et 2022, ainsi qu'un autre chez J2CD en 2021. Je maîtrise plusieurs langages de programmation tels que PHP, JAVA, VB, C#, C++, C, HTML, XML, CSS, JS, jQuery, VueJS, Bootstrap, Cisco CCNA, SQL, MySQL, Oracle, Symfony, Joomla, WordPress, Assembleur, React Native, Windows Server et Linux. De plus, je parle couramment l'anglais, le français et l'arabe. Je suis passionné par l'informatique et j'aime apprendre de nouvelles technologies pour améliorer mes compétences. </p>
</Card>
<Footer/>
</div>
  );
}

export default Acceuil;
