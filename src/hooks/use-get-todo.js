import { useCallback } from "react";
import useHttp from "./use-http";

const useGetTodo = () => {
	const { response, getData } = useHttp();

	const getTodo = useCallback(
		async id => {
			await getData(`https://dummyjson.com/todos/${id}`);
		},
		[getData]
	);

	return [response, getTodo];
};

export default useGetTodo;
