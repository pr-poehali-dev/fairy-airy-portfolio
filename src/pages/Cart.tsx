import { useState, useEffect } from 'react';
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

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <button 
            onClick={() => navigate('/shop')}
            className="flex items-center gap-2 hover:text-terracotta transition-colors"
          >
            <Icon name="ArrowLeft" size={24} />
            <span className="font-display text-2xl">Назад в магазин</span>
          </button>
          <button
            onClick={() => navigate('/')}
            className="font-display text-2xl hover:text-terracotta transition-colors"
          >
            fairy airy
          </button>
        </div>
      </header>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-light mb-4 animate-fade-in">
            Корзина
          </h1>
          <p className="text-xl text-charcoal/70 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {cart.length > 0 ? `Товаров в корзине: ${cart.length}` : 'Корзина пуста'}
          </p>

          {cart.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <Icon name="ShoppingCart" size={64} className="mx-auto mb-6 text-charcoal/20" />
              <p className="text-2xl text-charcoal/60 mb-8">Добавьте товары в корзину</p>
              <button
                onClick={() => navigate('/shop')}
                className="px-8 py-4 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-all hover-scale"
              >
                Перейти в магазин
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 flex items-center gap-6 animate-fade-in hover-scale"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-display text-2xl mb-1">{item.name}</h3>
                      <p className="text-charcoal/60 text-sm">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl text-terracotta mb-3">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </p>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="p-2 text-charcoal/40 hover:text-red-500 transition-colors"
                      >
                        <Icon name="Trash2" size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl">Итого:</span>
                  <span className="font-display text-4xl text-terracotta">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={clearCart}
                    className="flex-1 px-8 py-4 border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all"
                  >
                    Очистить корзину
                  </button>
                  <button
                    className="flex-1 px-8 py-4 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-all hover-scale"
                  >
                    Оформить заказ
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
