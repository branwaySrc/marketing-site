import { forwardRef } from "react";
import { HTMLAttributes, PropsWithRef } from "react";

export interface ViewerProps extends PropsWithRef<HTMLAttributes<HTMLDivElement>> {}
const DeskTopView = forwardRef<HTMLDivElement, ViewerProps>(({ children, className, ...otherProps }, ref) => (
	<div className={`${className} hidden lg:block`} ref={ref} {...otherProps}>
		<span className="sr-only">current view : Desktop | 1024px</span>
		{children}
	</div>
));

DeskTopView.displayName ="DeskTopView"

export default DeskTopView;
