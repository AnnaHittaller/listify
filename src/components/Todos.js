import "./TodoList.css";

import {
	FiCircle,
	FiCheckCircle,
	FiXCircle,
	FiX,
	FiEdit,
} from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useEffect } from "react";

function Todos({ todos, setTodos, setEditTodo }) {

	const handleDelete = ({ id }) => {
		setTodos(todos.filter((item) => item.id !== id));
	};

	const handleComplete = (item) => {
		setTodos(
			todos.map((todo) => {
				if (item.id === todo.id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		);
	};

	const handleEdit = ({ id }) => {
		const findTodo = todos.find((item) => item.id === id);
		setEditTodo(findTodo);
	};

	const handleImportant = (item) => {
		setTodos(
			todos.map((todo) => {
				if (item.id === todo.id) {
					return { ...todo, important: !todo.important };
				} 
				return todo;
				
			})
		);
	};

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	return (
		<div className="todolist">
			{todos.map((item) => (
				<li className="task" key={item.id}>
					<div>
						<button
							className="task-icon-btn"
							onClick={() => handleComplete(item)}>
							{item.completed ? (
								<FiCheckCircle className="task-icon" />
							) : (
								<FiCircle className="task-icon" />
							)}
						</button>
						<input
							className={item.completed ? "list-input-completed" : "list-input"}
							type="text"
							value={item.text}
							onChange={(e) => e.preventDefault}
						/>
					</div>
					<div>
						<FiEdit className="task-icon" onClick={() => handleEdit(item)} />
						<button
							className="task-icon-btn"
							onClick={() => handleImportant(item)}>
							{item.important ? (
								<AiFillStar className="task-icon" />
							) : (
								<AiOutlineStar className="task-icon" />
							)}
						</button>
						<FiXCircle
							className="task-icon"
							onClick={() => handleDelete(item)}
						/>
					</div>
				</li>
			))}
		</div>
	);
}

export default Todos;
