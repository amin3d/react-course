import { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import _map from "lodash/map";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useTodos } from "../../../../hooks";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NotificationContext } from "../../../../context";
import { NotificationList } from "../../../../components";
import _uniqueId from "lodash/uniqueId";

const Dashboard = () => {
	const [todos, getTodos] = useTodos();
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		getTodos();
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
				{_map(todos, ({ id, title, completed }) => (
					<Card sx={{ mb: 1 }} key={id}>
						<CardContent>
							<Box
								display="flex"
								justifyContent="flex-start"
								alignItems="center"
							>
								<Box display="flex" mr={1}>
									{completed ? (
										<CheckIcon color="success" />
									) : (
										<CloseIcon color="error" />
									)}
								</Box>
								<Typography
									sx={{
										fontSize: 16,
										marginBottom: 0,
									}}
									color="slategray"
									gutterBottom
								>
									{title}
								</Typography>
							</Box>
						</CardContent>
					</Card>
				))}
			</Grid>
		</Grid>
	);
};

export default Dashboard;
