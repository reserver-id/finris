"use client";

import Dashboard from "RSV/components/Dashboard";
import useUserData from "RSV/hoc/useUserData";

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
