import Link from "next/link";
import Card from "./Card";
import Header from "./Header";
import { WalletIcon } from "./constants";
import { SignOutButton } from "@clerk/nextjs";

export default function Settings() {
	const settingsOptions = [
		{
			name: "Profil",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
					<circle cx="12" cy="7" r="4"></circle>
				</svg>
			),
			path: "/settings/profile",
		},
		{
			name: "Akun Keuangan",
			icon: <WalletIcon />,
			path: "/settings/accounts",
		},
		{
			name: "Notifikasi",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
					<path d="M13.73 21a2 2 0 0 1-3.46 0" />
				</svg>
			),
			path: "/settings/notifications",
		},
		{
			name: "Tema",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			),
			path: "/settings/theme",
		},
		{
			name: "Bantuan & Dukungan",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
					<line x1="12" y1="17" x2="12.01" y2="17"></line>
				</svg>
			),
			path: "/settings/help",
		},
	];

	return (
		<div>
			<Header title="Pengaturan" />
			<div className="p-4">
				<Card className="p-2">
					<ul className="divide-y divide-slate-200">
						{settingsOptions.map((option) => (
							<li key={option.name}>
								<Link
									href={option.path}
									className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors duration-200"
								>
									<div className="flex items-center">
										<div className="text-slate-500 mr-4">
											{option.icon}
										</div>
										<span className="text-slate-700">
											{option.name}
										</span>
									</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-slate-400"
									>
										<polyline points="9 18 15 12 9 6"></polyline>
									</svg>
								</Link>
							</li>
						))}

						<SignOutButton>
							<li>
								<div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors duration-200">
									<div className="flex items-center">
										<div className="text-slate-500 mr-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
												<polyline points="16 17 21 12 16 7"></polyline>
												<line
													x1="21"
													y1="12"
													x2="9"
													y2="12"
												></line>
											</svg>
										</div>
										<span className="text-slate-700">
											Keluar
										</span>
									</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-slate-400"
									>
										<polyline points="9 18 15 12 9 6"></polyline>
									</svg>
								</div>
							</li>
						</SignOutButton>
					</ul>
				</Card>
			</div>
		</div>
	);
}
