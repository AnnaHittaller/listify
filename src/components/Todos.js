import "./TodoList.css";
import { FiCircle, FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useEffect } from "react";

function Todos(props) {
    console.log(props.todos)

    const handleDelete = (item) => {
			const index = props.todos.indexOf(item);
			if (index !== -1) {
				const updatedTodos = [...props.todos];
				updatedTodos.splice(index, 1);
				props.setTodos(updatedTodos);
			}
		};

		
		useEffect(() => {
			localStorage.setItem('todos', JSON.stringify(props.todos))
		}, [props.todos])
		
		useEffect(() => {
			const storedTodos = JSON.parse(localStorage.getItem("todos"));
			if (storedTodos) {
				props.setTodos(storedTodos);
			}
		}, []);


	return (
		<div>
			{props.todos.map((item) => (
				<div className="task" key={item.id}>
                    <div>
					<FiCircle className="task-icon" />
					{item.text}
                    </div>
                    <div>
					<AiOutlineStar className="task-icon" />
					<FiXCircle className="task-icon" onClick={()=>handleDelete(item)}/>
                    </div>
				</div>
			))}
		</div>
	);
}

export default Todos;
