import React from "react";

export const HomeIcon = (props) => (
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
		{...props}
	>
		<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
		<polyline points="9 22 9 12 15 12 15 22"></polyline>
	</svg>
);

export const ListIcon = (props) => (
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
		{...props}
	>
		<line x1="8" x2="21" y1="6" y2="6"></line>
		<line x1="8" x2="21" y1="12" y2="12"></line>
		<line x1="8" x2="21" y1="18" y2="18"></line>
		<line x1="3" x2="3.01" y1="6" y2="6"></line>
		<line x1="3" x2="3.01" y1="12" y2="12"></line>
		<line x1="3" x2="3.01" y1="18" y2="18"></line>
	</svg>
);

export const ChartIcon = (props) => (
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
		{...props}
	>
		<path d="M3 3v18h18"></path>
		<path d="M18.7 8a6 6 0 0 0-6 6"></path>
		<path d="M13 13a2 2 0 0 0 2 2"></path>
	</svg>
);

export const SettingsIcon = (props) => (
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
		{...props}
	>
		<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
		<circle cx="12" cy="12" r="3"></circle>
	</svg>
);

export const BudgetIcon = (props) => (
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
		{...props}
	>
		<path d="M2 9.5a4.5 4.5 0 0 1 4.5-4.5h11a4.5 4.5 0 0 1 4.5 4.5v10a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"></path>
		<path d="M16 9.5a2.5 2.5 0 0 0-5 0"></path>
		<path d="M12 15v-1.5"></path>
	</svg>
);

export const WalletIcon = (props) => (
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
		{...props}
	>
		<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
		<path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
		<path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
	</svg>
);

export const FilterIcon = (props) => (
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
		{...props}
	>
		<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
	</svg>
);

export const MenuIcon = (props) => (
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
		{...props}
	>
		<circle cx="12" cy="12" r="1"></circle>
		<circle cx="12" cy="5" r="1"></circle>
		<circle cx="12" cy="19" r="1"></circle>
	</svg>
);

export const MOCK_ACCOUNTS = [
	{ id: "acc1", name: "Bank BCA", balance: 15000000 },
	{ id: "acc2", name: "Kas", balance: 750000 },
];

export const MOCK_TRANSACTIONS = [
	{
		id: "1",
		name: "Gaji Bulanan",
		amount: 8000000,
		date: "2024-07-01",
		type: "INCOME",
		category: "GAJI",
		account: "Bank BCA",
		tags: ["pekerjaan", "kantor"],
	},
	{
		id: "2",
		name: "Belanja Bulanan",
		amount: 1250500,
		date: "2024-07-03",
		type: "EXPENSE",
		category: "MAKANAN",
		account: "Bank BCA",
		tags: ["kebutuhan", "rumah"],
	},
	{
		id: "3",
		name: "Isi Bensin",
		amount: 300000,
		date: "2024-07-04",
		type: "EXPENSE",
		category: "TRANSPORTASI",
		account: "Kas",
		tags: ["mobil"],
	},
	{
		id: "4",
		name: "Langganan Netflix",
		amount: 186000,
		date: "2024-07-05",
		type: "EXPENSE",
		category: "TAGIHAN",
		account: "Bank BCA",
		tags: ["langganan", "online"],
	},
	{
		id: "5",
		name: "Sepatu Baru",
		amount: 899000,
		date: "2024-07-06",
		type: "EXPENSE",
		category: "BELANJA",
		account: "Bank BCA",
		tags: ["fashion", "toko online"],
	},
	{
		id: "6",
		name: "Makan Malam",
		amount: 250000,
		date: "2024-07-08",
		type: "EXPENSE",
		category: "MAKANAN",
		account: "Kas",
		tags: ["restoran", "kafe"],
	},
	{
		id: "7",
		name: "Tagihan Listrik",
		amount: 450000,
		date: "2024-07-10",
		type: "EXPENSE",
		category: "TAGIHAN",
		account: "Bank BCA",
		tags: ["utilitas", "rumah"],
	},
	{
		id: "8",
		name: "Tiket Bioskop",
		amount: 100000,
		date: "2024-07-12",
		type: "EXPENSE",
		category: "HIBURAN",
		account: "Kas",
		tags: ["bioskop"],
	},
	{
		id: "9",
		name: "Proyek Freelance",
		amount: 1500000,
		date: "2024-07-15",
		type: "INCOME",
		category: "LAINNYA",
		account: "Bank BCA",
		tags: [" sampingan"],
	},
	{
		id: "10",
		name: "Ongkos Transport",
		amount: 50000,
		date: "2024-07-16",
		type: "EXPENSE",
		category: "TRANSPORTASI",
		account: "Kas",
		tags: ["transportasi umum"],
	},
	{
		id: "11",
		name: "Makan Siang di Kafe",
		amount: 75000,
		date: "2024-07-18",
		type: "EXPENSE",
		category: "MAKANAN",
		account: "Kas",
		tags: ["kafe", "makan siang"],
	},
	{
		id: "12",
		name: "Tagihan Internet",
		amount: 350000,
		date: "2024-07-20",
		type: "EXPENSE",
		category: "TAGIHAN",
		account: "Bank BCA",
		tags: ["utilitas", "rumah"],
	},
];

export const MOCK_BUDGETS = [
	{ category: "MAKANAN", limit: 2000000 },
	{ category: "TRANSPORTASI", limit: 1000000 },
	{ category: "HIBURAN", limit: 500000 },
	{ category: "BELANJA", limit: 1500000 },
	{ category: "TAGIHAN", limit: 1000000 },
];

export const formatCurrency = (value) =>
	new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value);

export const CATEGORY_ICONS = {
	Makan: (
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
			<path d="M12 22c5.523 0 10-4.477 10-10H2c0 5.523 4.477 10 10 10z" />
			<path d="M15 12v-2a3 3 0 0 0-3-3V4" />
		</svg>
	),
	BELANJA: (
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
			<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<path d="M16 10a4 4 0 0 1-8 0" />
		</svg>
	),
	TRANSPORTASI: (
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
			<path d="M19 17h2v-3h-2v3zM5 17h2v-3H5v3z" />
			<path d="M12 17H5.23c-.62 0-1.17-.31-1.52-.81L2 13v-2l1.71-3.19c.35-.5.9-.81 1.52-.81H17l4 4v3h-3.42" />
			<path d="M12 17H11a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v5z" />
			<circle cx="7" cy="17" r="2" />
			<circle cx="17" cy="17" r="2" />
		</svg>
	),
	TAGIHAN: (
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
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
			<polyline points="14 2 14 8 20 8" />
			<line x1="16" y1="13" x2="8" y2="13" />
			<line x1="16" y1="17" x2="8" y2="17" />
			<line x1="10" y1="9" x2="8" y2="9" />
		</svg>
	),
	HIBURAN: (
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
			<rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
			<polyline points="17 2 12 7 7 2" />
		</svg>
	),
	Gaji: (
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
			<line x1="12" y1="1" x2="12" y2="23" />
			<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
		</svg>
	),
	GADGET: (
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
			<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
			<line x1="12" y1="18" x2="12.01" y2="18"></line>
		</svg>
	),
	LAINNYA: (
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
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="8" x2="12" y2="12" />
			<line x1="12" y1="16" x2="12.01" y2="16" />
		</svg>
	),
};
