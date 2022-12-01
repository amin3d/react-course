import { useContext, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Template } from "../../layout";
import _map from "lodash/map";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useTodos } from "../../hooks";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NotificationContext } from "../../context";
import { NotificationList } from "../../components";

const Dashboard = () => {
	const [todos, getTodos] = useTodos();

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	const { add } = useContext(NotificationContext);
	const notifTextRef = useRef();

	const onAddNotification = () => {
		add(notifTextRef.current.value);
	};

	return (
		<Box width="100%" height="100%" bgcolor="#f5f5f5">
			<Box
				height="100%"
				display="flex"
				alignItems="center"
				justifyContent="flex-start"
			>
				<Template>
					<Container maxWidth="xl">
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
										/>
										<Button
											color="success"
											variant="contained"
											onClick={onAddNotification}
										>
											افزودن اعلان
										</Button>
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
					</Container>
				</Template>
			</Box>
		</Box>
	);
};

export default Dashboard;
