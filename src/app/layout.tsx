import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const suisseInt = localFont({
	src: "../../public/fonts/suisse-intl-trial-light.woff2",
	variable: "--font-suisse-int",
	weight: "300",
});

export const metadata: Metadata = {
	title: "Catalyst Family Office",
	description: "Great wealth brings significant complexity.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="snap-mandatory snap-y">
			<body className={`${suisseInt.className}`}>
				<meta name="apple-mobile-web-app-title" content="TurboStarter" />
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
