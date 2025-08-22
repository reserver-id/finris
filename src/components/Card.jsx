export default function Card({ className, children }) {
	return (
		<div
			className={`bg-white rounded-xl border border-slate-200 shadow-sm p-4 ${className}`}
		>
			{children}
		</div>
	);
}
