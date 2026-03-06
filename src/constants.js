import { 
  Zap, 
  ShieldCheck, 
  Smartphone,
  LayoutDashboard,
  Receipt,
  QrCode,
  Truck,
  CheckCircle2
} from "lucide-react";

export const NAV_LINKS = [
  { label: "The Problem", href: "#problem" },
  { label: "Our Solution", href: "#solution" },
  { label: "Features", href: "#features" },
];

export const HERO_CONTENT = {
  badge: "Now Live for Retailers",
  headline: {
    main: "Your Business.",
    highlight: "Instantly Online."
  },
  subheadline: "Don't let giant aggregators eat your profit margins and kill your brand identity. Launch your own premium, highly customizable app and website in days, not in months.",
  primaryCTA: "See a Live Demo",
  secondaryCTA: "View the Template"
};

export const PROBLEM_CONTENT = {
  title: "The Digital Barrier is Costing You Customers.",
  description: "Local businesses know they need to be online to compete. But building a custom app from scratch takes months and costs a fortune. On the flip side, listing your products on massive aggregator apps turns your unique brand into just another nameless commodity. You deserve better."
};

export const SOLUTION_CONTENT = {
  title: "A Complete, Ready-To-Go Operating Ecosystem.",
  description: "We’ve built the heavy infrastructure so you don't have to. The \"Eduzap\" framework is a live, field-tested template that we customize entirely for your business.",
  cards: [
    {
      icon: Smartphone,
      title: "For Your Customers",
      description: "A beautifully branded app and website that makes ordering friction-free."
    },
    {
      icon: LayoutDashboard,
      title: "For You",
      description: "A powerful merchant dashboard that handles your catalog, customers, and operations."
    },
    {
      icon: ShieldCheck,
      title: "Reliable Tech",
      description: "Built on a field-tested template that scales as you grow."
    },
    {
      icon: Zap,
      title: "Fast Launch",
      description: "Get your store live in days, not months. No dev team required."
    }
  ],
  checkmarks: [
    "Custom Branding & Identity",
    "Integrated Payment Processing",
    "Real-time Inventory Management",
    "Customer Analytics & Insights"
  ]
};

export const FEATURE_BLOCKS = [
  {
    icon: Receipt,
    title: "Automated Billing & Invoicing",
    description: "Exhausted by manual paperwork? Our system automatically tracks sales, processes payments, and generates digital invoices instantly. Peace of mind, built-in."
  },
  {
    icon: QrCode,
    title: "Built to Win Locally",
    description: "Having an app isn't enough; you need awareness. We integrate physical and digital marketing tools like store QR codes and local promotional features to dominate your area."
  },
  {
    icon: Truck,
    title: "Scale On Your Terms",
    description: "Start by getting your digital storefront live. Later, when you're ready, simply toggle on our built-in Delivery Module to set up 2-hour local shipping with your own riders."
  }
];

export const CLOSING_CONTENT = {
  headline: "Look like a premium brand.",
  subheadline: "Automate your accounting.",
  description: "Join hundreds of local businesses that have reclaimed their digital independence with Eduzap.",
  cta: "Get Your Store Online Today"
};

export const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];
