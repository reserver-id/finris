"use client";

import Dashboard from "RSV/components/Dashboard";
import useUserData from "RSV/hooks/useUserData";

export default function Home() {
	const { data, isLoading, error } = useUserData();

	return (
		<Dashboard
			transactions={data?.transactions ?? []}
			accounts={data?.accounts ?? []}
			isLoading={isLoading}
		/>
	);
}
