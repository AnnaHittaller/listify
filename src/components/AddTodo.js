import { GoPlus } from "react-icons/go";
import { useState } from "react";

function AddTodo(props) {
 

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			props.onClick()
		}
	}

	return (
		<div className="new-task">
			<input
				type="text"
				placeholder="...Add a task"
				value={props.newTodo}
				onChange={props.onChange}
				onKeyDown={handleKeyDown}
			/>
			<button onClick={props.onClick}>
				<GoPlus />
			</button>
		</div>
	);
}

export default AddTodo;
