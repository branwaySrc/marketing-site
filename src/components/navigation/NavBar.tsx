import { QuickLink } from "@/components/QuickLink";
import Image from "next/image";

interface NavBarProps {
	height?: number;
}
const NavBar = (props: NavBarProps) => {
	return (
		<>
			<span style={{ height: props.height || 60 }} className="block" />
			<nav className="border-b fixed top-0 w-full z-[9999] bg-[#F3F6F6]">
				<section style={{ height: props.height || 60 }} className="flex justify-between items-center px-6 container mx-auto">
					<Image alt="Branway_Logo" src={"/logo/logo_black.png"} width={100} height={25} />
					<QuickLink href={"/"} type="button" label="문의하기" />
				</section>
			</nav>
		</>
	);
};

export default NavBar;
