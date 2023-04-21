import { Link, useLocation } from 'react-router-dom';
import { MegaMenu } from 'primereact/megamenu';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";  
import './App.css';

const items = [
  {label: 'Home', to: '/'},
  {label: 'Formations', to: '/formations'},
  {label: 'Experience',to: '/experience' },
  {label: 'Certificat', to: '/certificat'},
  {label: 'Projets',to: '/projets'},
];

function NavBar() {
  const location = useLocation();

  return (
    <div>
      <MegaMenu model={items.map(item => ({
        template: (
          <Link to={item.to} className="p-menuitem-link" style={{color:'#ffffff',fontWeight: 'bold'}}>
            {item.label}
          </Link>
        ),
      }))} breakpoint="960px" style={{display: 'flex', justifyContent: 'center',backgroundColor:'#3d005f'}} />
    </div>
  );
}

export default NavBar;
