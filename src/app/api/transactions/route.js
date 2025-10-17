import { currentUser } from "@clerk/nextjs/dist/types/server";
import { supabase } from "RSV/lib/supabase";

export async function GET(req) {
	const user = await currentUser();
	const { searchParams } = new URL(req.url);
	const user_id = searchParams.get("user_id");

	if (!user || !user.emailAddresses[0]?.emailAddress) {
		return Response.json({ error: "No user info" }, { status: 401 });
	}

	if (!user_id) return Response.json([], { status: 400 });

	const { data, error } = await supabase
		.from("transactions")
		.select("*")
		.eq("user_id", user_id);

	if (error) return Response.json({ error: error.message }, { status: 500 });

	return Response.json(data);
}
