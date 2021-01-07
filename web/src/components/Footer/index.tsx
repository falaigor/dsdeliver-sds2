import './style.css';
import { FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="main-footer">
      <p>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior</p>
      <div className="footer-icons">
        <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g"
          target="_new">
          <FiYoutube size="26" />
        </a>

        <a href="https://www.linkedin.com/school/devsuperior/"
          target="_new">
          <FiLinkedin size="26" />
        </a>

        <a href="https://www.instagram.com/devsuperior.ig/"
          target="_new">
          <FiInstagram size="26" />
        </a>

      </div>
    </footer>
  );
}

export default Footer;