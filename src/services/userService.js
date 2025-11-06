import { supabase } from "RSV/lib/supabase";

export async function getOrCreateUser({ clerk_id, email, name }) {
	const { data: existing, error: existingError } = await supabase
		.from("users")
		.select(
			`id, name,
        accounts(id, name, balance),
        transactions(
          id, type, amount, description, transaction_date,
          account:accounts(name),
          category:categories(name)
        )`
		)
		.eq("clerk_id", clerk_id)
		.single();

	if (existingError && existingError.code !== "PGRST116") {
		throw existingError;
	}

	if (existing) return existing;

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
        )`
		)
		.single();

	if (insertError) throw insertError;

	return inserted;
}
