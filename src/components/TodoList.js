import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { BsCheckLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

function TodoList({newTodo, setNewTodo, todos, setTodos, editTodo, setEditTodo}) {

	const updateTodo = (text, id, completed) => {
		const newInput = todos.map((item) => {
			return item.id === id ? {text, id, completed} : item;
		})
		setTodos(newInput)
		setEditTodo("")
	}

	useEffect(()=> {
		if(editTodo) {
			setNewTodo(editTodo.text)
		} else {
			setNewTodo("")
		}
	}, [setNewTodo, editTodo])

	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};


	const handleSubmit = (e) => {
		e.preventDefault()
		if(!editTodo) {
			if (newTodo.trim() !== "") {
				{
					setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false, important: false}]);
				}
				setNewTodo("");
			}
		} else {
			updateTodo(newTodo, editTodo.id, editTodo.completed)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="new-task">
				<input
					type="text"
					placeholder="...Add a task"
					value={newTodo}
					required
					onChange={handleChange}
				/>
				<button type="submit">
					{editTodo ? <BsCheckLg/> : <GoPlus />}
				</button>
			</div>
			
		</form>
	);
}

export default TodoList;
