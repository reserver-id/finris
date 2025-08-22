import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNavbar from "RSV/components/BottomNavbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "FinRIS",
	description: "Finance Record and Insight System",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-600`}
			>
				<div className="h-screen w-screen bg-white font-sans text-slate-800 flex flex-col max-w-md mx-auto shadow-2xl">
					<main className="flex-1 overflow-y-auto pb-20">
						{children}
					</main>
					<div>
						<BottomNavbar />
					</div>
				</div>
			</body>
		</html>
	);
}
