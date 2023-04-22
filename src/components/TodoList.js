import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { BsCheckLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import "./TodoList.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
//import Calendar from "./Calendar";

function TodoList({
	newTodo,
	setNewTodo,
	todos,
	setTodos,
	editTodo,
	setEditTodo,
	category,
	setCategory,
	categories,
}) {
	//const [isClicked, setIsClicked] = useState(false);

	const navigate = useNavigate()

	// const toggleIsClicked = () => {
	// 	setIsClicked((prev) => !prev);
	// };

	const updateTodo = (id, text, completed, important, category, date) => {
		const newInput = todos.map((item) => {
			return item.id === id
				? { id, text, completed, important, category, date }
				: item;
		});
		setTodos(newInput);
		setEditTodo("");
		navigate(-1);
	};

	useEffect(() => {
		if (editTodo) {
			setNewTodo(editTodo.text);
		} else {
			setNewTodo("");
		}
	}, [setNewTodo, editTodo]);



	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!editTodo) {
			if (newTodo.trim() !== "") {
				{
					setTodos([
						...todos,
						{
							id: uuidv4(),
							text: newTodo,
							completed: false,
							important: false,
							category: category,
							date: dayjs().format("MM. DD. YYYY"),
						},
					]);
				}
				setNewTodo("");
				setCategory("general");
				navigate(-1)
			}
		} else {
		 if (editTodo.category !== category) {
      updateTodo(
        editTodo.id,
		newTodo,
        editTodo.completed,
        editTodo.important,
		category,
		editTodo.date
      );
	  
    } else {
      updateTodo(
        editTodo.id,
		newTodo,
        editTodo.completed,
        editTodo.important,
        editTodo.category, 
		editTodo.date
      );
		}
	}
	};

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
				<div className="radio-group">
					<p>Choose a category:</p>
					<div>
						{categories.map((cat, index) => (
							<label key={index}>
								<input
									type="radio"
									value={cat.value}
									checked={
										editTodo && editTodo.category && category === cat.value
									}
									onChange={() => setCategory(cat.value)}
								/>
								{cat.label}:
							</label>
						))}
					</div>
				</div>
				<button type="submit">
					{editTodo ? (
						<span>
							<BsCheckLg />
							<span>Save todo</span>
						</span>
					) : (
						<span>
							<GoPlus />
							<span>Add todo</span>
						</span>
					)}
				</button>
			</div>
			{/* <button onClick={toggleIsClicked}>
				Pick a date placeholder:
				
			</button> */}
		</form>
	);
}

export default TodoList;
