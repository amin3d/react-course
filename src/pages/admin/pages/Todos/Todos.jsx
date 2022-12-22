import { useEffect } from "react";
import { TodoList } from "../../../../components";
import { useTodos } from "../../../../hooks";

const Todos = () => {
	const [todos, getTodos] = useTodos();

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	return <TodoList items={todos} showDetailsLink />;
};

export default Todos;
