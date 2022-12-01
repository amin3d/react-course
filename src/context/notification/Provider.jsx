import { useState } from "react";
import NotificationContext from "./context";
import _filter from "lodash/filter";

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

	const remove = notif => {
		setItems(prevItems => [..._filter(prevItems, item => item !== notif)]);
	};

	const context = {
		items,
		unreadCount,
		add,
		read,
		remove,
	};

	return (
		<NotificationContext.Provider value={context}>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContextProvider;
