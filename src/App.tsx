import React, { useState } from 'react';
import {
  Code2,
  ShoppingBag,
  Paintbrush2,
  Star,
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Users,
  Zap,
  MousePointerClick,
  Sparkles,
  Globe,
  Server,
  BarChart3,
  FileText,
  Smartphone, // <-- add
  Search,     // <-- add
  Layout,     // <-- add
  Palette,    // <-- add
  Gauge       // <-- add
} from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';

// Add a simple error boundary
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: 40 }}>
          <h1>Something went wrong.</h1>
          <pre>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  // Add modal state
  const [showRestaurantModal, setShowRestaurantModal] = useState(false);
  const [showMechanicModal, setShowMechanicModal] = useState(false);

  const stats = [
    { icon: <Trophy className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Users className="w-6 h-6" />, value: "100%", label: "Client Satisfaction" },
    { icon: <Zap className="w-6 h-6" />, value: "24/7", label: "Support" },
  ];

  const projects = [
    {
      title: "Mechanic Shop Website",
      description: "Professional auto repair and maintenance services",
      image: "/mechanic/img/mechanic-7625592_1920.jpg", // updated path
      tags: ["HTML", "CSS", "JavaScript"],
      results: "150% increase in bookings"
    },
    //{
    //  title: "High-End Real Estate Platform",
    //  description: "Sophisticated property showcase with virtual tours",
   //   image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    //  tags: ["Next.js", "Tailwind", "Three.js"],
    //  results: "200+ premium listings"
    //},
    {
      title: "Premium Restaurant Platform",
      description: "Elegant booking system with AI-powered recommendations",
      image: "/RestaurantSite/images/greek5.jpg", // <-- use the correct path for greek5.jpg
      tags: ["React", "Express", "AI"],
      results: "45% booking increase"
    }
  ];

  // Replace services with new cards
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-500" />,
      title: "Custom Websites",
      price: "€400 – €800",
      subtitle: "Modern, responsive websites tailored for your brand",
      bullets: [
        { icon: <Smartphone className="w-5 h-5 text-indigo-400" />, text: "Mobile-Friendly Design" },
        { icon: <Search className="w-5 h-5 text-indigo-400" />, text: "Basic SEO Setup" },
        { icon: <Zap className="w-5 h-5 text-indigo-400" />, text: "Smooth Animations & UI Effects" },
        { icon: <Code2 className="w-5 h-5 text-indigo-400" />, text: "Clean, Fast Frontend Code" },
        { icon: <Mail className="w-5 h-5 text-indigo-400" />, text: "Simple Contact Form Integration" }
      ]
    },
    {
      icon: <Paintbrush2 className="w-8 h-8 text-indigo-500" />,
      title: "Website Redesign",
      price: "€300 – €600",
      subtitle: "Give your current site a fresh, fast new look",
      bullets: [
        { icon: <Layout className="w-5 h-5 text-indigo-400" />, text: "Improved Layout & UX" },
        { icon: <Smartphone className="w-5 h-5 text-indigo-400" />, text: "Mobile Optimization" },
        { icon: <Palette className="w-5 h-5 text-indigo-400" />, text: "Branding Adjustments" },
        { icon: <Gauge className="w-5 h-5 text-indigo-400" />, text: "Speed Optimization" },
        { icon: <FileText className="w-5 h-5 text-indigo-400" />, text: "Light Content Cleanup" }
      ]
    }
  ];

  // Add-ons data
  const addons = [
    { name: "Hosting & Domain Setup", price: "+€50", icon: <Server className="w-5 h-5 text-indigo-400" /> },
    { name: "Custom Forms (e.g., Netlify)", price: "+€40", icon: <Mail className="w-5 h-5 text-indigo-400" /> },
    { name: "Basic Analytics (Plausible)", price: "+€40", icon: <BarChart3 className="w-5 h-5 text-indigo-400" /> },
    { name: "Multi-language (static only)", price: "+€100", icon: <Globe className="w-5 h-5 text-indigo-400" /> }
  ];

  const testimonials = [
    {
      name: "Andrei Popescu",
      role: "Owner, Mechanic Shop",
      content: "The new website brought us more clients than ever before. The team was professional, fast, and understood exactly what we needed for our business.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      metrics: "120% increase in bookings"
    },
    {
      name: "Ioana Marinescu",
      role: "Manager, Seaside Restaurant",
      content: "We loved working with this team! Our restaurant’s online reservations doubled and our clients always compliment the new design.",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      metrics: "2x more online reservations"
    }
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative hero-gradient min-h-screen flex items-center">
          {/* Remove the top logo */}
          {/* <div className="flex justify-center mb-8">
                <img ... />
              </div> */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-white">Premium Web Development Services</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
                Elevate Your Brand with
                <span className="gradient-text block mt-2">Boomin' Web Design</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let's make your business boom online with stunning, high-performance websites that captivate your audience and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="#contact" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full button-gradient text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#portfolio" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-indigo-900 transition-all duration-300">
                  Explore Portfolio
                </a>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stats-gradient rounded-2xl p-6 backdrop-blur-lg border border-white/10">
                  <div className="flex items-center justify-center">
                    <div className="text-white mr-4">{stat.icon}</div>
                    <div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 sm:py-24 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Showcase of Projects</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Transforming visions into digital masterpieces that deliver measurable results
              </p>
            </div>
            {/* Center the grid and make cards wider */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl md:max-w-5xl">
                {/* Mechanic Project */}
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden gradient-border card-hover w-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/mechanic/img/mechanic-7625592_1920.jpg" // updated path
                      alt="Mechanic Project" 
                      className="w-full h-52 sm:h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 sm:p-6 text-white">
                        <div className="flex items-center">
                          <MousePointerClick className="w-5 h-5 mr-2" />
                          <button
                            className="underline"
                            onClick={() => setShowMechanicModal(true)}
                            style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0 }}
                          >
                            View Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Mechanic Shop Website</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">Professional auto repair and maintenance services.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium">HTML</span>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium">CSS</span>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium">JavaScript</span>
                    </div>
                  </div>
                </div>
                {/* Restaurant Project */}
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden gradient-border card-hover w-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/RestaurantSite/images/greek5.jpg" // <-- use the correct path for greek5.jpg
                      alt="Restaurant Project" 
                      className="w-full h-52 sm:h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 sm:p-6 text-white">
                        <div className="flex items-center">
                          <MousePointerClick className="w-5 h-5 mr-2" />
                          <button
                            className="underline"
                            onClick={() => setShowRestaurantModal(true)}
                            style={{ color: "inherit", cursor: "pointer", padding: 0, background: "none", border: "none" }}
                          >
                            View Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Premium Restaurant Platform</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">Elegant booking system with calendar updates.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium">HTML</span>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium">CSS</span>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium">JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-20 sm:py-24 md:py-32 bg-[#f8fafc] font-inter">
          <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Transparent, modern web design packages for small businesses and professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-16">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-50 rounded-full p-3 mr-3">{service.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{service.price}</div>
                  <div className="text-gray-500 mb-6">{service.subtitle}</div>
                  <ul className="space-y-4">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="mr-3">{b.icon}</span>
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Optional Add-ons Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Optional Add-ons</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr>
                      <th className="text-gray-600 font-medium pb-2">Add-on</th>
                      <th className="text-gray-600 font-medium pb-2 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addons.map((addon, i) => (
                      <tr key={i} className="bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                        <td className="py-3 px-2 flex items-center gap-3 font-medium text-gray-800 rounded-l-lg">
                          {addon.icon}
                          {addon.name}
                        </td>
                        <td className="py-3 px-2 text-indigo-600 font-semibold text-right rounded-r-lg">{addon.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real results from businesses we've helped transform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-10 rounded-2xl shadow-lg gradient-border card-hover">
                  <div className="flex items-center mb-8">
                    <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mr-6 object-cover" />
                    <div>
                      <h4 className="text-2xl font-semibold">{testimonial.name}</h4>
                      <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                    <div className="text-green-700 font-medium flex items-center">
                      <Trophy className="w-5 h-5 mr-2" />
                      {testimonial.metrics}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to transform your digital presence? Let's create something extraordinary together. Fill out the form below or contact us at <a href="mailto:contact@boomin.dev" className="text-indigo-600 hover:underline">contact@boomin.dev</a>
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl gradient-border">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Ready to discuss your next project? Reach out through social media or drop me a message.
                </p>
                <div className="flex space-x-6">
                  <a href="mailto:contact@boomin.dev" className="hover:text-indigo-400 transition-colors duration-200 scale-hover">
                    <Mail className="w-7 h-7" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <img
                  src="./img/logo-full.png" // updated path
                  alt="Boomin Full Logo"
                  style={{
                    height: '70px',
                    maxWidth: '200px',
                    objectFit: 'contain'
                  }}
                  className="mb-4 drop-shadow"
                />
                <div className="text-right">
                  <p className="text-gray-400">© 2025 Boomin. All rights reserved.</p>
                  <p className="text-gray-400 mt-2">Crafting digital excellence with precision.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* RestaurantSite Modal */}
        {showRestaurantModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
              <button
                className="absolute top-4 right-4 z-10 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition"
                onClick={() => setShowRestaurantModal(false)}
                aria-label="Close"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
              {/* Use the actual static restaurant homepage, not the React app */}
              <iframe
                src="/RestaurantSite/index.html"
                title="Premium Restaurant Platform"
                className="flex-1 w-full h-full border-0"
              />
            </div>
          </div>
        )}

        {/* Mechanic Project Modal */}
        {showMechanicModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
              <button
                className="absolute top-4 right-4 z-10 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition"
                onClick={() => setShowMechanicModal(false)}
                aria-label="Close"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
              <iframe
                src="/mechanic/index.html"
                title="Mechanic Website"
                className="flex-1 w-full h-full border-0"
              />
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
