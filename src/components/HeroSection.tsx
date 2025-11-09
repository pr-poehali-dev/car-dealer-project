import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Новые автомобили у официального дилера в Москве
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-semibold">Выгода до 400 000 ₽</p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
            <Icon name="Gift" size={24} className="mr-2" />
            Получить скидку
          </Button>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <Icon name="Car" size={600} />
      </div>
    </section>
  );
};

export default HeroSection;
