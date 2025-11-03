export async function fetchUserData() {
	const res = await fetch("/api/syncuser", { method: "POST" });
	if (!res.ok) throw new Error("Failed to fetch user data");
	return res.json();
}
