import { Fragment } from "react";
import FirstComponent from "./components/FirstComponent";

function App() {
	return (
		<Fragment>
			<FirstComponent content="Hello World!"/>
			<FirstComponent content="Salam Donya!" />
			<FirstComponent content="Test" />
		</Fragment>
	);
}

export default App;
