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

	const onDelete = item => {
		remove(item);
	};

	return (
		<div>
			{!_isEmpty(items) && (
				<List
					sx={{
						width: "100%",
						maxWidth: 360,
						bgcolor: "background.paper",
						mt: 2,
					}}
				>
					{_map(items, (item, key) => (
						<ListItem key={key}>
							<ListItemAvatar>
								<Avatar>
									<NotificationsNoneIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={item} />
							<Divider variant="middle" />
							<IconButton onClick={() => onDelete(item)}>
								<DeleteOutlineIcon />
							</IconButton>
						</ListItem>
					))}
				</List>
			)}
		</div>
	);
};

export default NotificationList;
