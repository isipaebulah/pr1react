import { useState } from 'react';

function ProductCard({ title, price, image }) {
  const [count, setCount] = useState(0);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price} ₽</p>
      

      <button className="add-button" onClick={() => setCount(count + 1)}>
        Добавить в корзину
      </button>
      

      <p className="cart-info">
        В корзине: <strong>{count}</strong> шт.
      </p>
    </div>
  );
}

export default ProductCard;