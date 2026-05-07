import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Flag, 
  Map, 
  Shield, 
  ChevronRight,
  Download,
  Menu,
  X,
  Github,
  Twitter,
  Instagram
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'impressum' | 'datenschutz';

// --- Components ---

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (p: Page) => void, currentPage: Page }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-6">
      <div className="max-w-7xl mx-auto flex justify-between h-20 items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-all duration-300">
            <Flag className="text-primary group-hover:text-black w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-tighter uppercase italic">Vexillo</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase">
          <button 
            onClick={() => onNavigate('home')}
            className={`${currentPage === 'home' ? 'text-primary border-b-2 border-primary' : 'text-zinc-500'} hover:text-white transition-colors cursor-pointer py-1`}
          >
            Startseite
          </button>
          <a href="#features" className="text-zinc-500 hover:text-white transition-colors">Features</a>
          <button 
            onClick={() => onNavigate('impressum')}
            className={`${currentPage === 'impressum' ? 'text-primary border-b-2 border-primary' : 'text-zinc-500'} hover:text-white transition-colors cursor-pointer py-1`}
          >
            Impressum
          </button>
          <button 
            onClick={() => onNavigate('datenschutz')}
            className={`${currentPage === 'datenschutz' ? 'text-primary border-b-2 border-primary' : 'text-zinc-500'} hover:text-white transition-colors cursor-pointer py-1`}
          >
            Datenschutz
          </button>
          <button className="bg-primary text-black px-6 py-2 rounded-none font-black hover:bg-white transition-all">
            Download
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 py-8 px-6 flex flex-col gap-6 uppercase tracking-widest text-xs font-bold"
          >
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-left py-2">Startseite</button>
            <button onClick={() => { onNavigate('impressum'); setIsOpen(false); }} className="text-left py-2">Impressum</button>
            <button onClick={() => { onNavigate('datenschutz'); setIsOpen(false); }} className="text-left py-2">Datenschutz</button>
            <button className="bg-primary text-black px-6 py-4 font-black mt-4">Download App</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-10 bg-zinc-900 border border-white/5 hover:border-primary/30 transition-all group"
  >
    <div className="w-14 h-14 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
      <Icon className="text-primary group-hover:text-black w-6 h-6" />
    </div>
    <h3 className="font-black text-xl mb-4 uppercase tracking-tighter italic">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed font-light">{description}</p>
  </motion.div>
);

const Footer = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <footer className="bg-black text-zinc-600 py-24 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 border-2 border-zinc-500 flex items-center justify-center">
            <Flag className="text-zinc-500 w-6 h-6" />
          </div>
          <span className="font-black text-3xl text-white tracking-tighter uppercase italic">Vexillo</span>
        </div>
        <p className="max-w-md mb-10 text-sm italic font-light">
          Revolutionäres Geografie-Lernen. Ein brutalistisches Interface für maximale Konzentration auf das Wesentliche.
        </p>
        <div className="flex gap-6">
          {[Twitter, Instagram, Github].map((Icon, i) => (
             <button key={i} className="text-zinc-600 hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
             </button>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10">Rechtliches</h4>
        <ul className="flex flex-col gap-5 text-xs font-bold uppercase tracking-widest">
          <li><button onClick={() => onNavigate('impressum')} className="hover:text-primary transition-colors">Impressum</button></li>
          <li><button onClick={() => onNavigate('datenschutz')} className="hover:text-primary transition-colors">Datenschutz</button></li>
          <li><button className="hover:text-primary transition-colors">Safety</button></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10">System</h4>
        <ul className="flex flex-col gap-5 text-xs font-bold uppercase tracking-widest">
          <li><button className="hover:text-primary transition-colors">Android SDK</button></li>
          <li><button className="hover:text-primary transition-colors">Contact</button></li>
          <li><button className="hover:text-primary transition-colors">Status</button></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex justify-between items-center text-[9px] font-black tracking-[0.4em] uppercase text-zinc-800">
      <p>© 2024 VEXILLO LABS</p>
      <p>EST 2024 // GERMANY</p>
    </div>
  </footer>
);

// --- Page Views ---

const HomeView = () => (
  <>
    {/* Hero Section */}
    <section className="pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 border border-primary text-primary text-[10px] font-black tracking-[0.3em] mb-10 uppercase">
            Android Exclusive 4.0
          </div>
          <h1 className="text-huge mb-10">
            VEXI<br/><span className="text-zinc-800">LLO</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-xl mx-auto font-light">
            Meistere die Geografie durch Farben und Formen. Ein minimalistisches Quiz für Präzision und Geschwindigkeit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-black px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-primary/10">
              Download Store
            </button>
            <button className="flex items-center gap-4 text-zinc-500 font-black uppercase tracking-widest text-xs hover:text-white transition-all">
              Launch Demo
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section id="features" className="py-32 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-end justify-between mb-24">
           <h2 className="text-6xl font-black uppercase tracking-tighter italic">System<br/>Architecture</h2>
           <p className="text-zinc-500 max-w-xs text-sm font-light leading-relaxed">Hochoptimierte Vektorgrafiken und Echtzeit-Rendering für ein flüssiges Erlebnis auf jedem Android Gerät.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5">
          <FeatureCard 
            icon={Flag} 
            title="Identity" 
            description="Entdecke Hunderte von Flaggen. Von den Klassikern bis zu den entlegensten Inselstaaten – lerne sie alle kennen."
          />
          <FeatureCard 
            icon={Map} 
            title="Borderlines" 
            description="Erkenne Länder an ihrer Form. Ein kniffliger Modus für alle, die Karten lieben und Wissenslücken schließen wollen."
          />
          <FeatureCard 
            icon={Shield} 
            title="Privacy" 
            description="Deine Daten gehören dir. Vexillo benötigt minimale Berechtigungen und sammelt keine privaten Informationen."
          />
          <FeatureCard 
            icon={Smartphone} 
            title="Zero Latency" 
            description="Kein Internet? Kein Problem. Du kannst dein Wissen überall und jederzeit testen, auch ohne Netzverbindung."
          />
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-40 px-6 text-center overflow-hidden relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[300px] font-black text-white/[0.01] select-none pointer-events-none">
          GEOGRAPHY
       </div>
       <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-7xl font-black mb-10 tracking-tighter uppercase italic">Ready for<br/>Deployment</h2>
          <p className="text-zinc-500 text-lg mb-14 font-light leading-relaxed">
            Schließe dich Tausenden von Geografie-Enthusiasten an und werde heute noch zum Flaggen-Experten.
          </p>
          <button className="bg-white text-black px-16 py-6 text-xl font-black uppercase tracking-widest hover:bg-primary transition-all">
            Get Started
          </button>
       </div>
    </section>
  </>
);

const ImpressumView = () => (
  <section className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-zinc-900 p-16 border border-white/5"
    >
      <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-16 border-b border-white/5 pb-10">Impressum</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-zinc-400 font-light leading-loose">
        <div>
          <h2 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">Betreiber</h2>
          <p className="text-lg">
            Vexillo Labs Development<br />
            Deep Tech Quarter 42<br />
            10115 Berlin, Germany
          </p>
        </div>

        <div>
          <h2 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">Kontakt</h2>
          <p className="text-lg">
            P: +49 30 9922 8811<br />
            E: legal@vexillo-labs.tech
          </p>
        </div>

        <div className="md:col-span-2 pt-16 border-t border-white/5">
          <h2 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">Verantwortung</h2>
          <p className="text-sm">
            Inhaltlich verantwortlich: Chief Design Officer A. Vexill.<br/>
            Sämtliches Bildmaterial unterliegt dem Copyright von Vexillo Labs.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

const DatenschutzView = () => (
  <section className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-zinc-900 p-16 border border-white/5"
    >
      <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-16 border-b border-white/5 pb-10">Privacy</h1>
      
      <div className="space-y-12 text-zinc-400 font-light leading-relaxed">
        <section>
          <h2 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">01. Grundsatz</h2>
          <p className="text-lg">Wir glauben an absolute Datensparsamkeit. Unser System ist so konzipiert, dass für den Spielbetrieb keine Registrierung oder Übermittlung von persönlichen Identifikationsmerkmalen notwendig ist.</p>
        </section>

        <section>
          <h2 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">02. App Engine Analytics</h2>
          <p>Zur Verbesserung der Performance werden anonyme Systemmetriken (Ladezeiten, Crash-Reports) verarbeitet. Diese Daten lassen zu keinem Zeitpunkt Rückschlüsse auf Ihre Person zu.</p>
        </section>

        <section>
          <h2 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">03. Lokale Speicherung</h2>
          <p>Ihre Spielstände und errungene Trophäen werden ausschließlich lokal auf Ihrem Android Endgerät gespeichert.</p>
        </section>

        <div className="p-8 border-l-4 border-primary bg-primary/5 text-xs italic tracking-wide mt-20">
          Rechtlicher Hinweis: Diese Dokumentation dient der Demonstration des App-Designs und stellt keine verbindliche Rechtsberatung dar.
        </div>
      </div>
    </motion.div>
  </section>
);

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-black">
      <Navbar onNavigate={navigate} currentPage={page} />
      
      <main>
        {page === 'home' && <HomeView />}
        {page === 'impressum' && <ImpressumView />}
        {page === 'datenschutz' && <DatenschutzView />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
