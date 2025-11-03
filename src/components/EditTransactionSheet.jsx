"use client";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function EditTransactionSheet({
	isOpen,
	onClose,
	onSave,
	accounts = [],
	categories = [],
	tags = [],
	transactionToEdit = null,
}) {
	const isEditing = !!transactionToEdit;
	const [date, setDate] = useState(
		transactionToEdit?.date || new Date().toISOString().slice(0, 10)
	);
	const [account, setAccount] = useState(transactionToEdit?.account || "");
	const [description, setDescription] = useState(
		transactionToEdit?.description || ""
	);
	const [amount, setAmount] = useState(transactionToEdit?.amount || "");
	const [category, setCategory] = useState(transactionToEdit?.category || "");
	const [selectedTags, setSelectedTags] = useState(
		transactionToEdit?.tags || []
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!date || !account || !amount) {
			alert("Tanggal, akun, dan nominal wajib diisi.");
			return;
		}
		onSave({
			id: isEditing ? transactionToEdit.id : Date.now().toString(),
			date,
			account,
			description,
			amount: parseFloat(amount),
			category,
			tags: selectedTags,
		});
		onClose();
	};

	const toggleTag = (tag) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	return (
		<Dialog open={isOpen} onClose={onClose} className="relative z-50">
			<DialogBackdrop className="fixed inset-0 bg-black/40 transition-opacity" />

			<div className="fixed inset-x-0 bottom-0 mx-auto max-w-md w-full">
				<DialogPanel
					className="bg-white rounded-t-2xl p-4 shadow-2xl animate-slide-up"
					transition
				>
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-semibold text-slate-800">
							{isEditing ? "Edit Transaksi" : "Tambah Transaksi"}
						</h2>
						<button
							onClick={onClose}
							className="text-slate-500 hover:text-slate-800"
						>
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
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-slate-600 mb-1">
								Tanggal
							</label>
							<input
								type="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-orange-400"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-slate-600 mb-1">
								Akun
							</label>
							<select
								value={account}
								onChange={(e) => setAccount(e.target.value)}
								className="w-full p-3 bg-slate-100 rounded-md border border-slate-200"
							>
								<option value="">Pilih akun...</option>
								{accounts.map((acc) => (
									<option key={acc.id} value={acc.id}>
										{acc.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-slate-600 mb-1">
								Deskripsi
							</label>
							<input
								type="text"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="cth., Makan siang"
								className="w-full p-3 bg-slate-100 rounded-md border border-slate-200"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-slate-600 mb-1">
								Nominal (Rp)
							</label>
							<input
								type="number"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
								placeholder="0"
								className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 font-mono"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-slate-600 mb-1">
								Kategori
							</label>
							<select
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								className="w-full p-3 bg-slate-100 rounded-md border border-slate-200"
							>
								<option value="">Pilih kategori...</option>
								{categories.map((cat) => (
									<option key={cat} value={cat}>
										{cat}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-slate-600 mb-1">
								Tags
							</label>
							<div className="flex flex-wrap gap-2">
								{tags.map((tag) => (
									<button
										type="button"
										key={tag}
										onClick={() => toggleTag(tag)}
										className={`px-3 py-1 rounded-full border ${
											selectedTags.includes(tag)
												? "bg-orange-500 text-white border-orange-500"
												: "bg-slate-100 border-slate-300 text-slate-700"
										}`}
									>
										{tag}
									</button>
								))}
							</div>
						</div>

						<button
							type="submit"
							className="w-full p-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
						>
							{isEditing
								? "Simpan Perubahan"
								: "Tambah Transaksi"}
						</button>
					</form>
				</DialogPanel>
			</div>
		</Dialog>
	);
}
