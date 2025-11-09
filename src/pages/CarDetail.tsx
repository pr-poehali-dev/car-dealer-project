import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cars } from '@/components/CatalogSection';

const CreditCalculator = ({ carPrice }: { carPrice: number }) => {
  const [price, setPrice] = useState<number>(carPrice);
  const [initialPayment, setInitialPayment] = useState<number>(carPrice * 0.2);
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

const CarDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const car = cars.find((c) => c.slug === slug);
  const [selectedColor, setSelectedColor] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '' });
  };

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Автомобиль не найден</h1>
          <Button onClick={() => window.location.href = '/'}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => window.location.href = '/'}
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к каталогу
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 relative">
              {car.discountPercent && (
                <div className="absolute top-6 left-6 z-10 bg-primary text-white px-6 py-3 rounded-2xl font-bold text-2xl border-4 border-white shadow-xl">
                  {car.discountPercent}%
                </div>
              )}
              <img 
                src={car.images[selectedColor] || car.image} 
                alt={car.name} 
                className="w-full h-96 object-contain"
              />
            </div>

            <div className="flex gap-3 justify-center">
              {car.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(idx)}
                  className={`w-14 h-14 rounded-full border-4 shadow-md transition-all hover:scale-110 ${
                    selectedColor === idx ? 'border-primary scale-110' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-heading font-bold mb-3">{car.name}</h1>
              <p className="text-xl text-muted-foreground">{car.brand}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
              <p className="text-lg font-semibold text-muted-foreground">{car.engine}</p>
              <p className="text-lg text-muted-foreground">{car.transmission} • {car.drive}</p>
              
              <div className="pt-4 border-t space-y-3">
                <div className="flex items-baseline gap-4">
                  <div className="gradient-primary text-white px-8 py-4 rounded-2xl">
                    <p className="text-4xl font-heading font-bold">{car.price.toLocaleString('ru-RU')} ₽</p>
                  </div>
                  {car.oldPrice && (
                    <p className="text-2xl text-muted-foreground line-through">{car.oldPrice.toLocaleString('ru-RU')} ₽</p>
                  )}
                </div>
                {car.discount > 0 && (
                  <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-xl font-bold text-lg">
                    Выгода {car.discount.toLocaleString('ru-RU')} ₽
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gradient-primary text-white text-lg py-7 text-xl">
                    <Icon name="CreditCard" size={24} className="mr-2" />
                    Купить в кредит
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-heading">Кредитный калькулятор</DialogTitle>
                  </DialogHeader>
                  <CreditCalculator carPrice={car.price} />
                </DialogContent>
              </Dialog>

              <Button variant="outline" className="text-lg py-7 border-2 text-xl">
                <Icon name="RefreshCw" size={24} className="mr-2" />
                Trade-In
              </Button>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Специальное предложение</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Кредит от 0.1% годовых</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Trade-In до {Math.round(car.price * 0.15).toLocaleString('ru-RU')} ₽</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Бесплатная доставка по Москве</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="specs" className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-14">
            <TabsTrigger value="specs" className="text-lg">Характеристики</TabsTrigger>
            <TabsTrigger value="complectations" className="text-lg">Комплектации</TabsTrigger>
            <TabsTrigger value="credit" className="text-lg">Кредит</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Технические характеристики</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-muted-foreground">Двигатель</span>
                      <span className="font-semibold">{car.engine}</span>
                    </div>
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-muted-foreground">Коробка передач</span>
                      <span className="font-semibold">{car.transmission}</span>
                    </div>
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-muted-foreground">Привод</span>
                      <span className="font-semibold">{car.drive}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-muted-foreground">Расход топлива</span>
                      <span className="font-semibold">7.2 л/100км</span>
                    </div>
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-muted-foreground">Разгон 0-100 км/ч</span>
                      <span className="font-semibold">9.8 сек</span>
                    </div>
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-muted-foreground">Максимальная скорость</span>
                      <span className="font-semibold">190 км/ч</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complectations" className="mt-8">
            <div className="max-w-4xl mx-auto space-y-4">
              {['Comfort', 'Elegance', 'Premium'].map((comp, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-heading font-bold mb-2">{comp}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{car.engine} • {car.transmission} • {car.drive}</p>
                        <div className="flex gap-4 items-baseline">
                          <p className="text-2xl font-bold text-primary">
                            {(car.price + idx * 300000).toLocaleString('ru-RU')} ₽
                          </p>
                          <p className="text-muted-foreground">
                            от {(car.credit + idx * 5000).toLocaleString('ru-RU')} ₽/мес
                          </p>
                        </div>
                      </div>
                      <Button className="gradient-primary text-white">Выбрать</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="credit" className="mt-8">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6 text-center">Рассчитайте кредит</h3>
                <CreditCalculator carPrice={car.price} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="max-w-2xl mx-auto gradient-primary text-white">
          <CardContent className="p-8">
            <h3 className="text-3xl font-heading font-bold mb-6 text-center">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">Ваше имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  required
                  className="mt-2 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="mt-2 bg-white"
                />
              </div>

              <Button type="submit" className="w-full bg-white text-primary hover:bg-gray-100 py-6 text-lg font-bold">
                Отправить заявку
              </Button>

              <p className="text-xs text-center opacity-80">
                Нажимая кнопку, я соглашаюсь на обработку персональных данных
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
