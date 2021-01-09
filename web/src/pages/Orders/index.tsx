import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api, { saveOrder } from '../../services/api';
import { Product, OrderLocationData } from './types';
import { checkIsSelected } from './helpers';

import OrderLocation from './OrderLocation';
import StepsHeader from './StepHeader';
import OrderSummary from './OrderSummary';
import ProductList from './ProductList';

import './style.css';

export interface Place {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  }
}

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0)

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }

  useEffect(() => {
    api.get(`products`).then(response => {
      setProducts(response.data);
    })
      .catch(error => (console.log(error)));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />

      <main>
        <ProductList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={location => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}

export default Orders;