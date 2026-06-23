import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const LOGO = 'https://cdn.poehali.dev/projects/4573fa73-3165-4cf5-bf2a-fb8fde6440ac/bucket/654e26ba-f6ed-4c1a-bb9e-976576b0983a.jpg';
const HERO = 'https://cdn.poehali.dev/projects/4573fa73-3165-4cf5-bf2a-fb8fde6440ac/files/f4dd3b7a-bbd7-44f0-99a3-7209d24fc076.jpg';
const KITTEN = 'https://cdn.poehali.dev/projects/4573fa73-3165-4cf5-bf2a-fb8fde6440ac/files/bdaa0b2f-011e-41c7-ae61-5cfc78c177a6.jpg';
const TRIO = 'https://cdn.poehali.dev/projects/4573fa73-3165-4cf5-bf2a-fb8fde6440ac/files/de605bf1-e91a-46c5-a45f-c72a28f6247f.jpg';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О питомнике' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'booking', label: 'Бронирование' },
  { id: 'contacts', label: 'Контакты' },
];

const GALLERY = [
  { src: HERO, name: 'Cleopatra', color: 'Соболиный (sable)', status: 'Производительница' },
  { src: KITTEN, name: 'Apollo', color: 'Соболиный (sable)', status: 'Свободен' },
  { src: TRIO, name: 'Помёт «А»', color: 'Микс окрасов', status: 'Бронь открыта' },
];

const FEATURES = [
  { icon: 'ShieldCheck', title: 'Здоровье под контролем', text: 'Все котята с ветпаспортом, прививками и гарантией здоровья.' },
  { icon: 'Award', title: 'Чемпионские линии', text: 'Производители с титулами и подтверждённой родословной WCF.' },
  { icon: 'Heart', title: 'Социализация', text: 'Котята растут в доме, привыкают к людям и рукам с рождения.' },
];

const Index = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const submitBooking = () => {
    if (!date || !name || !phone) {
      toast.error('Заполните дату, имя и телефон');
      return;
    }
    toast.success('Заявка на бронирование принята! Мы свяжемся с вами.');
    setName(''); setPhone(''); setDate(undefined);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="container flex h-16 items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3">
            <img src={LOGO} alt="BeaVelle" className="h-11 w-11 rounded-full object-cover ring-1 ring-accent/40" />
            <span className="font-display text-3xl font-700 tracking-tight text-primary">BeaVelle</span>
            <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground sm:inline">cattery</span>
          </button>
          <ul className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className="text-sm font-500 text-muted-foreground transition-colors hover:text-accent"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
          <Button onClick={() => scrollTo('booking')} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Забронировать
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-2">
          <div className="animate-fade-in">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-accent">
              <Icon name="Sparkles" size={14} /> Питомник европейской бурмы
            </span>
            <h1 className="font-display text-6xl font-600 leading-[0.95] tracking-tight text-primary text-balance sm:text-7xl lg:text-8xl">
              Бархат, <br /> золото <span className="italic text-accent">в глазах</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              BeaVelle — элитные котята европейской бурмы с безупречной родословной, идеальным здоровьем и характером, в который влюбляешься с первого мурчания.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo('booking')} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="CalendarHeart" size={18} className="mr-2" /> Забронировать котёнка
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('gallery')}>
                Смотреть котят
              </Button>
            </div>

          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl" />
            <img
              src={LOGO}
              alt="Логотип питомника BeaVelle"
              className="relative aspect-square w-full rounded-full object-cover shadow-2xl ring-1 ring-accent/30"
            />
            <div className="absolute -bottom-6 -left-6 animate-float rounded-2xl bg-card p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon name="PawPrint" size={22} />
                </div>
                <div>
                  <div className="text-sm font-600 text-primary">Котята доступны</div>
                  <div className="text-xs text-muted-foreground">Помёт «А» · 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-secondary/40 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-600 uppercase tracking-widest text-accent">О питомнике</span>
            <h2 className="mt-3 font-display text-5xl font-600 text-primary text-balance">
              Мы не разводим кошек. Мы растим характеры.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              BeaVelle — это семейный питомник европейской бурмы, где каждый котёнок окружён вниманием с первого дня. Бурма — порода-компаньон: ласковая, общительная и невероятно преданная.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Card
                key={f.title}
                className="group border-border/60 bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon name={f.icon} size={26} />
                </div>
                <h3 className="font-display text-2xl font-600 text-primary">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-600 uppercase tracking-widest text-accent">Галерея</span>
              <h2 className="mt-3 font-display text-5xl font-600 text-primary">Наши красавцы</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">Познакомьтесь с производителями и доступными котятами питомника BeaVelle.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {GALLERY.map((g) => (
              <div key={g.name} className="group relative overflow-hidden rounded-3xl shadow-lg">
                <img src={g.src} alt={g.name} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-600 text-accent-foreground">{g.status}</span>
                <div className="absolute bottom-0 p-6 text-background">
                  <h3 className="font-display text-3xl font-600">{g.name}</h3>
                  <p className="text-sm opacity-90">{g.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="bg-primary py-24 text-primary-foreground">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-600 uppercase tracking-widest text-accent">Онлайн-бронирование</span>
            <h2 className="mt-3 font-display text-5xl font-600 text-balance">Выберите дату знакомства с котёнком</h2>
            <p className="mt-5 max-w-md text-primary-foreground/70">
              Отметьте удобный день в календаре, оставьте контакты — и мы зарезервируем для вас встречу в питомнике или онлайн-показ.
            </p>
            <ul className="mt-8 space-y-3">
              {['Бесплатная консультация', 'Видеознакомство с котёнком', 'Бронь с предоплатой 20%'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-primary-foreground/90">
                  <Icon name="Check" size={18} className="text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-card p-6 text-card-foreground shadow-2xl">
            <div className="flex flex-col gap-6 sm:flex-row">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                className="rounded-xl border border-border p-3"
              />
              <div className="flex flex-1 flex-col gap-3">
                <div>
                  <label className="text-sm font-500 text-muted-foreground">Ваше имя</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Анна" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-500 text-muted-foreground">Телефон</label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 999 000-00-00" className="mt-1" />
                </div>
                <div className="rounded-lg bg-secondary/60 px-3 py-2 text-sm text-muted-foreground">
                  {date ? (
                    <span className="flex items-center gap-2 text-primary"><Icon name="CalendarCheck" size={16} className="text-accent" /> Выбрано: {date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</span>
                  ) : 'Выберите дату в календаре'}
                </div>
                <Button onClick={submitBooking} className="mt-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-600 uppercase tracking-widest text-accent">Контакты</span>
            <h2 className="mt-3 font-display text-5xl font-600 text-primary">Будем рады знакомству</h2>
            <div className="mt-8 space-y-5">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 999 000-00-00' },
                { icon: 'Mail', label: 'Почта', value: 'hello@beavell.ru' },
                { icon: 'MapPin', label: 'Питомник', value: 'Москва, по записи' },
                { icon: 'Send', label: 'Telegram', value: '@beavell_cattery' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Icon name={c.icon} size={22} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{c.label}</div>
                    <div className="font-600 text-primary">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-border/60 bg-card p-8">
            <h3 className="font-display text-3xl font-600 text-primary">Напишите нам</h3>
            <p className="mt-1 text-muted-foreground">Ответим в течение дня</p>
            <div className="mt-6 space-y-4">
              <Input placeholder="Имя" />
              <Input placeholder="Телефон или email" />
              <Textarea placeholder="Ваш вопрос о котятах..." rows={4} />
              <Button onClick={() => toast.success('Сообщение отправлено!')} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Отправить сообщение
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/40 py-10">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="BeaVelle" className="h-9 w-9 rounded-full object-cover ring-1 ring-accent/40" />
            <span className="font-display text-2xl font-700 text-primary">BeaVelle</span>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">cattery</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 BeaVelle · Питомник европейской бурмы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;