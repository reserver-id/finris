import { useMemo, useState } from "react";
import Card from "RSV/components/Card";
import { FilterIcon } from "RSV/components/constants";
import Header from "RSV/components/Header";
import TransactionItem from "RSV/components/TransactionItem";

export default function Transaction({ transactions }) {
	const [showFilters, setShowFilters] = useState(false);

	const filteredTransactions = useMemo(() => {
		let results = [...transactions].sort(
			(a, b) =>
				new Date(b.transaction_date).getTime() -
				new Date(a.transaction_date).getTime()
		);

		return results;
	}, []);

	return (
		<div>
			<Header title="Riwayat Transaksi">
				<button
					onClick={() => setShowFilters(!showFilters)}
					className={`p-2 rounded-full transition-colors duration-200 ${
						showFilters
							? "bg-orange-100 text-orange-500"
							: "text-slate-500 hover:bg-slate-200"
					}`}
					aria-label="Tampilkan filter"
				>
					<FilterIcon className="w-5 h-5" />
				</button>
			</Header>

			<div className="p-4 space-y-4">
				<Card className="p-2">
					<div className="space-y-1">
						{filteredTransactions.length > 0 ? (
							filteredTransactions.map((transaction) => (
								<TransactionItem
									key={transaction.id}
									transaction={transaction}
									onEdit={() => onEdit(transaction)}
									onDelete={() => onDelete(transaction.id)}
								/>
							))
						) : (
							<p className="text-center text-slate-500 p-8">
								Tidak ada transaksi yang cocok dengan filter
								Anda.
							</p>
						)}
					</div>
				</Card>
			</div>
		</div>
	);
}
