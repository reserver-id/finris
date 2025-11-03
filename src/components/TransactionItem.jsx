"use client";

import { useState } from "react";
import { CATEGORY_ICONS, MenuIcon } from "./constants";

export default function TransactionItem({ transaction, onEdit, onDelete }) {
	const {
		description: name,
		transaction_date: date,
		amount,
		type,
		account,
		category,
	} = transaction;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const formattedAmount = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(amount);

	const amountColor = type === "INCOME" ? "text-green-500" : "text-red-500";
	const amountSign = type === "INCOME" ? "+" : "-";

	const hasMenu = onEdit && onDelete;

	return (
		<div className="flex items-start p-3 hover:bg-slate-50 rounded-lg transition-colors duration-200">
			<div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mt-1">
				{CATEGORY_ICONS[category.name]}
			</div>
			<div className="ml-4 flex-grow">
				<p className="font-semibold text-slate-700">{name}</p>
				<p className="text-sm text-slate-500">
					{new Date(date).toLocaleDateString("id-ID", {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</p>
				{/* {tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-1 mt-1">
						{tags.map((tag) => (
							<span
								key={tag}
								className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full"
							>
								{tag}
							</span>
						))}
					</div>
				)} */}
			</div>
			<div className="text-right flex-shrink-0 ml-2">
				<p className={`font-semibold font-mono ${amountColor}`}>
					{amountSign}
					{formattedAmount}
				</p>
				<p className="text-xs text-slate-400 font-normal">
					{account.name}
				</p>
			</div>

			{hasMenu && (
				<div className="relative ml-2">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						onBlur={() =>
							setTimeout(() => setIsMenuOpen(false), 100)
						}
						className="p-1 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-200"
					>
						<MenuIcon className="w-5 h-5" />
					</button>
					{isMenuOpen && (
						<div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-slate-200 z-10 animate-fade-in">
							<a
								onClick={onEdit}
								className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 cursor-pointer"
							>
								Ubah
							</a>
							<a
								onClick={onDelete}
								className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
							>
								Hapus
							</a>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
