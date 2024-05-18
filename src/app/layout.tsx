import type { Metadata } from "next";
import NavBar from "@/components/navigation/NavBar";
import "./globals.css";
import { NotoSans } from "@/config/fonts";

export const metadata: Metadata = {
	title: "파트너 브랜웨이",
	description: "파트너의 미래를 밝히는 마케팅 서포터",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${NotoSans.className} bg-[#F3F6F6] relative`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
