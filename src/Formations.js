import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Panel } from 'primereact/panel';

function Formations() {
  return (
    <div className="App">
        <NavBar />
        <Panel header="Cycle Ingenieur - EMSI -" style={{maxWidth: '1200px',margin:'0 auto',marginTop: '10px'}}>
            <p className="m-0">
            École Marocaine des Sciences de l'Ingénieur
            <h5>2022-aujourd'hui</h5>
               </p>
        </Panel>
        <Panel header="BAC +3 - ESMA -" style={{maxWidth: '1200px',margin:'0 auto',marginTop: '10px'}}>
            <p className="m-0">
            Ecole Supérieure de Marrakech
            <h5>2019-2022</h5>
            </p>
        </Panel>
        <Panel header="Baccalauréat - EL KHALED 2 -" style={{maxWidth: '1200px',margin:'0 auto',marginTop: '10px'}}>
            <p className="m-0">
                EL khaled 2 
                <h5>29, Lotissement Ascjour Socoma Marrakech </h5>
            </p>
        </Panel>
        <div style={{marginTop: '70px'}}></div> 

              <Footer/>
    </div>
  );
}

export default Formations;
