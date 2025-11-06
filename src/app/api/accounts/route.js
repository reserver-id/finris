import { getAccounts } from "RSV/services/accountService";

export async function GET() {
  try {
    const accounts = await getAccounts();
    return Response.json(accounts);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
