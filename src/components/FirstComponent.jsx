import { useState } from "react";

const FirstComponent = ({
	content,
	onClick: onClickProp,
	boldText,
	children,
	...restProps
}) => {
	const [title, setTitle] = useState(content);

	const onClick = () => {
		setTitle("Clicked!");
		onClickProp && onClickProp();
	};

	return (
		<div {...restProps}>
			{<p>{title}</p>}
			<button onClick={onClick}>click me</button>
			{children}
		</div>
	);
};

export default FirstComponent;
