import { useMemo, useState } from "react";
import Card from "./Card";
import { MenuIcon, WalletIcon } from "./constants";
import Header from "./Header";

const AccountItem = ({
  account,
  onEdit = () => {},
  onDelete = () => {},
  formatCurrency = () => {},
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <li className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="text-slate-500 mr-4">
          <WalletIcon />
        </div>
        <div>
          <span className="text-slate-700 font-semibold">{account.name}</span>
          <p className="text-xs text-slate-400 font-mono">
            Saldo Awal: {formatCurrency(account.initialBalance)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-mono font-bold text-slate-800">
          {formatCurrency(account.currentBalance)}
        </span>
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onBlur={() => setTimeout(() => setIsMenuOpen(false), 100)}
            className="p-1 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-200"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-slate-200 z-10 animate-fade-in">
              <a
                onClick={onEdit}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Ubah
              </a>
              <a
                onClick={onDelete}
                className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
              >
                Hapus
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default function Accounts({
  accounts,
  transactions,
  onAddAccountClick,
  onEdit,
  onDelete,
}) {
  const accountsWithBalance = useMemo(() => {
    return accounts
      .map((account) => {
        const accountTransactions = transactions.filter(
          (t) => t.account === account.name,
        );
        const balance = accountTransactions.reduce((acc, t) => {
          return t.type === "INCOME" ? acc + t.amount : acc - t.amount;
        }, account.initialBalance);
        return { ...account, currentBalance: balance };
      })
      .sort((a, b) => b.currentBalance - a.currentBalance);
  }, [accounts, transactions]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <div>
      <Header title="Akun Keuangan" />
      <div className="p-4 space-y-4">
        <Card className="p-0">
          <ul className="divide-y divide-slate-200">
            {accountsWithBalance.map((account) => (
              <AccountItem
                key={account.id}
                account={account}
                onEdit={() => onEdit(account)}
                onDelete={() => onDelete(account.id)}
                formatCurrency={formatCurrency}
              />
            ))}
          </ul>
        </Card>

        <button
          onClick={onAddAccountClick}
          className="w-full p-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Tambah Akun Baru
        </button>
      </div>
    </div>
  );
}
