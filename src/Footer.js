import './App.css';
import { CFooter, CLink } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cibGit } from '@coreui/icons';

function Footer() {
  return (
    <CFooter className="footer">
      <div className="footer-content">
        <CIcon icon={cibGit} height={20} width={20} />
        <CLink href="https://github.com/OUATILANAS" style={{ textDecoration: 'none', color: '#ffffff' }}>GITHUB</CLink>
        <span>&copy; 2023 OUATIL ANAS.</span>
      </div>
    </CFooter>
  );
}

export default Footer;
