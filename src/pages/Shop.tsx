import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const Shop = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Облачная тарелка', price: 3500, image: '/placeholder.svg', description: 'Ручная лепка, авторская глазурь', category: 'plates' },
    { id: 2, name: 'Волнистая пиала', price: 2800, image: '/placeholder.svg', description: 'Органические формы', category: 'bowls' },
    { id: 3, name: 'Асимметричное блюдо', price: 4200, image: '/placeholder.svg', description: 'Экспериментальная форма', category: 'plates' },
    { id: 4, name: 'Текучая ваза', price: 5500, image: '/placeholder.svg', description: 'Свободная форма', category: 'vases' },
    { id: 5, name: 'Лунная тарелка', price: 3800, image: '/placeholder.svg', description: 'Кратерная текстура', category: 'plates' },
    { id: 6, name: 'Спиральная пиала', price: 3000, image: '/placeholder.svg', description: 'Динамичная лепка', category: 'bowls' },
    { id: 7, name: 'Органическая ваза', price: 6000, image: '/placeholder.svg', description: 'Природные изгибы', category: 'vases' },
    { id: 8, name: 'Глубокая пиала', price: 2500, image: '/placeholder.svg', description: 'Минималистичная форма', category: 'bowls' },
  ];

  const addToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <Icon name="ArrowLeft" size={24} />
            <span className="font-display text-2xl">fairy airy</span>
          </button>
          <button
            onClick={goToCart}
            className="relative p-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-all hover-scale"
          >
            <Icon name="ShoppingCart" size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-ocean text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-light mb-4 animate-fade-in">
            Магазин керамики
          </h1>
          <p className="text-xl text-charcoal/70 mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Выберите керамику ручной работы
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{product.name}</h3>
                  <p className="text-charcoal/70 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-terracotta">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="p-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-all hover-scale"
                    >
                      <Icon name="Plus" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
