import Link, { LinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";

interface QuickLink extends LinkProps {
	label: string;
	type?: "button";
	icon?: React.ReactElement;
}
export const QuickLink = (props: QuickLink) => {
	const { label, type, ...otherProps } = props;
	const handleButtonStyle = type === "button" ? "bg-[#0071E3] text-white px-4" : "text-[#0071E3]";

	return (
		<span className="block text-center font-medium text-sm ">
			<Link className={`py-1 rounded-full flex items-center justify-center ${handleButtonStyle}`} {...otherProps}>
				{label} {props.icon || <ArrowUpRight className="ml-1 mt-[1px]" />}
			</Link>
		</span>
	);
};
