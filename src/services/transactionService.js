import { supabase } from "RSV/lib/supabase";
import { currentUser } from "@clerk/nextjs/server";

export async function insertTransaction(transaction) {
	const clerkUser = await currentUser();
	if (!clerkUser) throw new Error("User not authenticated");

	const { data: user, error: userError } = await supabase
		.from("users")
		.select("id")
		.eq("clerk_id", clerkUser.id)
		.single();

	if (userError) throw userError;
	if (!user) throw new Error("User not found");

	if (!transaction || typeof transaction !== "object") {
		throw new Error("Invalid transaction payload");
	}

	const { data, error } = await supabase
		.from("transactions")
		.insert([{ user_id: user.id, ...transaction }])
		.select()
		.single();

	if (error) throw error;

	return data;
}
