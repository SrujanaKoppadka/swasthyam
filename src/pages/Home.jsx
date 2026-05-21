import { ArrowRight, PhoneCall, Clock, ShieldCheck, HeartPulse, ActivitySquare, CheckCircle2, Star, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-brand-navy min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="geometric-accent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[12px] uppercase tracking-widest text-brand-gold mb-4">
              Premium Healthcare Excellence
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Advanced Care. <br />
              <span className="text-brand-gold">Trusted Healing.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-light leading-relaxed">
              Experience world-class medical expertise in the heart of Bangalore. Our specialty-led teams deliver compassionate care with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-5 h-5" />
                Book Appointment
              </Link>
              <Link
                to="/doctors"
                className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-md text-sm font-bold flex items-center justify-center gap-3 uppercase tracking-widest transition-all"
              >
                Our Specialists <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 text-white">
              <div className="stat-line">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">Emergency ICU</div>
              </div>
              <div className="stat-line">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">Expert Doctors</div>
              </div>
              <div className="stat-line">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">Trusted Lives</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="glass-card p-8 shadow-2xl relative z-10 w-full max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Quick Booking</h3>
              <p className="text-sm text-white/50 mb-6">Fill in the details to schedule your visit.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-1 text-brand-gold">Patient Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/20 p-3 rounded text-sm focus:outline-none focus:border-brand-orange" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-1 text-brand-gold">Phone Number</label>
                    <input type="tel" placeholder="+91" className="w-full bg-white/5 border border-white/20 p-3 rounded text-sm focus:outline-none focus:border-brand-orange" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-1 text-brand-gold">Specialty</label>
                  <select className="w-full bg-white/5 border border-white/20 p-3 rounded text-sm focus:outline-none focus:border-brand-orange appearance-none">
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Neurology</option>
                    <option>General Medicine</option>
                  </select>
                </div>
                <button type="button" className="w-full py-4 bg-gradient-to-r from-brand-blue to-[#003d80] text-white font-bold rounded uppercase tracking-widest text-sm mt-4 border border-white/10 hover:opacity-90 transition-opacity">
                  Confirm Appointment
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50 italic">
                <p>Need immediate help?</p>
                <a href={`tel:9901984418`} className="text-brand-orange font-bold uppercase not-italic tracking-wider">Call 9901984418</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-brand-blue border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10 text-center">
          <div className="px-4">
            <Clock className="w-8 h-8 text-white mx-auto mb-3" strokeWidth={1.5} />
            <h4 className="text-white font-bold mb-1">24/7 Emergency</h4>
            <p className="text-brand-gold text-sm">Always Open</p>
          </div>
          <div className="px-4">
            <ActivitySquare className="w-8 h-8 text-white mx-auto mb-3" strokeWidth={1.5} />
            <h4 className="text-white font-bold mb-1">Advanced ICU</h4>
            <p className="text-brand-gold text-sm">Critical Care</p>
          </div>
          <div className="px-4">
            <ShieldCheck className="w-8 h-8 text-white mx-auto mb-3" strokeWidth={1.5} />
            <h4 className="text-white font-bold mb-1">Expert Doctors</h4>
            <p className="text-brand-gold text-sm">50+ Specialists</p>
          </div>
          <div className="px-4">
            <CheckCircle2 className="w-8 h-8 text-white mx-auto mb-3" strokeWidth={1.5} />
            <h4 className="text-white font-bold mb-1">Modern Equipment</h4>
            <p className="text-brand-gold text-sm">Best in Class</p>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 relative overflow-hidden bg-brand-navy">
        <div className="geometric-accent-left"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Launch <span className="text-brand-orange">Special Offers</span>
              </h2>
              <p className="text-white/70 text-lg">Take charge of your health with our comprehensive, discounted checkup packages.</p>
            </div>
            <Link to="/contact" className="hidden border border-white/20 hover:border-brand-gold text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-widest transition-all md:flex items-center gap-2">
              View All Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Master Health Checkup",
                price: "₹2,999",
                oldPrice: "₹5,000",
                features: ["Complete Blood Count (CBC)", "Lipid Profile", "Liver Function Test", "ECG & Chest X-Ray", "Physician Consultation"],
                popular: true
              },
              {
                name: "Cardiac Screening",
                price: "₹1,999",
                oldPrice: "₹3,500",
                features: ["ECG", "ECHO Cardiogram", "TMT (Treadmill Test)", "Cardiologist Consultation", "Lipid Profile"],
                popular: false
              },
              {
                name: "Women's Wellness",
                price: "₹2,499",
                oldPrice: "₹4,200",
                features: ["USG Pelvis", "Pap Smear", "Thyroid Profile", "Bone Density Scan", "Gynecology Consultation"],
                popular: false
              }
            ].map((pkg, i) => (
              <div key={i} className={`glass-card p-8 flex flex-col ${pkg.popular ? 'border-brand-orange scale-105 z-10' : ''}`}>
                {pkg.popular && (
                  <span className="bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest self-start mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                  <span className="text-3xl font-bold text-brand-gold">{pkg.price}</span>
                  <span className="text-white/50 line-through text-sm">{pkg.oldPrice}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/80 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-3 rounded font-bold text-center uppercase tracking-widest text-sm transition-all border ${pkg.popular ? 'bg-brand-orange text-white border-brand-orange hover:bg-brand-orange/90' : 'bg-transparent border-white/20 text-white hover:border-brand-gold hover:text-brand-gold'}`}>
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="py-24 bg-brand-navy border-t border-white/5 relative overflow-hidden">
        <div className="geometric-accent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our <span className="text-brand-orange">Specialties</span></h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Comprehensive care across multiple disciplines, all under one roof.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: "Cardiology", icon: ActivitySquare, color: "text-brand-blue", bg: "border-brand-blue/30 hover:border-brand-blue" },
              { name: "Orthopedics", icon: ActivitySquare, color: "text-brand-gold", bg: "border-brand-gold/30 hover:border-brand-gold" },
              { name: "Neurology", icon: ActivitySquare, color: "text-white", bg: "border-white/30 hover:border-white" },
              { name: "Pediatrics", icon: ActivitySquare, color: "text-brand-orange", bg: "border-brand-orange/30 hover:border-brand-orange" },
            ].map((spec, i) => (
              <Link to="/specialties" key={i} className={`glass-card p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group ${spec.bg}`}>
                <spec.icon className={`w-12 h-12 ${spec.color} mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} strokeWidth={1} />
                <h3 className="text-white font-bold uppercase tracking-widest text-sm">{spec.name}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/specialties" className="btn-secondary inline-flex items-center gap-2">
              View All Specialties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-charcoal border-y border-white/5 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-orange/10 blur-[100px] rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="Excellent Care" className="rounded-xl relative z-10 shadow-[0_0_40px_rgba(30,64,175,0.3)] border border-white/10" />
            
            <div className="absolute -bottom-8 -right-8 z-20 glass-card p-6 max-w-[200px] hidden md:block border-brand-orange/50">
              <div className="flex gap-1 text-brand-gold mb-2">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-white font-bold leading-tight">Best Hospital in Muddinpalya</p>
            </div>
          </div>
          
          <div>
            <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[12px] uppercase tracking-widest text-brand-gold mb-4">
              Our Legacy
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose <span className="text-brand-gold">Swasthyam?</span></h2>
            <p className="text-white/70 text-lg mb-10">We bring together specialized doctors, advanced technology, and a healing environment to provide you with the best possible care.</p>
            
            <div className="space-y-6">
              {[
                { title: "Patient-Centric Approach", desc: "Every treatment plan is tailored to the individual's specific health needs." },
                { title: "Highly Experienced Doctors", desc: "Our specialists have decades of experience from top institutions." },
                { title: "Transparent Pricing", desc: "Ethical medical practice with no hidden costs across all our services." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                  <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center shrink-0 border border-white/10 group-hover:border-brand-gold transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="geometric-accent opacity-50 scale-x-[-1]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Patient <span className="text-brand-orange">Stories</span></h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Hear what our patients have to say about their experience at Swasthyam.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="glass-card p-8">
                <div className="flex gap-1 text-brand-gold mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-white/70 italic mb-8 leading-relaxed text-sm">
                  "The care I received at Swasthyam was exceptional. The doctors were attentive, and the facilities are world-class. I highly recommend them to anyone in Muddinpalya."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center font-bold text-brand-gold uppercase">
                    {[ 'R', 'S', 'M' ][i]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-[12px]">{['Rahul K.', 'Sanjeev N.', 'Meera P.'][i]}</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Recovered Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Appointment & CTA */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-tr from-brand-blue/20 to-transparent border border-brand-blue/30 rounded p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="geometric-accent opacity-30"></div>
            
            <div className="md:w-1/2 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
              <p className="text-white/70 text-lg mb-8">Our expert medical team is available 24/7. Request a callback or walk into our emergency department.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/5 border border-white/10 p-3 rounded"><PhoneCall className="w-6 h-6 text-brand-gold" strokeWidth={1.5} /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold">Call for Appointments</p>
                    <p className="text-2xl font-bold tracking-wide">9901984418</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/5 border border-white/10 p-3 rounded"><MapPin className="w-6 h-6 text-brand-gold" strokeWidth={1.5} /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold">Visit Us At</p>
                    <p className="text-lg font-bold">Muddinpalya, Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-5/12 w-full glass-card p-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Appointment</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-orange" required />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-orange" required />
                <select className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-orange appearance-none">
                  <option className="bg-[#1C1C1C]">General Query</option>
                  <option className="bg-[#1C1C1C]">Cardiology</option>
                  <option className="bg-[#1C1C1C]">Orthopedics</option>
                </select>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 mt-4 text-sm">
                  Request Callback
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
