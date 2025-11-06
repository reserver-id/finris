import { currentUser } from "@clerk/nextjs/server";
import { getOrCreateUser } from "RSV/services/userService";

export async function POST() {
	try {
		const clerkUser = await currentUser();

		if (!user || !user.emailAddresses[0]?.emailAddress) {
			return Response.json({ error: "No user info" }, { status: 401 });
		}

		const email = user.emailAddresses[0].emailAddress;
		const name = user.firstName
			? `${user.firstName} ${user.lastName}`
			: "RESERVER";
		const clerk_id = clerkUser.id;

		const user = await getOrCreateUser({ clerk_id, email, name });

		return Response.json(inserted);
	} catch (error) {
		console.error(error);
		return Response.json({ error: error.message }, { status: 500 });
	}
}
