import { currentUser } from "@clerk/nextjs/server";
import { supabase } from "RSV/lib/supabase";

export async function POST() {
	const user = await currentUser();

	if (!user || !user.emailAddresses[0]?.emailAddress) {
		return Response.json({ error: "No user info" }, { status: 401 });
	}

	const email = user.emailAddresses[0].emailAddress;
	const name = user.firstName
		? `${user.firstName} ${user.lastName}`
		: "RESERVER";
	const clerk_id = user.id;

	// cek di Supabase
	const { data: existing } = await supabase
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

	if (existing) return Response.json(existing);

	// insert user baru
	const { data: inserted, error } = await supabase
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

	if (error) {
		console.error(error);
		return Response.json({ error: error.message }, { status: 500 });
	}

	return Response.json(inserted);
}
