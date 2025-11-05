import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";

export function useAddTransaction() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (transaction) => {
			const { data, error } = await supabase
				.from("transactions")
				.insert([transaction])
				.select()
				.single();

			if (error) throw error;
			return data;
		},
		onSuccess: () => {
			toast.success("Transaksi berhasil ditambahkan");
			queryClient.invalidateQueries({ queryKey: ["userData"] });
		},
		onError: (error) => {
			console.error(error);
			toast.error("Gagal menambah transaksi");
		},
	});
}
