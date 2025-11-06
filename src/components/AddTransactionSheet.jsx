"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Input,
  Select,
} from "@headlessui/react";

export default function AddTransactionSheet({
  isOpen,
  onClose,
  onSave,
  tags = [],
  transactionToEdit = null,
}) {
  const isEditing = !!transactionToEdit;
  const [date, setDate] = useState(
    transactionToEdit?.date || new Date().toISOString().slice(0, 10),
  );
  const [type, setType] = useState(transactionToEdit?.type || "");
  const [account, setAccount] = useState(transactionToEdit?.account || "");
  const [description, setDescription] = useState(
    transactionToEdit?.description || "",
  );
  const [amount, setAmount] = useState(transactionToEdit?.amount || "");
  const [category, setCategory] = useState(transactionToEdit?.category || "");
  const [selectedTags, setSelectedTags] = useState(
    transactionToEdit?.tags || [],
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchAccounts() {
      const response = await fetch("/api/accounts");
      const data = await response.json();
      setAccounts(data);
    }
    fetchAccounts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !account || !amount) {
      alert("Tanggal, akun, dan nominal wajib diisi.");
      return;
    }
    onSave({
      account_id: Number(account),
      category_id: Number(category),
      transaction_date: date,
      amount: amount,
      type,
      description,
    });
    onClose();
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/40 transition-opacity" />

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md w-full">
        <DialogPanel
          className="bg-white rounded-t-2xl p-4 shadow-2xl animate-slide-up"
          transition
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800">
              {isEditing ? "Edit Transaksi" : "Tambah Transaksi"}
            </h2>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              {/* Kolom kiri - Select Type */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Tipe
                </label>
                <Select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-orange-400 focus:outline-0"
                >
                  <option value="INCOME">INCOME</option>
                  <option value="EXPENSE">EXPENSE</option>
                </Select>
              </div>

              {/* Kolom kanan - Tanggal */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Tanggal
                </label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-orange-400 focus:outline-0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Akun
              </label>
              <Select
                aria-label="Account bank"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-orange-400 focus:outline-0"
              >
                <option value="">Pilih akun...</option>
                {accounts.map((acc) => (
                  <option key={acc.id} value={acc.id}>
                    {acc.name}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Deskripsi
              </label>
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="cth., Makan siang"
                className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-orange-400 focus:outline-0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Nominal (Rp)
              </label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 font-mono focus:ring-2 focus:ring-orange-400 focus:outline-0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Kategori
              </label>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-slate-100 rounded-md border border-slate-200 focus:ring-2 focus:ring-orange-400 focus:outline-0"
              >
                <option value="">Pilih kategori...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full border ${
                      selectedTags.includes(tag)
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-slate-100 border-slate-300 text-slate-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              {isEditing ? "Simpan Perubahan" : "Tambah Transaksi"}
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
