const FirstComponent = ({ content, ...restProps }) => {
	return <p {...restProps}>{content}</p>;
};

export default FirstComponent;
