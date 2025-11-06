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
