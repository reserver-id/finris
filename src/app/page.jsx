"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { MOCK_ACCOUNTS, MOCK_TRANSACTIONS } from "RSV/components/constants";
import Dashboard from "RSV/components/Dashboard";

export default function Home() {
  const { user, isSignedIn } = useUser();
  const [profile, setProfile] = useState(null);

  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [accounts, setAccounts] = useState(MOCK_ACCOUNTS);

  useEffect(() => {
    if (isSignedIn) {
      fetch("/api/sync-user", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          console.log(data);
        });

      console.log(user);
    }
  }, [isSignedIn]);

  return (
    <Dashboard
      transactions={transactions}
      accounts={accounts}
      profile={profile}
    />
  );
}
