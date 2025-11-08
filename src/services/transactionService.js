import { supabase } from "RSV/lib/supabase";
import { getUserId } from "./userService";
import { getAccountById, updateAccount } from "./accountService";

export async function insertTransaction(transaction) {
  const user_id = await getUserId();

  if (!transaction || typeof transaction !== "object") {
    throw new Error("Invalid transaction payload");
  }

  const { account_id, amount, type } = transaction;
  if (!account_id || !amount || !type) {
    throw new Error("Missing transaction fields");
  }

  const { data, error } = await supabase
    .from("transactions")
    .insert([{ user_id, ...transaction }])
    .select()
    .single();

  if (error) throw error;

  const account = await getAccountById(account_id);
  const oldBalance = account.balance || 0;

  const newBalance =
    type === "INCOME" ? oldBalance + amount : oldBalance - amount;

  await updateAccount(account_id, { balance: newBalance });

  return data;
}

export async function getTransactions() {
  const user_id = await getUserId();
  const { data, error } = await supabase
    .from("transactions")
    .select(
      `
        id, type, amount, description, transaction_date, created_at,
        account:accounts(name),
        category:categories(name)
      `,
    )
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error && error.code !== "PGRST116") {
    throw error;
  }

  return data;
}
