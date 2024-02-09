import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
	return (
		<form action={newTodo}>
			<input
				type='text'
				name='todo'
				className='w-[200px] h-12 border-2 px-3 mr-2'
			/>
			<button className='w-[100px] h-12 bg-slate-400 text-black' type='submit'>
				Add
			</button>
		</form>
	);
};

export default NewTodoForm;
