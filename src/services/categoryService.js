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
