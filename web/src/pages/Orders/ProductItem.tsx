import { formatPrice } from "./helpers";
import { Product } from "./types";

interface ProductItemProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isSeleted: boolean;
}

function ProductItem({ product, onSelectProduct, isSeleted }: ProductItemProps) {
  return (
    <div className={`order-item ${isSeleted ? 'selected' : ''}`}
      onClick={() => onSelectProduct(product)}>
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