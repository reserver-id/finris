import { currentUser } from "@clerk/nextjs/server";
import { supabase } from "RSV/lib/supabase";

export async function POST() {
	const user = await currentUser();

	if (!user || !user.emailAddresses[0]?.emailAddress) {
		return Response.json({ error: "No user info" }, { status: 401 });
	}

	const email = user.emailAddresses[0].emailAddress;
	const name = user.firstName || "";

	// cek di Supabase
	const { data: existing } = await supabase
		.from("users")
		.select("*")
		.eq("email", email)
		.single();

	if (existing) return Response.json(existing);

	// insert user baru
	const { data, error } = await supabase
		.from("users")
		.insert([{ email, name }])
		.select()
		.single();

	if (error) {
		console.error(error);
		return Response.json({ error: error.message }, { status: 500 });
	}

	return Response.json(data);
}
