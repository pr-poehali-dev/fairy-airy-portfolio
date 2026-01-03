import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCollection, setActiveCollection] = useState('all');

  const collections = [
    { id: 'all', name: 'Все работы' },
    { id: 'plates', name: 'Тарелки' },
    { id: 'bowls', name: 'Пиалы' },
    { id: 'vases', name: 'Вазы' },
  ];

  const gallery = [
    { id: 1, collection: 'plates', image: '/placeholder.svg', title: 'Облачная тарелка', description: 'Ручная лепка, глазурь' },
    { id: 2, collection: 'bowls', image: '/placeholder.svg', title: 'Волнистая пиала', description: 'Органические формы' },
    { id: 3, collection: 'plates', image: '/placeholder.svg', title: 'Асимметричное блюдо', description: 'Экспериментальная форма' },
    { id: 4, collection: 'vases', image: '/placeholder.svg', title: 'Текучая ваза', description: 'Свободная форма' },
    { id: 5, collection: 'plates', image: '/placeholder.svg', title: 'Лунная тарелка', description: 'Кратерная текстура' },
    { id: 6, collection: 'bowls', image: '/placeholder.svg', title: 'Спиральная пиала', description: 'Динамичная лепка' },
  ];

  const processSteps = [
    { step: '01', title: 'Идея', description: 'Эскизы и вдохновение из природы', icon: 'Lightbulb' },
    { step: '02', title: 'Лепка', description: 'Ручная работа с глиной', icon: 'Hand' },
    { step: '03', title: 'Сушка', description: 'Естественное высыхание формы', icon: 'Wind' },
    { step: '04', title: 'Обжиг', description: 'Первый обжиг в печи', icon: 'Flame' },
    { step: '05', title: 'Глазурь', description: 'Нанесение авторских глазурей', icon: 'Paintbrush' },
    { step: '06', title: 'Готово', description: 'Финальный обжиг и результат', icon: 'Sparkles' },
  ];

  const filteredGallery = activeCollection === 'all' 
    ? gallery 
    : gallery.filter(item => item.collection === activeCollection);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 to-ocean/5" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-display text-7xl md:text-9xl font-light mb-6 tracking-tight">
            fairy airy
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light tracking-wide">
            Керамика ручной работы
          </p>
          <div className="mt-12 flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-all hover-scale"
            >
              Смотреть работы
            </button>
            <button 
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all"
            >
              Процесс создания
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-charcoal/40" />
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-light mb-6 animate-fade-in">
              Галерея работ
            </h2>
            <div className="flex flex-wrap gap-4 mt-8">
              {collections.map((col) => (
                <button
                  key={col.id}
                  onClick={() => setActiveCollection(col.id)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeCollection === col.id
                      ? 'bg-terracotta text-white'
                      : 'bg-charcoal/10 hover:bg-charcoal/20'
                  }`}
                >
                  {col.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {filteredGallery.map((item, index) => {
              const spans = [
                'md:col-span-7 md:row-span-2',
                'md:col-span-5 md:row-span-1',
                'md:col-span-5 md:row-span-1',
                'md:col-span-7 md:row-span-1',
                'md:col-span-5 md:row-span-2',
                'md:col-span-7 md:row-span-1',
              ];
              
              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-3xl bg-charcoal/5 hover-scale animate-fade-in ${
                    spans[index % spans.length]
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-display text-2xl mb-2">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-4 md:px-8 bg-gradient-to-b from-cream to-terracotta/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-light mb-16 text-center animate-fade-in">
            Процесс создания
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-8 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-4xl text-terracotta/30">{step.step}</span>
                  <div className="mt-2">
                    <Icon name={step.icon} size={32} className="text-terracotta" />
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-3">{step.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-light mb-16 animate-fade-in">
            Коллекции
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] rounded-3xl overflow-hidden group hover-scale animate-fade-in">
              <img
                src="/placeholder.svg"
                alt="Коллекция Облака"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 to-transparent flex items-end p-10">
                <div className="text-white">
                  <h3 className="font-display text-4xl mb-3">Облака</h3>
                  <p className="text-lg mb-4">Легкие формы, воздушные текстуры</p>
                  <button className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-ocean transition-all">
                    Смотреть коллекцию
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden group hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img
                src="/placeholder.svg"
                alt="Коллекция Земля"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta/90 to-transparent flex items-end p-10">
                <div className="text-white">
                  <h3 className="font-display text-4xl mb-3">Земля</h3>
                  <p className="text-lg mb-4">Органические формы, природные оттенки</p>
                  <button className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-terracotta transition-all">
                    Смотреть коллекцию
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 md:px-8 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-display text-3xl mb-4">fairy airy</h3>
          <p className="text-cream/70 mb-8">Керамика ручной работы с душой</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-terracotta transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-terracotta transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-terracotta transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
