import Image from "next/image";
import { useMemo } from "react";
import Card from "RSV/components/Card";
import Header from "RSV/components/Header";
import TransactionItem from "./TransactionItem";
import { formatCurrency } from "./constants";

export default function Dashboard({ transactions, accounts }) {
	const { totalBalance, totalIncome, totalExpenses } = useMemo(() => {
		let income = 0;
		let expenses = 0;

		transactions.forEach((t) => {
			if (t.type === "INCOME") {
				income += t.amount;
			} else {
				expenses += t.amount;
			}
		});

		const initialTotal = accounts.reduce(
			(sum, acc) => sum + acc.initialBalance,
			0
		);
		const balance = initialTotal + income - expenses;

		return {
			totalBalance: balance,
			totalIncome: income,
			totalExpenses: expenses,
		};
	}, [transactions, accounts]);

	const accountsWithBalance = useMemo(() => {
		return accounts
			.map((account) => {
				const balance =
					account.initialBalance +
					transactions
						.filter((t) => t.account === account.name)
						.reduce((acc, t) => {
							return t.type === "INCOME"
								? acc + t.amount
								: acc - t.amount;
						}, 0);
				return { ...account, currentBalance: balance };
			})
			.sort((a, b) => b.currentBalance - a.currentBalance);
	}, [accounts, transactions]);

	const recentTransactions = [...transactions]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 5);

	return (
		<div className="animate-fade-in">
			<Header title={`finRIS`} />
			<div className="p-4 space-y-6">
				<Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
					<div className="flex justify-between items-center">
						<div>
							<p className="text-sm font-medium text-orange-200">
								Total Saldo
							</p>
							<p className="text-3xl font-bold tracking-tight font-mono">
								{formatCurrency(totalBalance)}
							</p>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-orange-300/70"
						>
							<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
							<path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
							<path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
						</svg>
					</div>
				</Card>

				<div className="grid grid-cols-2 gap-4">
					<Card>
						<p className="text-sm text-slate-500">Pemasukan</p>
						<p className="text-xl font-semibold text-green-500 font-mono">
							{formatCurrency(totalIncome)}
						</p>
					</Card>
					<Card>
						<p className="text-sm text-slate-500">Pengeluaran</p>
						<p className="text-xl font-semibold text-red-500 font-mono">
							{formatCurrency(totalExpenses)}
						</p>
					</Card>
				</div>

				<Card>
					<div className="flex justify-between items-center mb-3">
						<h2 className="text-lg font-semibold text-slate-700">
							Ringkasan Akun
						</h2>
						<span className="text-sm font-medium text-orange-500 hover:text-orange-600">
							Kelola
						</span>
					</div>
					<div className="space-y-3">
						{accountsWithBalance.map((account) => (
							<div
								key={account.id}
								className="flex justify-between items-center"
							>
								<p className="text-slate-600">{account.name}</p>
								<p className="font-mono font-semibold text-slate-800">
									{formatCurrency(account.currentBalance)}
								</p>
							</div>
						))}
					</div>
				</Card>

				<div>
					<div className="flex justify-between items-center mb-2 px-1">
						<h2 className="text-lg font-semibold text-slate-700">
							Transaksi Terkini
						</h2>
						<span className="text-sm font-medium text-orange-500 hover:text-orange-600">
							Lihat Semua
						</span>
					</div>
					<Card className="p-2">
						<div className="space-y-1">
							{recentTransactions.map((transaction) => (
								<TransactionItem
									key={transaction.id}
									transaction={transaction}
								/>
							))}
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
