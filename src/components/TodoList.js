import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

function TodoList(props) {
	const [newTodo, setNewTodo] = useState("")
	//const [todos, setTodos] = useState([]);

	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};

	const handleAdd = () => {
		if (newTodo.trim() !== "") {
			{props.setTodos([...props.todos, { id: uuidv4(), text: newTodo }])};
			setNewTodo("");
		}
		console.log(newTodo, props.todos)
	};

	return (
		<>
			<AddTodo newTodo={newTodo} onChange={handleChange} onClick={handleAdd} />
		</>
	);
}

export default TodoList;
