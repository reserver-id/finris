export default function Header({ title, children }) {
	return (
		<header className="sticky top-0 bg-slate-100/80 backdrop-blur-sm z-10 p-4 border-b border-slate-200">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold text-slate-800 tracking-tight">
					{title}
				</h1>
				{children}
			</div>
		</header>
	);
}
