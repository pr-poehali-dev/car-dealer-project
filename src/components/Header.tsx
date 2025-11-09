import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" className="text-primary" size={32} />
            <span className="text-2xl font-heading font-bold gradient-primary text-gradient">AutoPremium</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#credit" className="hover:text-primary transition-colors">Автокредит</a>
            <a href="#tradein" className="hover:text-primary transition-colors">Trade-In</a>
            <a href="#insurance" className="hover:text-primary transition-colors">Страхование</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <Icon name="Phone" size={20} className="text-primary" />
              <span className="font-semibold">+7 (495) 123-45-67</span>
            </div>
            <Button className="gradient-primary text-white">Показать телефон</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
