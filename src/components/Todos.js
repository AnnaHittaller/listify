import "./TodoList.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
	FiCircle,
	FiCheckCircle,
	FiXCircle,
	FiX,
	FiEdit,
} from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { SlStar, SlBan, SlCalender } from "react-icons/sl";
import SearchTest from "./Searchbar"
import { BiBriefcase, BiHomeHeart, BiGlobe } from "react-icons/bi" 
import { TbListCheck } from "react-icons/tb";

function Todos({ todos, setTodos, setEditTodo, category }) {
	const navigate = useNavigate();
	const handleDelete = ({ id }) => {
		setTodos(todos.filter((item) => item.id !== id));
	};

	const handleComplete = (item) => {
		
		setTodos((prevTodos) => {
			const updatedTodos = prevTodos.map((todo) => {
				if (item.id === todo.id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
			const completedTodos = updatedTodos.filter((todo) => todo.completed);
			const incompleteTodos = updatedTodos.filter((todo) => !todo.completed);
			return [...incompleteTodos, ...completedTodos];
		});
		localStorage.setItem("todos", JSON.stringify(todos));
			
	};

	const handleEdit = ({ id }) => {
		const findTodo = todos.find((item) => item.id === id);
		setEditTodo(findTodo);
		navigate("/Todolist");
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

		const [activeFilter, setActiveFilter] = useState("all");

		const [query, setQuery] = useState("");
		console.log(query)

		const getFilteredTodos = (query) => {
			switch (activeFilter) {
				case "incomplete":
					return todos.filter((todo) => !todo.completed);
					break;
				case "important":
					return todos.filter((todo) => todo.important);
					break;
				case "personal":
					return todos.filter((todo) => todo.category === "personal");
					break;
				case "work":
						return todos.filter((todo) => todo.category === "work");
						break;
				case "general":
							return todos.filter((todo) => todo.category === "general");
							break;
				// case "search":
				// 		return todos.filter((todo)=> todo.text.includes(query));
				// 		break;
				
				default:
					return todos;
			}
		};

		const progressBar = () => {
			const allTodos = todos.length;
			const completedTodos = todos.filter((todo) => todo.completed).length;
			const todoPercent = 100 / (allTodos / completedTodos);
			return todoPercent;
		};


		const showAllTasks = () => {
			const allTodos = todos.length;
			return allTodos;
		};


		const showDoneTasks = () => {
			const completedTodos = todos.filter((todo) => todo.completed).length;
			return completedTodos;
		};


		// const showYellowTasks = () => {
		// 	const YellowTasks = {cat.label},
		// 	return YellowTasks;
		// };

		

		


	return (
		<div>
		    {/* <div id="searchbarDiv">
        <input type="text" placeholder="search" value={query} onChange={(e)=> setQuery(e.target.value)} /> 
		<button onClick={()=> setQuery("search")}>search</button>
    	</div> */}
		<div className="todolist">
			<div className="progress-bar">
				<p id="ToDoText">To Do's</p>
				<p class="allTasks">Tasks All: <strong>{showAllTasks()}</strong></p>
				<p class="doneTasks">Done Tasks: <strong>{showDoneTasks()}</strong></p>
				<div className="outer-bar">
					<div
						className="inner-bar"
						style={{ width: `${progressBar()}%` }}></div>
				</div>
			</div>
			</div>

			<div className="filter-div">
				<button className="filter-btn" onClick={() => setActiveFilter("all")}>
				<TbListCheck />
				</button>
				{/* <button
					className="filter-btn"
					onClick={() => setActiveFilter("incomplete")}>
					<SlBan />
				</button> */}
				<button
					className="filter-btn"
					onClick={() => setActiveFilter("important")}>
					<SlStar />
				</button>
				<button
					className="filter-btn"
					onClick={() => setActiveFilter("work")}>
					<BiBriefcase />
				</button>
				<button
					className="filter-btn"
					onClick={() => setActiveFilter("personal")}>
					<BiHomeHeart />
				</button>
				<button
					className="filter-btn"
					onClick={() => setActiveFilter("general")}>
					<BiGlobe />
				</button>
			</div>

			{todos.length === 0 ? (
				<p id="todolist-p">No todos added yet</p>
			) : (
				getFilteredTodos().map((item) => (
					<li className={`task ${item.category}`} key={item.id}>
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
								className={
									item.completed ? "list-input-completed" : "list-input"
								}
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
				))
			)}
		</div>
	);
}

export default Todos;
