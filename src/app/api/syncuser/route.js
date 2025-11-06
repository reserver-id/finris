import { currentUser } from "@clerk/nextjs/server";
import { getOrCreateUser } from "RSV/services/userService";

export async function POST() {
	try {
		const clerkUser = await currentUser();

		if (!clerkUser || !clerkUser.emailAddresses[0]?.emailAddress) {
			return Response.json({ error: "No user info" }, { status: 401 });
		}

		const email = clerkUser.emailAddresses[0].emailAddress;
		const name = clerkUser.firstName
			? `${clerkUser.firstName} ${clerkUser.lastName}`
			: "RESERVER";
		const clerk_id = clerkUser.id;

		const user = await getOrCreateUser({ clerk_id, email, name });

		return Response.json(user);
	} catch (error) {
		console.error(error);
		return Response.json({ error: error.message }, { status: 500 });
	}
}
