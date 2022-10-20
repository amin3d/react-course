import { makeStyles } from "@mui/material/styles";

const options = {
	flip: false,
};

export default makeStyles(
	() => ({
		container: {
			width: "100%",
			height: "100vh",
			overflow: "hidden",
			display: "flex",
			alignItems: "stretch",
		},
		main: {
			width: "100%",
			overflow: "hidden",
		},
	}),
	options
);
