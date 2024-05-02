"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme-provider";

interface props {
	children: React.ReactNode;
}
export default function Theme({ children }: props) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			{children}
		</ThemeProvider>
	);
}
