import {
	ArrowRight,
	PhoneCall,
	Clock,
	Stethoscope,
	ShieldCheck,
	AlertCircle,
	ActivitySquare,
	Bone,
	Users,
	CheckCircle2,
	Star,
	CalendarDays,
	MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabase";
import swasthyamimg from "../assets/swasthyam-hospital.webp"

// Simple hook for scroll-based reveal
function useScrollReveal() {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.add("in-view");
					obs.unobserve(el);
				}
			},
			{ threshold: 0.12 },
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return ref;
}

export default function Home() {
	return (
		<div style={{ background: "#f4f8ff" }}>
			<HeroSection />
			<HighlightsBar />
			<SpecialtiesPreview />
			<WhyChooseUs />
			<FacilitiesShowcase />
			<Testimonials />
			<CTASection />
		</div>
	);
}

function HeroSection() {
	return (
		<section
			className="relative min-h-[88vh] flex items-center pt-16 pb-16 overflow-hidden"
			style={{
				background:
					"linear-gradient(135deg, #e8f2ff 0%, #f4f8ff 50%, #fff7f0 100%)",
			}}
		>
			{/* Soft background blobs */}
			<div
				className="absolute top-0 right-0 w-[45%] h-full opacity-40"
				style={{
					background:
						"linear-gradient(135deg, rgba(26,111,196,0.12) 0%, rgba(224,92,26,0.06) 100%)",
					clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
				}}
			></div>
			<div
				className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 animate-float"
				style={{
					background: "radial-gradient(circle, #1a6fc4 0%, transparent 70%)",
					animationDelay: "0s",
				}}
			></div>
			<div
				className="absolute bottom-10 right-10 w-60 h-60 rounded-full opacity-15 animate-float"
				style={{
					background: "radial-gradient(circle, #e05c1a 0%, transparent 70%)",
					animationDelay: "1.5s",
				}}
			></div>

			<div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
				<div className="lg:col-span-7">
					<div
						className="shimmer-badge inline-block px-4 py-1.5 rounded-full text-[12px] uppercase tracking-widest font-semibold mb-5 animate-fade-up"
						style={{ color: "#1a6fc4" }}
					>
						✦ Premium Healthcare Excellence
					</div>

					<h1
						className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-up delay-100"
						style={{ color: "#1a2340" }}
					>
						Advanced Care.
						<br />
						<span
							className="animate-fade-up delay-200"
							style={{ color: "#e05c1a" }}
						>
							Trusted Healing.
						</span>
					</h1>

					<p
						className="text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed animate-fade-up delay-300"
						style={{ color: "#4a5a7a" }}
					>
						Experience world-class medical expertise in the heart of Bangalore.
						Our specialty-led teams deliver compassionate care with cutting-edge
						technology.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
						<Link
							to="/contact"
							className="btn-primary flex items-center justify-center gap-2"
						>
							<CalendarDays className="w-5 h-5" />
							Book Appointment
						</Link>
						<Link
							to="/doctors"
							className="flex items-center justify-center gap-3 px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-all border-2 hover:-translate-y-0.5"
							style={{
								color: "#1a6fc4",
								borderColor: "#1a6fc4",
								background: "rgba(26,111,196,0.06)",
							}}
						>
							Our Specialists <ArrowRight className="w-4 h-4" />
						</Link>
					</div>

					<div className="mt-14 grid grid-cols-3 gap-8 animate-fade-up delay-500">
						{[
							["24/7", "Emergency ICU"],
							["24/7", "Lab Pharmacy,Icu,x-ray"],
							["30+", "Expert Doctors"],
						].map(([val, label]) => (
							<div key={label} className="stat-line">
								<div
									className="text-2xl font-bold"
									style={{ color: "#1a2340" }}
								>
									{val}
								</div>
								<div
									className="text-[10px] uppercase tracking-wider"
									style={{ color: "#7a8aaa" }}
								>
									{label}
								</div>
							</div>
						))}
					</div>
				</div>

				<HeroBookingForm />
			</div>
		</section>
	);
}

function HighlightsBar() {
	return (
		<section style={{ background: "#1a6fc4" }}>
			<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/20">
				{[
					[Clock, "Open 24/7", "Emergency & ICU always ready"],
					[ShieldCheck, "Certified Doctors", "30+ expert specialists"],
					[ActivitySquare, "Advanced Tech", "State-of-the-art equipment"],
					[Users, "10,000+ Patients", "Trusted by families across Bangalore"],
				].map(([Icon, title, sub], i) => (
					<div
						key={i}
						className="px-4 animate-fade-up"
						style={{ animationDelay: `${i * 0.1}s` }}
					>
						<Icon
							className="w-8 h-8 text-white/80 mx-auto mb-2"
							strokeWidth={1.5}
						/>
						<p className="text-white font-bold text-sm uppercase tracking-wider">
							{title}
						</p>
						<p className="text-white/70 text-xs mt-1">{sub}</p>
					</div>
				))}
			</div>
		</section>
	);
}

function SpecialtiesPreview() {
	const ref = useScrollReveal();
	const specialties = [
		{
			name: "General Medicine",
			desc: "Diagnosis and treatment of adult diseases and preventive care.",
			icon: Stethoscope,
			color: "#10b981",
			bg: "rgba(16,185,129,0.08)",
		},
		{
			name: "ICU & Trauma",
			desc: "24/7 access to trauma experts and intensive care specialists.",
			icon: AlertCircle,
			color: "#ef4444",
			bg: "rgba(239,68,68,0.08)",
		},
		{
			name: "Gynecology & Obstetrics",
			desc: "Complete women's healthcare and high-risk pregnancy management.",
			icon: Users,
			color: "#8b5cf6",
			bg: "rgba(139,92,246,0.08)",
		},
		{
			name: "Orthopedics",
			desc: "Comprehensive care for bones, joints, and spine injuries.",
			icon: Bone,
			color: "#f97316",
			bg: "rgba(249,115,22,0.08)",
		},
	];

	return (
		<section
			className="py-24 relative overflow-hidden"
			style={{ background: "#f4f8ff" }}
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16" ref={ref}>
					<p
						className="text-[12px] uppercase tracking-widest font-semibold mb-3"
						style={{ color: "#e05c1a" }}
					>
						What We Treat
					</p>
					<h2
						className="text-3xl md:text-5xl font-bold mb-4"
						style={{ color: "#1a2340" }}
					>
						Our <span style={{ color: "#e05c1a" }}>Specialties</span>
					</h2>
					<p className="text-lg max-w-2xl mx-auto" style={{ color: "#4a5a7a" }}>
						Comprehensive care across multiple disciplines, all under one roof.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
					{specialties.map((spec, i) => (
						<Link
							to="/specialties"
							key={i}
							className="card-lift rounded-2xl p-7 flex flex-col items-center text-center group animate-fade-up"
							style={{
								background: "#ffffff",
								border: "1px solid #e0ecf8",
								boxShadow: "0 2px 12px rgba(26,111,196,0.06)",
								animationDelay: `${i * 0.1}s`,
							}}
						>
							<div
								className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
								style={{ background: spec.bg }}
							>
								<spec.icon
									className="w-7 h-7"
									style={{ color: spec.color }}
									strokeWidth={1.5}
								/>
							</div>
							<h3
								className="font-bold text-sm uppercase tracking-wide mb-2"
								style={{ color: "#1a2340" }}
							>
								{spec.name}
							</h3>
							<p
								className="text-xs leading-relaxed"
								style={{ color: "#6a7a99" }}
							>
								{spec.desc}
							</p>
						</Link>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						to="/specialties"
						className="btn-secondary inline-flex items-center gap-2"
					>
						View All Specialties <ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function WhyChooseUs() {
	return (
		<section
			className="py-24 relative overflow-hidden"
			style={{ background: "#eaf1fb" }}
		>
			<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
				<div className="relative animate-fade-left">
					<div
						className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
						style={{
							background:
								"radial-gradient(circle, #1a6fc4 0%, transparent 70%)",
						}}
					></div>
					<img
						src={swasthyamimg}
						alt="Excellent Care"
						className="rounded-2xl relative z-10 w-full"
						style={{
							boxShadow: "0 20px 60px rgba(26,111,196,0.18)",
							border: "1px solid #d5e3f5",
						}}
					/>
					<div
						className="absolute -bottom-6 -right-6 z-20 rounded-xl p-5 hidden md:block animate-float"
						style={{
							background: "#ffffff",
							border: "1px solid #d5e3f5",
							boxShadow: "0 10px 30px rgba(26,111,196,0.12)",
						}}
					>
						<div className="flex gap-1 mb-2" style={{ color: "#f59e0b" }}>
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="w-4 h-4 fill-current" />
							))}
						</div>
						<p
							className="font-bold text-sm leading-tight"
							style={{ color: "#1a2340" }}
						>
							Best Hospital in Muddinpalya
						</p>
					</div>
				</div>

				<div className="animate-fade-right">
					<p
						className="text-[12px] uppercase tracking-widest font-semibold mb-3"
						style={{ color: "#e05c1a" }}
					>
						Our Legacy
					</p>
					<h2
						className="text-3xl md:text-4xl font-bold mb-6"
						style={{ color: "#1a2340" }}
					>
						Why Choose <span style={{ color: "#1a6fc4" }}>Swasthyam?</span>
					</h2>
					<p
						className="text-lg mb-10 leading-relaxed"
						style={{ color: "#4a5a7a" }}
					>
						We bring together specialized doctors, advanced technology, and a
						healing environment to provide you with the best possible care.
					</p>

					<div className="space-y-5">
						{[
							{
								title: "Patient-Centric Approach",
								desc: "Every treatment plan is tailored to the individual's specific health needs and situation.",
							},
							{
								title: "Highly Experienced Doctors",
								desc: "Our specialists have decades of experience from top institutions across India.",
							},
							{
								title: "Transparent Pricing",
								desc: "Ethical medical practice with no hidden costs across all our services and procedures.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="flex items-start gap-4 p-4 rounded-xl transition-all group card-lift animate-fade-up"
								style={{
									background: "#ffffff",
									border: "1px solid #e0ecf8",
									animationDelay: `${i * 0.15}s`,
								}}
							>
								<div
									className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors"
									style={{ background: "rgba(26,111,196,0.08)" }}
								>
									<CheckCircle2
										className="w-5 h-5"
										style={{ color: "#1a6fc4" }}
									/>
								</div>
								<div>
									<h4
										className="font-bold text-base mb-1"
										style={{ color: "#1a2340" }}
									>
										{item.title}
									</h4>
									<p
										className="text-sm leading-relaxed"
										style={{ color: "#6a7a99" }}
									>
										{item.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function FacilitiesShowcase() {
	return (
		<section className="py-24" style={{ background: "#f4f8ff" }}>
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<p
						className="text-[12px] uppercase tracking-widest font-semibold mb-3"
						style={{ color: "#e05c1a" }}
					>
						World Class
					</p>
					<h2
						className="text-3xl md:text-5xl font-bold mb-4"
						style={{ color: "#1a2340" }}
					>
						Our <span style={{ color: "#1a6fc4" }}>Facilities</span>
					</h2>
					<p className="text-lg max-w-2xl mx-auto" style={{ color: "#4a5a7a" }}>
						State-of-the-art infrastructure built to deliver the highest
						standards of healthcare.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[
						{
							title: "Modern ICU",
							sub: "Multi-disciplinary intensive care",
							color: "#ef4444",
							bg: "rgba(239,68,68,0.07)",
						},
						{
							title: "Operation Theatres",
							sub: "Ultra-clean modular OTs",
							color: "#1a6fc4",
							bg: "rgba(26,111,196,0.07)",
						},
						{
							title: "24/7 Diagnostics",
							sub: "MRI, CT, X-Ray, Pathology",
							color: "#8b5cf6",
							bg: "rgba(139,92,246,0.07)",
						},
						{
							title: "Modern Equipment",
							sub: "Best in class technology",
							color: "#10b981",
							bg: "rgba(16,185,129,0.07)",
						},
					].map((f, i) => (
						<div
							key={i}
							className="card-lift rounded-2xl p-6 text-center animate-fade-up"
							style={{
								background: "#ffffff",
								border: "1px solid #e0ecf8",
								animationDelay: `${i * 0.1}s`,
							}}
						>
							<div
								className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
								style={{ background: f.bg }}
							>
								<div
									className="w-5 h-5 rounded-full"
									style={{ background: f.color }}
								></div>
							</div>
							<h4 className="font-bold mb-1" style={{ color: "#1a2340" }}>
								{f.title}
							</h4>
							<p className="text-sm" style={{ color: "#6a7a99" }}>
								{f.sub}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Testimonials() {
	return (
		<section
			className="py-24 relative overflow-hidden"
			style={{ background: "#1a2340" }}
		>
			<div
				className="absolute inset-0 opacity-5"
				style={{
					backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
					backgroundSize: "30px 30px",
				}}
			></div>
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="text-center mb-16">
					<p
						className="text-[12px] uppercase tracking-widest font-semibold mb-3"
						style={{ color: "#e05c1a" }}
					>
						Voices of Trust
					</p>
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
						Patient <span style={{ color: "#7db8e8" }}>Stories</span>
					</h2>
					<p className="text-lg max-w-2xl mx-auto" style={{ color: "#8a9ab8" }}>
						Hear what our patients have to say about their experience at
						Swasthyam.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{ name: "Rahul K.", init: "R" },
						{ name: "Sanjeev N.", init: "S" },
						{ name: "Meera P.", init: "M" },
					].map((p, i) => (
						<div
							key={i}
							className="rounded-2xl p-8 card-lift animate-fade-up"
							style={{
								background: "rgba(255,255,255,0.06)",
								border: "1px solid rgba(255,255,255,0.1)",
								animationDelay: `${i * 0.15}s`,
							}}
						>
							<div className="flex gap-1 mb-6" style={{ color: "#f59e0b" }}>
								{[...Array(5)].map((_, j) => (
									<Star key={j} className="w-4 h-4 fill-current" />
								))}
							</div>
							<p
								className="italic mb-8 leading-relaxed text-sm"
								style={{ color: "rgba(255,255,255,0.7)" }}
							>
								"The care I received at Swasthyam was exceptional. The doctors
								were attentive, and the facilities are world-class. I highly
								recommend them to anyone in Muddinpalya."
							</p>
							<div className="flex items-center gap-4">
								<div
									className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
									style={{
										background: "rgba(26,111,196,0.3)",
										color: "#7db8e8",
									}}
								>
									{p.init}
								</div>
								<div>
									<h4 className="text-white font-bold text-[12px] uppercase tracking-widest">
										{p.name}
									</h4>
									<p
										className="text-[10px] uppercase tracking-widest mt-1"
										style={{ color: "rgba(255,255,255,0.4)" }}
									>
										Recovered Patient
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function CTASection() {
	return (
		<section className="py-24" style={{ background: "#f4f8ff" }}>
			<div className="max-w-7xl mx-auto px-6">
				<div
					className="rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
					style={{
						background: "linear-gradient(135deg, #1a6fc4, #0e4a8a)",
						boxShadow: "0 20px 60px rgba(26,111,196,0.3)",
					}}
				>
					<div
						className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
						style={{
							background:
								"radial-gradient(circle, #ffffff 0%, transparent 70%)",
							transform: "translate(30%, -30%)",
						}}
					></div>

					<div className="md:w-1/2 relative z-10">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
							Need Immediate Assistance?
						</h2>
						<p
							className="text-lg mb-8 leading-relaxed"
							style={{ color: "rgba(255,255,255,0.8)" }}
						>
							Our expert medical team is available 24/7. Request a callback or
							walk into our emergency department.
						</p>
						<div className="space-y-4">
							{[
								[PhoneCall, "Call for Appointments", "9901984418"],
								[MapPin, "Visit Us At", "Muddinpalya, Bangalore"],
							].map(([Icon, label, val], i) => (
								<div key={i} className="flex items-center gap-4 text-white">
									<div
										className="p-3 rounded-xl"
										style={{ background: "rgba(255,255,255,0.15)" }}
									>
										<Icon
											className="w-6 h-6 text-yellow-200"
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<p className="text-[10px] uppercase tracking-widest text-yellow-200">
											{label}
										</p>
										<p className="text-xl font-bold">{val}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<CTACallbackForm />
				</div>
			</div>
		</section>
	);
}

const DEPARTMENT_OPTIONS = [
	{ value: "", label: "Select Department" },
	{ value: "general_medicine", label: "General Medicine" },
	{ value: "cardiology", label: "Cardiology" },
	{ value: "orthopedics", label: "Orthopedics" },
	{ value: "neurology", label: "Neurology" },
	{ value: "pediatrics", label: "Pediatrics" },
	{ value: "gynecology", label: "Gynecology & Obstetrics" },
	{ value: "ent", label: "ENT" },
	{ value: "dermatology", label: "Dermatology" },
	{ value: "urology", label: "Urology" },
	{ value: "icu_trauma", label: "ICU & Trauma" },
	{ value: "physiotherapy", label: "Physiotherapy" },
	{ value: "other", label: "Other" },
];

const inputStyle = {
	borderColor: "#d5e3f5",
	color: "#1a2340",
	background: "#f4f8ff",
};

function HeroBookingForm() {
	const [form, setForm] = useState({ name: "", phone: "", email: "", department: "" });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.name || !form.phone) return alert("Please enter name and phone number.");
		setLoading(true);
		const { error } = await supabase.from("contactdetails").insert([{
			full_name: form.name,
			phone_number: form.phone,
			department: form.department || "General Inquiry",
			date: new Date().toISOString(),
			message: "Quick booking from homepage",
			status: "new",
		}]);
		setLoading(false);
		if (error) {
			console.error("Supabase insert error:", error);
			alert("Failed to submit: " + error.message);
		} else {
			setSuccess(true);
			setForm({ name: "", phone: "", email: "", department: "" });
			setTimeout(() => setSuccess(false), 4000);
		}
	};

	return (
		<div className="hidden lg:block lg:col-span-5">
			<form
				onSubmit={handleSubmit}
				className="rounded-2xl p-8 shadow-2xl animate-scale-in delay-300 card-lift"
				style={{ background: "#ffffff", border: "1px solid #d5e3f5", boxShadow: "0 20px 60px rgba(26,111,196,0.12)" }}
			>
				<h3 className="text-xl font-bold mb-1" style={{ color: "#1a2340" }}>Quick Booking</h3>
				<p className="text-sm mb-6" style={{ color: "#7a8aaa" }}>Fill in the details to schedule your visit.</p>

				{success && (
					<div className="mb-4 p-3 rounded-lg text-sm font-medium text-center" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}>
						✓ Booking submitted! We'll contact you shortly.
					</div>
				)}

				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "#1a6fc4" }}>Patient Name *</label>
							<input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter name" className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 transition-all" style={inputStyle} />
						</div>
						<div>
							<label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "#1a6fc4" }}>Phone Number *</label>
							<input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91" className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 transition-all" style={inputStyle} />
						</div>
					</div>
					<div>
						<label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "#1a6fc4" }}>Email</label>
						<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 transition-all" style={inputStyle} />
					</div>
					<div>
						<label className="block text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style={{ color: "#1a6fc4" }}>Department</label>
						<select value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 transition-all appearance-none" style={inputStyle}>
							{DEPARTMENT_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
						</select>
					</div>
					<button type="submit" disabled={loading} className="btn-primary w-full justify-center mt-2 text-sm py-4 disabled:opacity-60">
						{loading ? "Submitting..." : "Book Appointment"}
					</button>
				</div>

				<div className="mt-6 pt-6 flex items-center justify-between text-[11px]" style={{ borderTop: "1px solid #eaf1fb", color: "#7a8aaa" }}>
					<p>Need immediate help?</p>
					<a href="tel:9901984418" className="font-bold uppercase tracking-wider" style={{ color: "#e05c1a" }}>Call 9901984418</a>
				</div>
			</form>
		</div>
	);
}

function CTACallbackForm() {
	const [form, setForm] = useState({ name: "", phone: "", email: "", department: "" });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.name || !form.phone) return alert("Please enter name and phone number.");
		setLoading(true);
		const { error } = await supabase.from("contactdetails").insert([{
			full_name: form.name,
			phone_number: form.phone,
			department: form.department || "Callback Request",
			date: new Date().toISOString(),
			message: "Callback request from homepage",
			status: "new",
		}]);
		setLoading(false);
		if (error) {
			console.error("Supabase insert error:", error);
			alert("Failed to submit: " + error.message);
		} else {
			setSuccess(true);
			setForm({ name: "", phone: "", email: "", department: "" });
			setTimeout(() => setSuccess(false), 4000);
		}
	};

	return (
		<div className="md:w-5/12 w-full rounded-2xl p-8 relative z-10" style={{ background: "#ffffff", boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}>
			<h3 className="text-xl font-bold mb-6 text-center" style={{ color: "#1a2340" }}>Request Callback</h3>

			{success && (
				<div className="mb-4 p-3 rounded-lg text-sm font-medium text-center" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}>
					✓ Request received! We'll call you back soon.
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-4">
				<input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name *" className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" style={inputStyle} />
				<input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number *" className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" style={inputStyle} />
				<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email (optional)" className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" style={inputStyle} />
				<select value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all appearance-none" style={inputStyle}>
					{DEPARTMENT_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
				</select>
				<button type="submit" disabled={loading} className="btn-primary w-full justify-center mt-2 text-sm py-4 disabled:opacity-60">
					{loading ? "Submitting..." : "Request Callback"}
				</button>
			</form>
		</div>
	);
}
