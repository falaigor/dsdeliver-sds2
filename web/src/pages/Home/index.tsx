import './style.css';
import imagemHome from '../../images/imagem.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1>Faça seu pedido que entregamos pra você!</h1>
          <p>Escolha o seu pedido e em poucos minutos levaremoss na sua porta</p>
          <Link className="home-btn-order" to="/orders">FAZER PEDIDO</Link>
        </div>

        <img src={imagemHome} className="home-image" width="100%" alt="" />
      </div>
    </div>
  );
}

export default Home;