import { supabase } from "RSV/lib/supabase";
import { getUserId } from "./userService";

export async function getCategories() {
  const user_id = await getUserId();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
}

export async function createCategory(userId, category) {
  const user_id = userId || (await getUserId());
  const { data, error } = await supabase
    .from("categories")
    .insert([{ user_id, category }])
    .single();

  if (error) throw error;
  return data;
}

export async function createDefaultCategories(userId) {
  const user_id = userId || (await getUserId());

  const defaultCategories = [
    // Income categories
    { user_id, name: "Gaji", type: "INCOME", is_default: true },
    { user_id, name: "Bonus", type: "INCOME", is_default: true },
    { user_id, name: "Investasi", type: "INCOME", is_default: true },
    { user_id, name: "Lain-lain", type: "INCOME", is_default: true },

    // Expense categories
    { user_id, name: "Makanan & Minuman", type: "EXPENSE", is_default: true },
    { user_id, name: "Transport", type: "EXPENSE", is_default: true },
    { user_id, name: "Belanja/Shopping", type: "EXPENSE", is_default: true },
    { user_id, name: "Tagihan", type: "EXPENSE", is_default: true },
    { user_id, name: "Kesehatan", type: "EXPENSE", is_default: true },
    { user_id, name: "Hiburan", type: "EXPENSE", is_default: true },
    { user_id, name: "Pendidikan", type: "EXPENSE", is_default: true },
    { user_id, name: "Lain-lain", type: "EXPENSE", is_default: true },
  ];

  const { data, error } = await supabase
    .from("categories")
    .insert(defaultCategories)
    .select();

  if (error) throw error;
  return data;
}
