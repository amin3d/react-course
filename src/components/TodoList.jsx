import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import _map from "lodash/map";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const TodoList = ({ items }) => {
	return _map(items, ({ id, title, completed }) => (
		<Card sx={{ mb: 1 }} key={id}>
			<CardContent>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Box>
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
					<Link to={`${id}`}>{"جزئیات"}</Link>
				</Box>
			</CardContent>
		</Card>
	));
};

export default TodoList;
