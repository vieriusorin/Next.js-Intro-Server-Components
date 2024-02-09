import Todo from "./Todo";

const TodoList = ({ todos }: any) => {
	return (
		<div>
			{todos.map((todo: any) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
