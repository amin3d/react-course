import { Fragment, useState } from "react";
import { FirstComponent } from "./components";

function App() {
	const [counter, setCounter] = useState(0);

	const onClick = () => {
		setCounter(prevCounter => prevCounter + 1);
	};

	return (
		<Fragment>
			<FirstComponent content="Salam Donya!" onClick={onClick} />
			<FirstComponent content="Hello World!" onClick={onClick} />
			<p>counter: {counter}</p>
			{/* <FirstComponent content="Salam Donya!" onClick={onClick} />
			<FirstComponent content="Test">
				<p>
					This is a <BoldText text="COMPOSITION" />!
				</p>
			</FirstComponent> */}
		</Fragment>
	);
}

export default App;
