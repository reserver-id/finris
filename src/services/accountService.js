import { supabase } from "RSV/lib/supabase";
import { getUserId } from "./userService";

export async function getAccounts() {
  const user_id = await getUserId();
  const { data, error } = await supabase
    .from("accounts")
    .select("*")
    .eq("user_id", user_id);

  if (error) throw error;

  return data;
}

export async function getAccountById(account_id) {
  const user_id = await getUserId();
  const { data, error } = await supabase
    .from("accounts")
    .select("*")
    .eq("user_id", user_id)
    .eq("id", account_id)
    .single();

  if (error) throw error;

  return data;
}

export async function updateAccount(account_id, updates) {
  const user_id = await getUserId();
  const { data, error } = await supabase
    .from("accounts")
    .update(updates)
    .eq("user_id", user_id)
    .eq("id", account_id)
    .single();

  if (error) throw error;

  return data;
}

export async function createAccount(userId, account) {
  const user_id = !userId ? await getUserId() : userId;
  const { data, error } = await supabase
    .from("accounts")
    .insert({ ...account, user_id })
    .single();

  if (error) throw error;

  return data;
}

export async function deleteAccount(account_id) {
  const user_id = await getUserId();
  const { data, error } = await supabase
    .from("accounts")
    .delete()
    .eq("user_id", user_id)
    .eq("id", account_id)
    .single();

  if (error) throw error;

  return data;
}
