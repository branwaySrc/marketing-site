import { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {
	label?: string;
	large?: boolean;
	className?: string;
	color?: "light";
}
export const Heading = (props: HeadingProps) => {
	const handleTextSize = props.large ? "text-4xl" : "text-2xl";
	const handleColor = props.color === "light" ? "text-[#F3F6F6]" : "text-[#1D1D1F]";
	return (
		<h1 className={`${handleTextSize} ${props.className} ${handleColor} font-bold tracking-tighter`}>
			{props.label}
			{props.children}
		</h1>
	);
};
