import { supabase } from "RSV/lib/supabase";
import { currentUser } from "@clerk/nextjs/server";
import { getTransactions } from "./transactionService";
import { createDefaultCategories } from "./categoryService";

export async function getCurrenUser() {
  const user = await currentUser();
  return user;
}

export async function getUserId() {
  const clerkUser = await getCurrenUser();
  const clerk_id = clerkUser.id;

  const { data: user, error } = await supabase
    .from("users")
    .select("id")
    .eq("clerk_id", clerk_id)
    .single();

  if (error) throw error;

  return user.id;
}

export async function createUser({ clerk_id, email, name }) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, name, clerk_id }])
    .single();

  if (error) throw error;

  await createAccount(data.id, { name: "Cash", balance: 0 });
  await createDefaultCategories(data.id);
}

export async function getOrCreateUser({ clerk_id, email, name }) {
  const existing = await getTransactions();

  if (existing) {
    return existing;
  }

  const { data: inserted, error: insertError } = await supabase
    .from("users")
    .insert([{ email, name, clerk_id }])
    .select(
      `id, name,
        accounts(id, name, balance),
        transactions(
          id, type, amount, description, transaction_date,
          account:accounts(name),
          category:categories(name)
        )`,
    )
    .single();

  if (insertError) throw insertError;

  return inserted;
}
