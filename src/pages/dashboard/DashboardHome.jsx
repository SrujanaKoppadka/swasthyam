import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { Users, TrendingUp, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardHome() {
	const [doctorCount, setDoctorCount] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		supabase
			.from("doctors")
			.select("id", { count: "exact", head: true })
			.then(({ count }) => {
				setDoctorCount(count || 0);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			{/* Page title */}
			<div className="mb-8">
				<h1 className="text-3xl font-bold tracking-tight" style={{ color: "#1a2340" }}>
					Dashboard
				</h1>
				<p className="text-sm mt-1" style={{ color: "#7a8aaa" }}>
					Welcome to the Swasthyam Hospital admin panel.
				</p>
			</div>

			{/* Stats grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
				<div
					className="rounded-2xl p-6 relative overflow-hidden group"
					style={{
						background: "#ffffff",
						border: "1px solid #e0ecf8",
						boxShadow: "0 2px 12px rgba(26,111,196,0.06)",
					}}
				>
					<div
						className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
						style={{ background: "radial-gradient(circle, #1a6fc4, transparent)" }}
					></div>
					<div
						className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
						style={{ background: "rgba(26,111,196,0.08)" }}
					>
						<Users className="w-6 h-6" style={{ color: "#1a6fc4" }} />
					</div>
					<p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: "#7a8aaa" }}>
						Total Doctors
					</p>
					<p className="text-3xl font-bold" style={{ color: "#1a2340" }}>
						{loading ? "—" : doctorCount}
					</p>
				</div>

				<div
					className="rounded-2xl p-6 relative overflow-hidden"
					style={{
						background: "#ffffff",
						border: "1px solid #e0ecf8",
						boxShadow: "0 2px 12px rgba(26,111,196,0.06)",
					}}
				>
					<div
						className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
						style={{ background: "rgba(16,185,129,0.08)" }}
					>
						<Activity className="w-6 h-6" style={{ color: "#10b981" }} />
					</div>
					<p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: "#7a8aaa" }}>
						Status
					</p>
					<p className="text-lg font-bold" style={{ color: "#10b981" }}>
						System Active
					</p>
				</div>

				<div
					className="rounded-2xl p-6 relative overflow-hidden"
					style={{
						background: "#ffffff",
						border: "1px solid #e0ecf8",
						boxShadow: "0 2px 12px rgba(26,111,196,0.06)",
					}}
				>
					<div
						className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
						style={{ background: "rgba(224,92,26,0.08)" }}
					>
						<TrendingUp className="w-6 h-6" style={{ color: "#e05c1a" }} />
					</div>
					<p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: "#7a8aaa" }}>
						Website
					</p>
					<p className="text-lg font-bold" style={{ color: "#e05c1a" }}>
						Live & Running
					</p>
				</div>
			</div>

			{/* Quick actions */}
			<div
				className="rounded-2xl p-8"
				style={{
					background: "#ffffff",
					border: "1px solid #e0ecf8",
					boxShadow: "0 2px 12px rgba(26,111,196,0.06)",
				}}
			>
				<h2 className="text-xl font-bold mb-6" style={{ color: "#1a2340" }}>
					Quick Actions
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Link
						to="/dashboard/doctors"
						className="flex items-center gap-4 p-5 rounded-xl transition-all hover:-translate-y-0.5 group"
						style={{
							background: "rgba(26,111,196,0.04)",
							border: "1px solid rgba(26,111,196,0.12)",
						}}
					>
						<div
							className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
							style={{ background: "rgba(26,111,196,0.1)" }}
						>
							<Users className="w-6 h-6" style={{ color: "#1a6fc4" }} />
						</div>
						<div>
							<h3 className="font-bold text-sm" style={{ color: "#1a2340" }}>
								Manage Doctors
							</h3>
							<p className="text-xs mt-1" style={{ color: "#7a8aaa" }}>
								Add, edit, or remove doctor profiles and photos
							</p>
						</div>
					</Link>

					<Link
						to="/"
						className="flex items-center gap-4 p-5 rounded-xl transition-all hover:-translate-y-0.5 group"
						style={{
							background: "rgba(224,92,26,0.04)",
							border: "1px solid rgba(224,92,26,0.12)",
						}}
					>
						<div
							className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
							style={{ background: "rgba(224,92,26,0.1)" }}
						>
							<TrendingUp className="w-6 h-6" style={{ color: "#e05c1a" }} />
						</div>
						<div>
							<h3 className="font-bold text-sm" style={{ color: "#1a2340" }}>
								View Live Website
							</h3>
							<p className="text-xs mt-1" style={{ color: "#7a8aaa" }}>
								Preview the public-facing hospital website
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
