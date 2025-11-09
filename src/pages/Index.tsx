import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const advantagesAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const contactsAnimation = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection />

      <section className="py-12 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Марка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="mercedes">Mercedes</SelectItem>
                <SelectItem value="audi">Audi</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Модель" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Седан</SelectItem>
                <SelectItem value="suv">Внедорожник</SelectItem>
                <SelectItem value="sport">Спорткар</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Кузов" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Седан</SelectItem>
                <SelectItem value="hatchback">Хэтчбек</SelectItem>
                <SelectItem value="suv">Кроссовер</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="КПП" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Автомат</SelectItem>
                <SelectItem value="manual">Механика</SelectItem>
                <SelectItem value="robot">Робот</SelectItem>
              </SelectContent>
            </Select>

            <Button className="gradient-primary text-white">
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </section>

      <CatalogSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 gradient-secondary text-gradient">
            Почему именно мы
          </h2>
          
          <div 
            ref={advantagesAnimation.ref} 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
              advantagesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
                <Icon name="Award" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">15 лет на рынке</h3>
              <p className="text-muted-foreground">Официальный дилерский центр с безупречной репутацией</p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 gradient-secondary rounded-full flex items-center justify-center">
                <Icon name="Car" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Большой выбор</h3>
              <p className="text-muted-foreground">Более 500 автомобилей в наличии и под заказ</p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 gradient-accent rounded-full flex items-center justify-center">
                <Icon name="Shield" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Гарантия до 5 лет</h3>
              <p className="text-muted-foreground">Полное гарантийное обслуживание от производителя</p>
            </div>
          </div>
        </div>
      </section>

      <section id="credit" className="py-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div 
            ref={formAnimation.ref}
            className={`max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-2xl transition-all duration-700 ${
              formAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-3xl font-heading font-bold text-center mb-2">Оставить заявку</h2>
            <p className="text-center text-muted-foreground mb-8">Мы перезвоним в течение 15 минут</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="mt-2"
                />
              </div>

              <Button type="submit" className="w-full gradient-primary text-white py-6 text-lg">
                Отправить заявку
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, я соглашаюсь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="insurance" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наши услуги</h2>
          
          <div 
            ref={servicesAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Icon name="CreditCard" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Автокредит</h3>
                <p className="text-muted-foreground">От 0.1% годовых</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-secondary rounded-full flex items-center justify-center">
                  <Icon name="RefreshCw" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Trade-In</h3>
                <p className="text-muted-foreground">Выгодный обмен</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-accent rounded-full flex items-center justify-center">
                  <Icon name="Gauge" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Тест-драйв</h3>
                <p className="text-muted-foreground">Бесплатно</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">ОСАГО и КАСКО</h3>
                <p className="text-muted-foreground">Лучшие тарифы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">Банки-партнёры</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-4xl font-bold">Сбербанк</div>
            <div className="text-4xl font-bold">ВТБ</div>
            <div className="text-4xl font-bold">Альфа-Банк</div>
            <div className="text-4xl font-bold">Тинькофф</div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Контакты</h2>
          
          <div 
            ref={contactsAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 ${
              contactsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, Ленинградский проспект, д. 39, стр. 1</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@autopremium.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-300 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Map" size={48} className="mx-auto mb-2 opacity-50" />
                <p>Яндекс.Карта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;