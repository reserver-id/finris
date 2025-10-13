import { useMemo } from "react";
import Card from "./Card";
import { CATEGORY_ICONS } from "./constants";
import Header from "./Header";

export default function Budget({ budgets, transactions }) {
	const budgetStatus = useMemo(() => {
		return budgets.map((budget) => {
			const spent = transactions
				.filter(
					(t) =>
						t.type === "EXPENSE" && t.category === budget.category
				)
				.reduce((acc, t) => acc + t.amount, 0);

			const remaining = budget.limit - spent;
			const percentage = (spent / budget.limit) * 100;

			return {
				...budget,
				spent,
				remaining,
				percentage,
			};
		});
	}, [transactions, budgets]);

	const formatCurrency = (value) =>
		new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value);

	const getProgressBarColor = (percentage) => {
		if (percentage > 90) return "bg-red-500";
		if (percentage > 70) return "bg-yellow-500";
		return "bg-green-500";
	};

	return (
		<div>
			<Header title="Anggaran Belanja" />
			<div className="p-4 space-y-4">
				{budgetStatus.map((status) => (
					<Card key={status.category} className="space-y-3">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
									{CATEGORY_ICONS[status.category]}
								</div>
								<span className="font-semibold text-slate-700">
									{status.category}
								</span>
							</div>
							<span className="font-medium font-mono text-slate-500 text-sm">
								{formatCurrency(status.spent)} /{" "}
								{formatCurrency(status.limit)}
							</span>
						</div>
						<div className="w-full bg-slate-200 rounded-full h-2.5">
							<div
								className={`h-2.5 rounded-full transition-all duration-500 ${getProgressBarColor(
									status.percentage
								)}`}
								style={{
									width: `${Math.min(
										status.percentage,
										100
									)}%`,
								}}
							></div>
						</div>
						<div className="text-right">
							<p
								className={`text-sm font-medium font-mono ${
									status.remaining >= 0
										? "text-slate-500"
										: "text-red-500"
								}`}
							>
								Sisa: {formatCurrency(status.remaining)}
							</p>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
