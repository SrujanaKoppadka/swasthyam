import { FileText, HeartPulse, UserCircle2, Sparkles, PhoneCall } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-brand-navy min-h-screen pb-20">
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our mission, vision, and the legacy of healthcare excellence at Swasthyam."
      />
      
      <div className="max-w-7xl mx-auto px-6 mt-16 text-slate-300">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[12px] uppercase tracking-widest text-brand-gold mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Legacy of <span className="text-brand-gold">Trusted Healing</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light text-white/80">
              Swasthyam Super Specialty Hospital was founded with a singular vision: to bring world-class healthcare within reach of everyone. Located in the heart of Muddinpalya, Bangalore, we combine advanced medical infrastructure with a deeply compassionate approach to patient care.
            </p>
            <p className="leading-relaxed mb-8 text-white/50 text-sm">
              Our multidisciplinary team of highly experienced specialists, dedicated nurses, and state-of-the-art facilities ensure that every patient receives comprehensive, personalized treatment. From critical care to routine diagnostics, "Your Health, Our Priority" is more than a tagline—it is the guiding principle of our entire institution.
            </p>

            <div className="flex gap-4">
              <div className="glass-card p-4 flex-1">
                <div className="stat-line">
                  <h4 className="text-white font-bold text-2xl mb-1">10+</h4>
                  <p className="text-[10px] text-brand-gold uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
              <div className="glass-card p-4 flex-1">
                <div className="stat-line">
                  <h4 className="text-white font-bold text-2xl mb-1">24/7</h4>
                  <p className="text-[10px] text-brand-gold uppercase tracking-wider">Emergency Care</p>
                </div>
              </div>
              <div className="glass-card p-4 flex-1">
                <div className="stat-line">
                  <h4 className="text-white font-bold text-2xl mb-1">50+</h4>
                  <p className="text-[10px] text-brand-gold uppercase tracking-wider">Expert Doctors</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-full bg-brand-charcoal absolute -top-10 -right-10 blur-3xl opacity-50 z-0"></div>
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden relative z-10 border border-brand-orange/20 shadow-[0_0_50px_rgba(249,115,22,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" 
                alt="Hospital Facility" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <div className="glass-card p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <Sparkles className="w-12 h-12 text-brand-gold mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest text-sm border-b border-brand-gold/30 pb-2 inline-block">Our Vision</h3>
            <p className="text-white/70 leading-relaxed pt-2">
              To be the premier healthcare destination in Bangalore, recognized globally for clinical excellence, compassionate patient care, and cutting-edge medical innovations.
            </p>
          </div>
          <div className="glass-card p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <HeartPulse className="w-12 h-12 text-brand-orange mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest text-sm border-b border-brand-orange/30 pb-2 inline-block">Our Mission</h3>
            <p className="text-white/70 leading-relaxed pt-2">
              To provide accessible, high-quality, and evidence-based healthcare. We are committed to patient safety, ethical practices, and continuous advancement in medical knowledge.
            </p>
          </div>
        </div>

        {/* Founder Message Section */}
        <div className="mt-24 pt-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center glass-card p-12">
            <div className="w-24 h-24 mx-auto bg-brand-navy rounded-full border-2 border-brand-orange flex items-center justify-center mb-6 shadow-xl overflow-hidden -mt-20">
               <img 
                 src="https://images.unsplash.com/photo-1612349317150-e410f624c427?w=400&q=80" 
                 alt="Founder" 
                 className="w-full h-full object-cover"
               />
            </div>
            <h3 className="text-2xl font-bold text-white">Dr. Founder Name</h3>
            <p className="text-brand-orange uppercase tracking-widest text-[10px] font-semibold mt-2 mb-8">Managing Director</p>
            <blockquote className="text-lg md:text-xl text-white/80 italic font-light leading-relaxed border-l-2 border-brand-gold pl-6 text-left relative">
              "We built Swasthyam with a simple philosophy: to treat every patient with the same dedication and expertise we would offer to our own family members. Our hospital represents a sanctuary of healing where cutting-edge technology meets profound human empathy."
            </blockquote>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-24 bg-gradient-to-tr from-brand-blue/20 to-transparent border border-brand-blue/30 rounded p-12 text-center relative overflow-hidden">
          <div className="geometric-accent opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Experience Premium Healthcare</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Our specialists are ready to provide you with the best medical care. Book your consultation today.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Contact Us Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
