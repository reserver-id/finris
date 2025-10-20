"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/nextjs";
import { useState } from "react";

export default function Providers({ children }) {
	const [client] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={client}>
			<ClerkProvider>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</ClerkProvider>
		</QueryClientProvider>
	);
}
