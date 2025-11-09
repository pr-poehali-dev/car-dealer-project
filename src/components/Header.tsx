import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Главная' },
    { href: '#catalog', label: 'Каталог' },
    { href: '#credit', label: 'Автокредит' },
    { href: '#tradein', label: 'Trade-In' },
    { href: '#insurance', label: 'Страхование' },
    { href: '#contacts', label: 'Контакты' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" className="text-primary" size={32} />
            <span className="text-2xl font-heading font-bold gradient-primary text-gradient">AutoPremium</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <Icon name="Phone" size={20} className="text-primary" />
              <span className="font-semibold">+7 (495) 123-45-67</span>
            </div>
            <Button className="gradient-primary text-white hidden md:block">Показать телефон</Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Icon name="Car" className="text-primary" size={24} />
                    <span className="gradient-primary text-gradient">AutoPremium</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      className="text-lg hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="flex items-center gap-2 py-2 border-t mt-4 pt-6">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span className="font-semibold">+7 (495) 123-45-67</span>
                  </div>
                  <Button className="gradient-primary text-white w-full">Показать телефон</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;