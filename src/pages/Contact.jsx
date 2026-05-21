import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment request submitted. We will contact you shortly.");
    setFormData({ name: "", phone: "", department: "", date: "", message: "" });
  };

  return (
    <div className="bg-brand-navy min-h-screen pb-24">
      <PageHeader 
        title="Contact & Appointments" 
        subtitle="Reach out to us for appointments, emergencies, or general patient inquiries. We're here to help."
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Contact info & Map */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Helpline Numbers</h4>
                  <div className="mt-1 space-y-1">
                    <p className="text-white/70 text-sm">Appointments: <a href="tel:9901984418" className="text-brand-gold hover:text-brand-orange font-medium">9901984418</a></p>
                    <p className="text-white/70 text-sm">MD Contact: 
                      <a href="tel:8151938206" className="text-brand-gold hover:text-brand-orange font-medium ml-1">8151938206</a>, 
                      <a href="tel:7829712073" className="text-brand-gold hover:text-brand-orange font-medium ml-1">7829712073</a>, 
                      <a href="tel:9008608842" className="text-brand-gold hover:text-brand-orange font-medium ml-1">9008608842</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Hospital Location</h4>
                  <p className="text-white/70 text-sm mt-1">
                    Swasthyam Super Specialty Hospital,<br/>
                    Muddinpalya, Bangalore
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Working Hours</h4>
                  <p className="text-white/70 text-sm mt-1 mb-1">
                    Emergency & ICU: <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px] ml-2 px-2 py-0.5 bg-brand-orange/10 rounded">24/7 OPEN</span>
                  </p>
                  <p className="text-white/70 text-sm">OPD Timings: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:9901984418"
                className="flex-1 btn-secondary flex items-center justify-center text-sm"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/919901984418?text=I want to book an appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 py-3 rounded-md font-bold uppercase tracking-widest text-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded overflow-hidden border border-white/10 h-[300px] relative bg-[#1C1C1C]">
            <div className="absolute inset-0 border border-brand-gold/20 z-10 pointer-events-none rounded"></div>
            {/* Embedded Google Map Placeholder - Note: Since I don't have an exact street address for Map embed API, using a static styling maps embed. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124409.61332467145!2d77.4206584!3d12.9840131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d87db185361%3A0xc3bba9ad9e4ee2!2sMuddinapalya%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703668102377!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Form */}
        <div className="order-1 lg:order-2">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px]"></div>
            
            <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Book an Appointment</h2>
            <p className="text-white/60 mb-8 relative z-10 text-sm">Fill out the form below and our team will get back to you to confirm your slot.</p>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-gold mb-1.5">Full Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-gold mb-1.5">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-all text-sm"
                  placeholder="+91"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-gold mb-1.5">Select Department</label>
                  <select 
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-all appearance-none text-sm"
                  >
                    <option value="" className="bg-brand-charcoal text-white">Any Department</option>
                    <option value="cardiology" className="bg-brand-charcoal text-white">Cardiology</option>
                    <option value="orthopedics" className="bg-brand-charcoal text-white">Orthopedics</option>
                    <option value="neurology" className="bg-brand-charcoal text-white">Neurology</option>
                    <option value="pediatrics" className="bg-brand-charcoal text-white">Pediatrics</option>
                    <option value="general" className="bg-brand-charcoal text-white">General Medicine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-gold mb-1.5">Preferred Date</label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white/50 focus:outline-none focus:border-brand-orange transition-all [color-scheme:dark] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-gold mb-1.5">Additional Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-all resize-none text-sm"
                  placeholder="Describe your symptoms or reason for visit..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-5 h-5" strokeWidth={1.5} />
                Request Appointment
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
