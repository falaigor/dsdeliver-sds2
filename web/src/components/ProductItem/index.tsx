import './style.css';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUri: string;
}

interface ProductItemProps {
  product: Product;
}

function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })
  return formatter.format(price)
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="order-item">
      <h3>{product.name}</h3>
      <img src={product.imageUri} alt={product.name} />
      <h2>{formatPrice(product.price)}</h2>
      <span className="order-item-description">
        Descrição
      </span>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;