import { useState } from "react";
import NotificationContext from "./context";

const NotificationContextProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [unreadCount, setUnreadCount] = useState(0);

	const add = notif => {
		setItems(prevItems => [notif, ...prevItems]);
		setUnreadCount(prevCount => prevCount + 1);
	};

	const read = () => {
		setUnreadCount(0);
	};

	const context = {
		items,
		unreadCount,
		add,
		read,
	};

	return (
		<NotificationContext.Provider value={context}>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContextProvider;
