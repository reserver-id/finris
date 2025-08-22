"use client";

import { useState } from "react";
import { MOCK_ACCOUNTS, MOCK_TRANSACTIONS } from "RSV/components/constants";
import Dashboard from "RSV/components/Dashboard";

export default function Home() {
	const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
	const [accounts, setAccounts] = useState(MOCK_ACCOUNTS);

	return <Dashboard transactions={transactions} accounts={accounts} />;
}
