import { Link, Outlet, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Menu, X, ChevronRight, Stethoscope } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const CONTACT_INFO = {
  md: ["8151938206", "7829712073", "9008608842"],
  appointments: "9901984418",
  location: "Muddinpalya, Bangalore",
  email: "info@swasthyam.com",
};

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-1 pb-16 md:pb-0"> {/* Padding for mobile sticky bar */}
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      
      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-brand-charcoal border-t border-white/10 flex items-center z-50">
        <a 
          href={`tel:${CONTACT_INFO.appointments}`} 
          className="flex-1 flex flex-col items-center justify-center p-3 text-white focus:bg-white/5 active:bg-white/10"
        >
          <Phone className="w-5 h-5 text-brand-orange mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
        </a>
        <div className="w-px h-10 bg-white/10"></div>
        <a 
          href={`https://wa.me/91${CONTACT_INFO.appointments}?text=I want to book an appointment`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center p-3 text-white focus:bg-white/5 active:bg-white/10"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden md:flex bg-[#050A1A] py-2 px-8 justify-between items-center z-50 relative border-b border-white/10">
      <div className="flex gap-6 text-[11px] uppercase tracking-widest text-white/70">
        <span className="flex items-center gap-2">
          <span className="text-brand-orange">MD:</span> {CONTACT_INFO.md.join(" / ")}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-brand-orange">APPOINTMENTS:</span> {CONTACT_INFO.appointments}
        </span>
      </div>
      <div className="text-[11px] uppercase tracking-widest text-white/70 italic">
        {CONTACT_INFO.location}
      </div>
    </div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Specialties", path: "/specialties" },
    { name: "Doctors", path: "/doctors" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled ? "bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3" : "bg-brand-navy py-5"
      )}
    >
      <div className="px-6 max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO PLACEHOLDER */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
            <div className="w-full h-full border-4 border-brand-blue rounded-full border-t-brand-orange"></div>
          </div>
          <div>
            <div className="font-bold text-xl tracking-tighter leading-none text-white">SWASTHYAM</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold">Super Specialty Hospital</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[13px] font-medium uppercase tracking-wider transition-colors hover:text-brand-orange",
                pathname === link.path ? "text-brand-orange" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT_INFO.appointments}`}
            className="btn-secondary text-[12px]"
          >
            EMERGENCY: 24/7
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-brand-charcoal border-b border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "py-4 px-4 border-b border-white/5 text-sm font-medium uppercase tracking-wider flex items-center justify-between",
                pathname === link.path ? "text-brand-orange" : "text-slate-300"
              )}
            >
              {link.name}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
          <div className="p-4 flex flex-col gap-3 mt-2">
            <a
              href={`tel:${CONTACT_INFO.appointments}`}
              className="bg-brand-orange text-white text-center py-3 rounded font-bold uppercase tracking-widest text-[11px]"
            >
              Call Appointments
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.appointments}?text=I want to book an appointment`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white text-center py-3 rounded font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5">
              <div className="w-full h-full border-4 border-brand-blue rounded-full border-t-brand-orange"></div>
            </div>
            <div>
              <div className="font-bold text-xl tracking-tighter leading-none text-white">SWASTHYAM</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold">Super Specialty Hospital</div>
            </div>
          </Link>
          <p className="text-slate-400 mb-6 font-semibold italic text-lg font-heading tracking-wide">
            "Your Health, Our Priority"
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Advanced care meets trusted healing. We provide world-class medical facilities with compassionate care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-heading font-semibold text-lg mb-6 flex items-center gap-2">
            <span className="w-6 h-1 bg-brand-orange rounded-full"></span> Quick Links
          </h3>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
            <li><Link to="/specialties" className="hover:text-brand-orange transition-colors">Specialties & Departments</Link></li>
            <li><Link to="/doctors" className="hover:text-brand-orange transition-colors">Our Doctors</Link></li>
            <li><Link to="/services" className="hover:text-brand-orange transition-colors">Facilities & Services</Link></li>
            <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-white font-heading font-semibold text-lg mb-6 flex items-center gap-2">
            <span className="w-6 h-1 bg-brand-orange rounded-full"></span> Contact
          </h3>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium mb-1">Appointments</p>
                <a href={`tel:${CONTACT_INFO.appointments}`} className="hover:text-brand-orange transition-colors">{CONTACT_INFO.appointments}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium mb-1">Managing Director</p>
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.md.map((num, idx) => (
                    <a key={idx} href={`tel:${num}`} className="hover:text-brand-orange transition-colors">{num}</a>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium mb-1">Location</p>
                <span>{CONTACT_INFO.location}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Timing */}
        <div>
          <h3 className="text-white font-heading font-semibold text-lg mb-6 flex items-center gap-2">
            <span className="w-6 h-1 bg-brand-orange rounded-full"></span> Emergency
          </h3>
          <div className="bg-brand-charcoal p-5 rounded-xl border border-white/5 shadow-inner">
            <p className="text-brand-orange font-bold text-xl mb-2 font-heading">24/7 Open</p>
            <p className="text-sm text-slate-400 mb-4">Our emergency and trauma center is available round the clock.</p>
            <a href={`tel:${CONTACT_INFO.appointments}`} className="w-full block text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors">
              Emergency Call
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Swasthyam Super Specialty Hospital. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-slate-300">Privacy Policy</Link>
          <Link to="/" className="hover:text-slate-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/91${CONTACT_INFO.appointments}?text=I want to book an appointment`}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-max bg-white text-slate-900 px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hidden md:block">
        Chat with us
      </span>
      {/* Ping animation indicator */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
}
