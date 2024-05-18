import { forwardRef } from "react";
import { HTMLAttributes, PropsWithRef } from "react";

export interface ViewerProps extends PropsWithRef<HTMLAttributes<HTMLDivElement>> {}
const MobileView = forwardRef<HTMLDivElement, ViewerProps>(({ children, className, ...otherProps }, ref) => (
	<div className={`${className} sm:hidden`} ref={ref} {...otherProps}>
		<span className="sr-only">current view : Mobile | Max 768px</span>
		{children}
	</div>
));

MobileView.displayName = "MobileView";

export default MobileView;
