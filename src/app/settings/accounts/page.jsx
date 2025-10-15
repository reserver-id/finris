"use client";

import { useState } from "react";
import Accounts from "RSV/components/Accounts";
import AddAccountSheet from "RSV/components/AddAccountSheet";
import { MOCK_ACCOUNTS, MOCK_TRANSACTIONS } from "RSV/components/constants";

export default function AccountsPage() {
	const [accounts, setAccounts] = useState(MOCK_ACCOUNTS);
	const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
	const [editingAccount, setEditingAccount] = useState(null);
	const [editingTransaction, setEditingTransaction] = useState(null);

	const [isAddTransactionSheetOpen, setIsAddTransactionSheetOpen] =
		useState(false);
	const [isAddAccountSheetOpen, setIsAddAccountSheetOpen] = useState(false);

	const handleOpenAddAccountSheet = () => {
		setEditingAccount(null);
		setIsAddAccountSheetOpen(true);
	};

	const handleOpenEditAccountSheet = (account) => {
		setEditingAccount(account);
		setIsAddAccountSheetOpen(true);
	};

	const handleCloseSheets = () => {
		setIsAddTransactionSheetOpen(false);
		setIsAddAccountSheetOpen(false);
		setEditingTransaction(null);
		setEditingAccount(null);
	};

	const handleSaveAccount = (accountData) => {
		if (editingAccount) {
			// Update existing
			const oldAccountName = editingAccount.name;
			const newAccountName = accountData.name;

			setAccounts((prev) =>
				prev.map((a) =>
					a.id === editingAccount.id ? { ...a, ...accountData } : a
				)
			);

			// Update transactions if account name changed
			if (oldAccountName !== newAccountName) {
				setTransactions((prev) =>
					prev.map((t) =>
						t.account === oldAccountName
							? { ...t, account: newAccountName }
							: t
					)
				);
			}
		} else {
			// Add new
			setAccounts((prev) => [...prev, accountData]);
		}
		handleCloseSheets();
	};

	const handleDeleteAccount = (accountId) => {
		const accountToDelete = accounts.find((a) => a.id === accountId);
		if (!accountToDelete) return;

		if (
			window.confirm(
				`Menghapus akun "${accountToDelete.name}" juga akan menghapus SEMUA transaksi yang terkait. Apakah Anda yakin?`
			)
		) {
			setAccounts((prev) => prev.filter((a) => a.id !== accountId));
			setTransactions((prev) =>
				prev.filter((t) => t.account !== accountToDelete.name)
			);
		}
	};

	return (
		<>
			<Accounts
				accounts={accounts}
				transactions={transactions}
				onAddAccountClick={handleOpenAddAccountSheet}
				onEdit={handleOpenEditAccountSheet}
				onDelete={handleDeleteAccount}
			/>

			{isAddAccountSheetOpen && (
				<AddAccountSheet
					key={editingAccount ? editingAccount.id : "new-account"}
					onClose={handleCloseSheets}
					onSaveAccount={handleSaveAccount}
					accountToEdit={editingAccount}
				/>
			)}
		</>
	);
}
