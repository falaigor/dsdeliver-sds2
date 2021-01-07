import { useEffect, useState } from 'react';
import api from '../../services/api';

import ProductItem, { Product } from '../../components/ProductItem';

import './style.css';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products)

  useEffect(() => {
    api.get(`products`).then(response => {
      setProducts(response.data);
    })
      .catch(error => (console.log(error)));
  }, []);

  return (
    <div className="orders-container">
      <header>
        <div className="orders-steps-content">
          <h1>SIGA AS <br />ETAPAS</h1>
          <ul className="steps-items">
            <li>
              <span className="steps-number">1</span>
              Selecione os produtos e localização
              </li>
            <li>
              <span className="steps-number">2</span>
              Depois clique em <strong>“ENVIAR PEDIDO”</strong>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="orders-list-container">
          <div className="orders-list-items">
            {products.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Orders;