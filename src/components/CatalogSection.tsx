import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export const cars = [
  {
    id: 1,
    slug: 'sedan-luxury',
    name: 'Седан Люкс',
    brand: 'Premium',
    engine: '2.0 AMT (177 л.с.)',
    transmission: 'Автомат',
    drive: '4WD',
    price: 2490000,
    oldPrice: 2890000,
    discount: 150000,
    discountPercent: 14,
    credit: 34900,
    colors: ['#0000FF', '#000000', '#808080', '#C0C0C0', '#FFFFFF'],
    image: 'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/01f4bb98-2581-453d-949d-4c809039bb93.jpg',
    images: [
      'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/01f4bb98-2581-453d-949d-4c809039bb93.jpg'
    ]
  },
  {
    id: 2,
    slug: 'suv-premium',
    name: 'Внедорожник Премиум',
    brand: 'Atlas Pro',
    engine: '1.5 AMT (177 л.с.)',
    transmission: 'Автомат',
    drive: '4WD',
    price: 4290000,
    oldPrice: 4990000,
    discount: 250000,
    discountPercent: 16,
    credit: 59900,
    colors: ['#0000FF', '#000000', '#808080', '#C0C0C0', '#FFFFFF'],
    image: 'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/3577bc85-4b28-4da6-9769-d9959c34f0bc.jpg',
    images: [
      'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/3577bc85-4b28-4da6-9769-d9959c34f0bc.jpg'
    ]
  },
  {
    id: 3,
    slug: 'sport-gt',
    name: 'Спорткар GT',
    brand: 'Sport Line',
    engine: '3.0 AMT (320 л.с.)',
    transmission: 'Автомат',
    drive: 'RWD',
    price: 5890000,
    oldPrice: 6890000,
    discount: 400000,
    discountPercent: 15,
    credit: 79900,
    colors: ['#FF0000', '#000000', '#808080', '#FFFFFF'],
    image: 'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/e7dc24de-ef03-448f-a129-f7e00b8bfa6e.jpg',
    images: [
      'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/e7dc24de-ef03-448f-a129-f7e00b8bfa6e.jpg'
    ]
  },
  {
    id: 4,
    slug: 'crossover-comfort',
    name: 'Кроссовер Комфорт',
    brand: 'City Line',
    engine: '1.8 AMT (150 л.с.)',
    transmission: 'Автомат',
    drive: 'FWD',
    price: 3190000,
    oldPrice: 3690000,
    discount: 180000,
    discountPercent: 13,
    credit: 44900,
    colors: ['#0000FF', '#000000', '#808080', '#C0C0C0', '#FFFFFF'],
    image: 'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/01f4bb98-2581-453d-949d-4c809039bb93.jpg',
    images: [
      'https://cdn.poehali.dev/projects/1c1bf663-e812-4a67-bf4d-bc55451bc58a/files/01f4bb98-2581-453d-949d-4c809039bb93.jpg'
    ]
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
            <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-white border-2 border-gray-100">
              <CardHeader className="p-0 relative bg-gradient-to-br from-gray-50 to-white">
                {car.discountPercent && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-white px-4 py-2 rounded-xl font-bold text-lg border-2 border-white shadow-lg">
                    {car.discountPercent}%
                  </div>
                )}
                <img src={car.image} alt={car.name} className="w-full h-56 object-contain p-4" />
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">{car.name}</h3>
                  <p className="text-sm text-muted-foreground">{car.brand}</p>
                </div>

                <div className="flex gap-2 my-3">
                  {car.colors.slice(0, 5).map((color, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground font-medium">{car.engine} {car.drive}</p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-baseline gap-3">
                    <div className="gradient-primary text-white px-6 py-3 rounded-2xl">
                      <p className="text-3xl font-heading font-bold">{car.price.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    {car.oldPrice && (
                      <p className="text-lg text-muted-foreground line-through">{car.oldPrice.toLocaleString('ru-RU')} ₽</p>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col gap-3">
                <Button 
                  className="w-full gradient-primary text-white text-lg py-6"
                  onClick={() => window.location.href = `/car/${car.slug}`}
                >
                  Подробнее
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full text-lg py-6 border-2">
                      Кредит от {car.credit.toLocaleString('ru-RU')} ₽/мес
                    </Button>
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