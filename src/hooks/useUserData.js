"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

export default function useUserData() {
  const { isSignedIn } = useUser();

  return useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await fetch("/api/syncuser", { method: "POST" });
      if (!res.ok) throw new Error("Failed to fetch user data");
      return res.json();
    },
    enabled: isSignedIn,
  });
}
