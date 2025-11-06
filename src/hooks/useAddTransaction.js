import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (transaction) => {
      const req = await fetch("/api/transaction", {
        method: "POST",
        body: JSON.stringify(transaction),
      });

      if (!req.ok) {
        throw new Error(`Response status: ${req.status}`);
      }

      const resp = await req.json();

      return resp;
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
