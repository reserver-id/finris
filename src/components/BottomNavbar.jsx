"use client";

import Link from "next/link";
import { BudgetIcon, HomeIcon, ListIcon, SettingsIcon } from "./constants";
import AddTransactionSheet from "./AddTransactionSheet";
import { useState } from "react";

const NavItem = ({ path, label, icon: Icon }) => {
	const activeLink = "text-orange-500";
	const inactiveLink = "text-slate-500 hover:text-orange-500";

	return (
		<Link href={`${path}`}>
			<span
				className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 w-full`}
			>
				<Icon className="w-6 h-6" />
				<span className="text-xs font-medium">{label}</span>
			</span>
		</Link>
	);
};

export default function BottomNavbar({ onAddClick }) {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	return (
		<>
			<nav className="fixed bottom-0 left-0 right-0 h-20 max-w-md mx-auto z-20">
				<div className="relative h-full bg-white/80 backdrop-blur-lg border-t border-slate-200">
					<div className="absolute top-[-1.5rem] left-1/2 -translate-x-1/2"></div>

					<div className="flex justify-around items-center h-full px-2">
						<NavItem path="/" label="Dasbor" icon={HomeIcon} />
						<NavItem
							path="/transactions"
							label="Riwayat"
							icon={ListIcon}
						/>
						<div className="w-16">
							<button
								onClick={() => setIsSheetOpen(true)}
								className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
								aria-label="Tambah transaksi baru"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="12" y1="5" x2="12" y2="19"></line>
									<line x1="5" y1="12" x2="19" y2="12"></line>
								</svg>
							</button>
						</div>
						<NavItem
							path="/budget"
							label="Anggaran"
							icon={BudgetIcon}
						/>
						<NavItem
							path="/settings"
							label="Pengaturan"
							icon={SettingsIcon}
						/>
					</div>
				</div>
			</nav>

			<AddTransactionSheet
				isOpen={isSheetOpen}
				onClose={() => setIsSheetOpen(false)}
				onSave={(tx) => console.log("saved:", tx)}
				accounts={[
					{ id: "1", name: "Cash" },
					{ id: "2", name: "Bank BRI" },
				]}
				categories={["Makanan", "Transportasi", "Belanja"]}
				tags={["harian", "kerja", "pribadi"]}
			/>
		</>
	);
}
