import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  Settings, 
  Users, 
  Truck, 
  Store, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  Menu,
  X,
  CheckCircle2,
  Monitor
} from 'lucide-react';

// Aapka Google Form Link (Embedded Version)
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeGuyuNxpqw7YQOGoQIlUZr1stA-EEZoqX1FjxirB5GC8OiPg/viewform?embedded=true";

const Navbar = ({ onOpenForm }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">Biz-e-comm</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#ecosystem" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Ecosystem</a>
            <a href="#admin" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Admin Panel</a>
            <a href="#features" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <button 
              onClick={onOpenForm}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 cursor-pointer">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-6 py-8 space-y-6"
        >
          <a href="#ecosystem" className="block text-lg font-bold text-slate-600">Ecosystem</a>
          <a href="#admin" className="block text-lg font-bold text-slate-600">Admin Panel</a>
          <a href="#features" className="block text-lg font-bold text-slate-600">Features</a>
          <button 
            onClick={() => { onOpenForm(); setIsOpen(false); }}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 cursor-pointer"
          >
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ onOpenForm }) => {
  const images = [
    "https://aotbiz.com/images/portfolio/eduzap-admin.png",
    "https://aotbiz.com/images/portfolio/eduzap-breadcrumb.png",
    "https://aotbiz.com/images/portfolio/portfolio.jpg"
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative pt-28 pb-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9] max-w-5xl mx-auto">
              One Platform. <br />
              <span className="text-blue-600 italic font-serif font-normal">Three Powerful Apps.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Launch your delivery or marketplace ecosystem with Biz-e-comm. You get three fully-functional apps for Users, Merchants, and Drivers, all managed by one powerful admin panel.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <button 
                onClick={onOpenForm}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-200 flex items-center gap-3 cursor-pointer"
              >
                Launch Your App
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onOpenForm}
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-3 cursor-pointer"
              >
                View Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Image Slider */}
        <div className="relative max-w-5xl mx-auto group">
          <div className="relative h-[300px] md:h-[550px] w-full overflow-hidden rounded-[3rem] shadow-2xl border border-slate-200 bg-slate-100">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : (currentIndex < index ? 100 : -100),
                  zIndex: currentIndex === index ? 10 : 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EcosystemSection = () => {
  const apps = [
    {
      title: 'User App',
      desc: 'A seamless shopping experience for your customers. Browse, order, and track in real-time.',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Merchant App',
      desc: 'Empower your partners. Manage products, orders, and earnings with ease.',
      icon: Store,
      color: 'bg-emerald-50 text-emerald-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Driver App',
      desc: 'Optimize deliveries. Real-time navigation and earnings tracking for your fleet.',
      icon: Truck,
      color: 'bg-orange-50 text-orange-600',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="ecosystem" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The 3-App Ecosystem</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Everything you need to run a successful marketplace, out of the box.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {apps.map((app, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10">
                <div className={`w-14 h-14 rounded-2xl ${app.color} flex items-center justify-center mb-6`}>
                  <app.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{app.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{app.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdminSection = () => {
  return (
    <section id="admin" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl border border-slate-800">
              <img 
                src="https://aotbiz.com/images/portfolio/eduzap-admin.png" 
                alt="Admin Dashboard"
                className="rounded-[2.5rem] w-full object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Fully Customizable <br />
              <span className="text-blue-600">Admin Panel.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Take full control of your ecosystem. Our admin panel is designed to be fully customizable to your business needs.
            </p>
            <div className="space-y-6">
              {['Real-time data visualization', 'User & Merchant management', 'Custom feature integration', 'Automated reporting'].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureGrid = () => {
  const features = [
    { title: 'Scalable Architecture', desc: 'Built to grow with your business.', icon: Layout },
    { title: 'Cross-Platform', desc: 'Web and Mobile apps included.', icon: Monitor },
    { title: 'Secure & Reliable', desc: 'Enterprise-grade security.', icon: ShieldCheck },
    { title: 'Customizable', desc: 'Modular design to fit your needs.', icon: Settings }
  ];

  return (
    <section id="features" className="py-32 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ onOpenForm }) => {
  return (
    <section className="py-40 px-4">
      <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            Ready to Launch?
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Get the 3-app ecosystem and customizable admin panel today.
          </p>
          <button 
            onClick={onOpenForm}
            className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-50 hover:scale-105 transition-all cursor-pointer"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

// MODAL COMPONENT (The Popup)
const FormModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay Background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-4xl h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header with Close Button */}
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
              <span className="font-bold text-slate-900 ml-4">Business Inquiry Form</span>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            {/* Google Form Iframe */}
            <div className="flex-1 w-full overflow-hidden">
              <iframe 
                src={GOOGLE_FORM_URL}
                className="w-full h-full"
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Google Form"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar onOpenForm={openForm} />
      <main>
        <Hero onOpenForm={openForm} />
        <EcosystemSection />
        <AdminSection />
        <FeatureGrid />
        <CTASection onOpenForm={openForm} />
      </main>
      
      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-medium">© {new Date().getFullYear()} Biz-e-comm Ecosystem.</p>
      </footer>

      {/* Popup Form */}
      <FormModal isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}