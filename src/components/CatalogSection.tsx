import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
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

const CatalogSection = () => {
  return (
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
  );
};

export default CatalogSection;
