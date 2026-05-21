import PageHeader from "@/components/PageHeader";
import { Calendar, Stethoscope, Award } from "lucide-react";
import { Link } from "react-router-dom";

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Arvind Sharma",
    qualification: "MBBS, MD (General Medicine)",
    specialty: "General Physician",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e410f624c427?w=500&q=80",
  },
  {
    id: 2,
    name: "Dr. Meera Reddy",
    qualification: "MBBS, MS (Obstetrics & Gynecology)",
    specialty: "Gynecologist",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80",
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    qualification: "MBBS, MS (Orthopedics)",
    specialty: "Orthopedic Surgeon",
    experience: "18+ Years",
    image: "https://images.unsplash.com/photo-1537368910025-70281c5f3e72?w=500&q=80",
  },
  {
    id: 4,
    name: "Dr. Sneha Patel",
    qualification: "MBBS, MD (Pediatrics)",
    specialty: "Pediatrician",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1594824436998-d748888b1f80?w=500&q=80",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    qualification: "MBBS, MD, DM (Cardiology)",
    specialty: "Cardiologist",
    experience: "14+ Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80",
  },
  {
    id: 6,
    name: "Dr. Anita Desai",
    qualification: "MBBS, MD (Neurology)",
    specialty: "Neurologist",
    experience: "16+ Years",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&q=80",
  }
];

export default function Doctors() {
  return (
    <div className="bg-brand-navy min-h-screen pb-24">
      <PageHeader 
        title="Our Medical Experts" 
        subtitle="Meet our diverse team of highly qualified specialists dedicated to your health and well-being."
      />

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col p-1">
              <div className="aspect-[4/3] overflow-hidden relative rounded-t-[11px] rounded-b-sm">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top filter brightness-90 group-hover:brightness-100 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest">
                  {doc.specialty}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative z-10 pt-4">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{doc.name}</h3>
                <p className="text-white/50 text-sm mb-6 pb-6 border-b border-white/10">{doc.qualification}</p>
                
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <Stethoscope className="w-4 h-4 text-brand-gold" />
                    <span>Department of {doc.specialty}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <Award className="w-4 h-4 text-brand-gold" />
                    <span>{doc.experience} Experience</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn-secondary w-full flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
