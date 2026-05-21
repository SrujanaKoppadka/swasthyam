import PageHeader from "@/components/PageHeader";
import { Activity, Bone, Brain, Baby, Users, Stethoscope, AlertCircle, ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SPECIALTIES = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Advanced heart care including non-invasive diagnostics, interventional procedures, and cardiac critical care.",
    icon: Activity,
    color: "from-red-500/20 to-red-600/5",
    iconColor: "text-red-500",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Comprehensive care for bones, joints, and spine. Joint replacements, trauma care, and sports medicine.",
    icon: Bone,
    color: "from-orange-500/20 to-orange-600/5",
    iconColor: "text-orange-500",
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Expert treatment for stroke, epilepsy, movement disorders, and comprehensive neuro-rehabilitation.",
    icon: Brain,
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-500",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Compassionate care for infants, children, and adolescents spanning general and specialized pediatrics.",
    icon: Baby,
    color: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-500",
  },
  {
    id: "gynecology",
    name: "Gynecology & Obstetrics",
    description: "Complete women's healthcare, high-risk pregnancy management, and minimally invasive surgeries.",
    icon: Users,
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-500",
  },
  {
    id: "general-medicine",
    name: "General Medicine",
    description: "Diagnosis and treatment of adult diseases, preventive care, and management of chronic conditions.",
    icon: Stethoscope,
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-500",
  },
  {
    id: "icu",
    name: "ICU & Emergency",
    description: "24/7 access to trauma experts and intensive care specialists equipped with life-saving technology.",
    icon: AlertCircle,
    color: "from-red-600/30 to-red-900/10",
    iconColor: "text-red-500",
  },
];

export default function Specialties() {
  return (
    <div className="bg-brand-navy min-h-screen pb-24">
      <PageHeader 
        title="Centres of Excellence" 
        subtitle="Comprehensive multi-specialty care combining expert physicians, state-of-the-art technology, and compassionate healing."
      />

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <div 
                key={specialty.id}
                className="glass-card overflow-hidden group hover:border-brand-gold/50 transition-all hover:-translate-y-1 flex flex-col h-full relative"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${specialty.color} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="p-8 relative z-10 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded bg-white/5 flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover:bg-brand-gold/10 transition-colors">
                    <Icon className={`w-7 h-7 ${specialty.iconColor} group-hover:scale-110 transition-transform`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {specialty.name}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed mb-8 flex-1 text-sm">
                    {specialty.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                    <Link to="/contact" className="text-[11px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-orange transition-colors flex items-center gap-1 group-hover:gap-2">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                    
                    <a href="tel:9901984418" className="bg-brand-orange/20 hover:bg-brand-orange p-2.5 rounded text-brand-orange hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
