import { Fragment, useEffect } from "react";
import Box from "@mui/material/Box";
import { useParams, useNavigate } from "react-router-dom";
import { useGetTodo } from "../../../../hooks";
import Button from "@mui/material/Button";

const SingleTodo = () => {
	const { id } = useParams();
	const [info, getTodo] = useGetTodo();
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			getTodo(id);
		}
	}, [getTodo, id]);

	return (
		<Fragment>
			<Box>ID: {id}</Box>
			<Box>Name: {info.todo}</Box>
			<Button
				variant="outlined"
				sx={{ mt: 2 }}
				onClick={() => navigate(-1)}
			>
				بازگشت
			</Button>
		</Fragment>
	);
};

export default SingleTodo;
