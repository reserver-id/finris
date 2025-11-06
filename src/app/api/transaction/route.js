import { insertTransaction } from "RSV/services/transactionService";

export async function POST(request) {
	try {
		const res = await request.json();
		const transactionData = await insertTransaction(res);

		return Response.json(transactionData);
	} catch (error) {
		return Response.json({ error: error.message }, { status: 500 });
	}
}
