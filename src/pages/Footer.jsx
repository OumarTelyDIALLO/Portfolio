import '../styles/Footer.css'; // Assurez-vous que le chemin est correct
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Diallo Oumar Tely. Tous droits réservés.</p>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/share/15YXXDzNDN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        
        <a href="https://www.linkedin.com/in/oumar-tely-diallo-14b883362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/OumarTelyDIALLO?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
