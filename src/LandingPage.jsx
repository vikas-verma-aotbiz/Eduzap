import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
} from "lucide-react";
import * as Content from "./constants.js";

// Reusable Components
const NavLink = ({ label, href }) => (
  <a href={href} className="hover:text-emerald-600 transition-colors">
    {label}
  </a>
);

const SolutionCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm">
    <Icon className="w-8 h-8 text-emerald-600 mb-4" />
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-sm text-zinc-600">{description}</p>
  </div>
);

const FeatureBlock = ({ icon: Icon, title, description }) => (
  <div className="p-10 bg-zinc-800/50 rounded-[2rem] border border-zinc-700/50">
    <Icon className="w-12 h-12 text-emerald-400 mb-8" />
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">Eduzap</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            {Content.NAV_LINKS.map((link, i) => (
              <NavLink key={i} {...link} />
            ))}
            <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {Content.HERO_CONTENT.badge}
              </div>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                {Content.HERO_CONTENT.headline.main} <br />
                <span className="text-emerald-600">{Content.HERO_CONTENT.headline.highlight}</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
                {Content.HERO_CONTENT.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-200">
                  {Content.HERO_CONTENT.primaryCTA}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-zinc-900 border-2 border-zinc-100 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zinc-50 transition-colors">
                  {Content.HERO_CONTENT.secondaryCTA}
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-emerald-100/50 rounded-[2rem] blur-3xl -z-10"></div>
              <div className="bg-zinc-900 rounded-[2rem] p-4 shadow-2xl border border-zinc-800">
                <img 
                  src="https://picsum.photos/seed/dashboard/1200/800" 
                  alt="Eduzap Dashboard" 
                  className="rounded-2xl w-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              {Content.PROBLEM_CONTENT.title}
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed">
              {Content.PROBLEM_CONTENT.description}
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="solution" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Content.SOLUTION_CONTENT.cards.map((card, i) => (
                  <SolutionCard key={i} {...card} />
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                {Content.SOLUTION_CONTENT.title}
              </h2>
              <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                {Content.SOLUTION_CONTENT.description}
              </p>
              <ul className="space-y-4">
                {Content.SOLUTION_CONTENT.checkmarks.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section id="features" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for Modern Retail</h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">Everything you need to run a digital-first local business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Content.FEATURE_BLOCKS.map((feature, i) => (
              <FeatureBlock key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-50/30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              {Content.CLOSING_CONTENT.headline} <br />
              <span className="text-emerald-600">{Content.CLOSING_CONTENT.subheadline}</span>
            </h2>
            <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
              {Content.CLOSING_CONTENT.description}
            </p>
            <button className="bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-200">
              {Content.CLOSING_CONTENT.cta}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tighter">Eduzap</span>
          </div>
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Eduzap Technologies. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-zinc-600">
            {Content.FOOTER_LINKS.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-emerald-600">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
