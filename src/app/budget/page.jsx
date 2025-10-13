"use client";

import { useState } from "react";
import Budget from "RSV/components/Budget";
import { MOCK_BUDGETS, MOCK_TRANSACTIONS } from "RSV/components/constants";

export default function BudgetPage() {
	const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
	const [budgets, setBudgets] = useState(MOCK_BUDGETS);
	return <Budget budgets={budgets} transactions={transactions} />;
}
