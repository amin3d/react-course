import React, { useContext } from "react";
import { NotificationContext } from "../context";
import _map from "lodash/map";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import _isEmpty from "lodash/isEmpty";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const NotificationList = () => {
	const { items, remove } = useContext(NotificationContext);

	const onDelete = id => {
		remove(id);
	};

	return (
		!_isEmpty(items) && (
			<List
				sx={{
					width: "100%",
					maxWidth: 360,
					bgcolor: "background.paper",
					mt: 2,
				}}
			>
				{_map(items, ({ id, text }, key) => (
					<ListItem key={key}>
						<ListItemAvatar>
							<Avatar>
								<NotificationsNoneIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={text} />
						<Divider variant="middle" />
						<IconButton onClick={() => onDelete(id)}>
							<DeleteOutlineIcon />
						</IconButton>
					</ListItem>
				))}
			</List>
		)
	);
};

export default NotificationList;
