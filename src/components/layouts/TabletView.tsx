import { forwardRef } from "react";
import { HTMLAttributes, PropsWithRef } from "react";

export interface ViewerProps extends PropsWithRef<HTMLAttributes<HTMLDivElement>> {}
const TabletView = forwardRef<HTMLDivElement, ViewerProps>(({ children, className, ...otherProps }, ref) => (
	<div className={`${className} hidden sm:block lg:hidden`} ref={ref} {...otherProps}>
		<span className="sr-only">current view : Tablet | Max 1024px</span>
    {children}
	</div>
));


TabletView.displayName ="TabletView"


export default TabletView;
