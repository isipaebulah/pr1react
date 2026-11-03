import './App.css';
import ProductCard from './ProductCard';
import img1 from '../public/image/1.jpg';
import img2 from '../public/image/2.jpg';
import img3 from '../public/image/3.jpg';
import img4 from '../public/image/4.jpg';
import img5 from '../public/image/5.jpg';

function App() {
  return (
    <div className="app-container">
      <h1>Наш магазин</h1>
      
      <div className="products-grid">
        <ProductCard 
          title="Смартфон" 
          price="25000" 
          image={img1}
        />
        <ProductCard 
          title="Ноутбук" 
          price="65000" 
          image={img2}
        />
        <ProductCard 
          title="Наушники" 
          price="3500" 
          image={img3}
        />
        <ProductCard 
          title="Умные часы" 
          price="12000" 
          image={img4}
        />
        <ProductCard 
          title="Игровая мышь" 
          price="4500" 
          image={img5}
        />
      </div>
    </div>
  );
}

export default App;