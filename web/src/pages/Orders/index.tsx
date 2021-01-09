import { useEffect, useState } from 'react';
import api from '../../services/api';
import ProductItem, { Product } from '../../components/ProductItem';

import OrderLocation from '../../components/OrderLocation';
import './style.css';
import { OrderLocationdata } from '../../components/OrderLocation/index';

export interface Place {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  }
}

function Orders() {
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
  const [products, setProducts] = useState<Product[]>([]);

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

        <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
      </main>
    </div>
  );
}

export default Orders;