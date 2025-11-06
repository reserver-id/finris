"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "RSV/lib/queries/userData";

export default function useUserData() {
	const { isSignedIn } = useUser();

	return useQuery({
		queryKey: ["userData"],
		queryFn: fetchUserData,
		enabled: isSignedIn,
	});
}
