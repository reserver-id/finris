import { useState } from "react";

export default function AddAccountSheet({
	onClose,
	onSaveAccount,
	accountToEdit,
}) {
	const isEditing = accountToEdit !== null;

	const [name, setName] = useState(accountToEdit?.name || "");
	const [initialBalance, setInitialBalance] = useState(
		accountToEdit ? String(accountToEdit.initialBalance) : ""
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || initialBalance === "") {
			alert("Mohon isi nama akun dan saldo awal.");
			return;
		}
		onSaveAccount({
			id:
				isEditing && accountToEdit
					? accountToEdit.id
					: Date.now().toString(),
			name,
			initialBalance: parseFloat(initialBalance),
		});
	};

	const inputStyle =
		"w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-400";
	const labelStyle = "block text-sm font-medium text-slate-600 mb-1";

	return (
		<>
			<div
				className="fixed inset-0 bg-black/40 z-20"
				onClick={onClose}
			></div>
			<div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white p-4 rounded-t-2xl shadow-2xl z-30 animate-slide-up">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold text-slate-800">
						{isEditing ? "Ubah Akun" : "Tambah Akun Baru"}
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
						<label htmlFor="account-name" className={labelStyle}>
							Nama Akun
						</label>
						<input
							id="account-name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="cth., Bank BRI, Dompet Digital"
							className={inputStyle}
							required
						/>
					</div>
					<div>
						<label htmlFor="initial-balance" className={labelStyle}>
							Saldo Awal
						</label>
						<input
							id="initial-balance"
							type="number"
							value={initialBalance}
							onChange={(e) => setInitialBalance(e.target.value)}
							placeholder="0"
							className={`${inputStyle} font-mono`}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full p-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
					>
						{isEditing ? "Simpan Perubahan" : "Simpan Akun"}
					</button>
				</form>
			</div>
		</>
	);
}
