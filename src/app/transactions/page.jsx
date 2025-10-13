"use client";

import { useState } from "react";
import { MOCK_TRANSACTIONS } from "RSV/components/constants";
import Transaction from "RSV/components/Transaction";

export default function Transactions() {
	const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
	return <Transaction transactions={transactions} />;
}
