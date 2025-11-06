"use client";

import Transaction from "RSV/components/Transaction";
import useUserData from "RSV/hooks/useUserData";

export default function Transactions() {
	const { data, isLoading, error } = useUserData();

	return <Transaction transactions={data?.transactions ?? []} />;
}
