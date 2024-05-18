import { PropsWithChildren } from "react";

interface ParagraphProps extends PropsWithChildren {
	label?: string;
	large?: boolean;
	className?: string;
	color?: "light";
}
export const Paragraph = (props: ParagraphProps) => {
	const handleTextSize = props.large ? "text-base " : "text-sm ";
	const handleColor = props.color === "light" ? "text-[#EBECEF]" : "text-[#6F6F72]";
	return (
		<p className={`${handleTextSize} ${props.className} ${handleColor} tracking-tight`}>
			{props.label}
			{props.children}
		</p>
	);
};
