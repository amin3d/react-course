import Box from "@mui/material/Box";
import { Fragment } from "react";
import { Outlet, useParams } from "react-router-dom";

const SingleTodo = () => {
	const { id } = useParams();

	return (
		<Fragment>
			<Box>Todo ID: {id}</Box>
			<Outlet />
		</Fragment>
	);
};

export default SingleTodo;
