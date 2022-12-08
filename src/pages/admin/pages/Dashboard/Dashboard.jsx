import { useContext, useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTodos } from "../../../../hooks";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NotificationContext } from "../../../../context";
import { NotificationList, TodoList } from "../../../../components";
import _uniqueId from "lodash/uniqueId";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../routes";

const Dashboard = () => {
	const [todos, getTodos] = useTodos();
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		getTodos(1);
	}, [getTodos]);

	const { add } = useContext(NotificationContext);
	const notifTextRef = useRef();

	const onAddNotification = () => {
		const text = notifTextRef.current.value;
		if (text) {
			add({ id: _uniqueId(), text });
			notifTextRef.current.value = "";
			setHasError(false);
		} else {
			setHasError(true);
		}
		notifTextRef.current.focus();
	};

	const onChangeNotification = event => {
		const text = event.target.value;
		if (text) {
			setHasError(false);
		} else {
			setHasError(true);
		}
	};

	return (
		<Grid container spacing={2} mt={2}>
			<Grid item xs={6}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							inputRef={notifTextRef}
							label="متن اعلان"
							variant="outlined"
							size="small"
							sx={{ mr: 2 }}
							onChange={onChangeNotification}
						/>
						<Button
							color="success"
							variant="contained"
							onClick={onAddNotification}
						>
							افزودن اعلان
						</Button>
						{hasError && (
							<Typography
								sx={{
									fontSize: 12,
									marginTop: 1,
								}}
								color="red"
								gutterBottom
							>
								{"متن اعلان را وارد کنید."}
							</Typography>
						)}
					</Grid>
					<Grid item xs={12}>
						<NotificationList />
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<TodoList items={todos} />
				<Link to={PATHS.TODOS}>{"لیست"}</Link>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
