import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const cars = [
  {
    id: 1,
    name: 'Седан Люкс',
    price: 2490000,
    discount: 150000,
    credit: 34900,
    image: 'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/01f4bb98-2581-453d-949d-4c809039bb93.jpg'
  },
  {
    id: 2,
    name: 'Внедорожник Премиум',
    price: 4290000,
    discount: 250000,
    credit: 59900,
    image: 'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/3577bc85-4b28-4da6-9769-d9959c34f0bc.jpg'
  },
  {
    id: 3,
    name: 'Спорткар GT',
    price: 5890000,
    discount: 400000,
    credit: 79900,
    image: 'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/e7dc24de-ef03-448f-a129-f7e00b8bfa6e.jpg'
  },
  {
    id: 4,
    name: 'Кроссовер Комфорт',
    price: 3190000,
    discount: 180000,
    credit: 44900,
    image: 'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/01f4bb98-2581-453d-949d-4c809039bb93.jpg'
  },
];

const CreditCalculator = () => {
  const [price, setPrice] = useState<number>(2000000);
  const [initialPayment, setInitialPayment] = useState<number>(500000);
  const [term, setTerm] = useState<number>(60);
  const [rate, setRate] = useState<number>(12.5);

  const calculateMonthlyPayment = () => {
    const loanAmount = price - initialPayment;
    const monthlyRate = rate / 100 / 12;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    return Math.round(monthlyPayment);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Стоимость автомобиля: {price.toLocaleString('ru-RU')} ₽</Label>
        <Input
          type="range"
          min="500000"
          max="10000000"
          step="100000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label>Первоначальный взнос: {initialPayment.toLocaleString('ru-RU')} ₽</Label>
        <Input
          type="range"
          min="0"
          max={price * 0.5}
          step="50000"
          value={initialPayment}
          onChange={(e) => setInitialPayment(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label>Срок кредита: {term} мес.</Label>
        <Input
          type="range"
          min="12"
          max="84"
          step="12"
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label>Процентная ставка: {rate}%</Label>
        <Input
          type="range"
          min="5"
          max="25"
          step="0.5"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="gradient-primary text-white p-6 rounded-xl text-center">
        <p className="text-sm opacity-90 mb-2">Ежемесячный платёж:</p>
        <p className="text-4xl font-heading font-bold">{calculateMonthlyPayment().toLocaleString('ru-RU')} ₽</p>
      </div>
    </div>
  );
};

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen">
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

      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 gradient-primary text-gradient">
            Популярные автомобили
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardHeader className="p-0">
                  <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-4">{car.name}</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">от {car.price.toLocaleString('ru-RU')} ₽</p>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                      Выгода {car.discount.toLocaleString('ru-RU')} ₽
                    </div>
                    <p className="text-muted-foreground">Кредит от {car.credit.toLocaleString('ru-RU')} ₽/мес</p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button variant="outline" className="flex-1">Подробнее</Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="gradient-primary text-white flex-1">В кредит</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-heading">Кредитный калькулятор</DialogTitle>
                      </DialogHeader>
                      <CreditCalculator />
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 gradient-secondary text-gradient">
            Почему именно мы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
    </div>
  );
};

export default Index;
