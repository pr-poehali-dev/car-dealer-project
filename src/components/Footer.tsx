import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="gradient-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Car" size={28} />
              <span className="text-xl font-heading font-bold">AutoPremium</span>
            </div>
            <p className="text-sm opacity-80">Официальный дилер премиальных автомобилей</p>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Меню</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">Главная</a></li>
              <li><a href="#catalog" className="hover:opacity-100">Каталог</a></li>
              <li><a href="#credit" className="hover:opacity-100">Автокредит</a></li>
              <li><a href="#contacts" className="hover:opacity-100">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">Trade-In</a></li>
              <li><a href="#" className="hover:opacity-100">Страхование</a></li>
              <li><a href="#" className="hover:opacity-100">Тест-драйв</a></li>
              <li><a href="#" className="hover:opacity-100">Сервис</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+7 (495) 123-45-67</li>
              <li>info@autopremium.ru</li>
              <li>Москва, Ленинградский пр-т, 39</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-60">
          <p>© 2025 AutoPremium. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
