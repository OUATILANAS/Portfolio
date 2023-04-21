import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Panel } from 'primereact/panel';

function Experience() {
  return (
    <div className="App">
        <NavBar />
        <Panel header="Stage Norsys Afrique" style={{maxWidth: '1200px',margin:'0 auto',marginTop: '10px'}}>
            <p className="m-0">
            •	Creation d’une plateform avec VueJS et Symfony
            <br/>
            •   Resoudre des problems techniques et du reseaux 

<h5>2022</h5>
               </p>
        </Panel>
        <Panel header="Stage J2CD" style={{maxWidth: '1200px',margin:'0 auto',marginTop: '10px'}}>
            <p className="m-0">
            •	Creation d’une application avec c#
            <h5>2021</h5>

               </p>
        </Panel>
        <Panel header="Stage Norsys Afrique" style={{maxWidth: '1200px',margin:'0 auto',marginTop: '10px'}}>
            <p className="m-0">
            •	Creation d’un site web avec SpringBoot
            <br/>
            •	Resoudre des problems du reseaux
<h5>2021</h5>
               </p>
        </Panel>
        <div style={{marginTop: '70px'}}></div> 

            <Footer/>
    </div>
  );
}

export default Experience;