import React,{ useState } from 'react';
import './Todo.css';

import Form from'./Form';
import TodoList from './TodoList';

const Todo=()=>{
    const [inputText, setInputText ] = useState("");
    const [todos,setTodos] = useState([]);

    return(
        <div className="Todo">
            <header>To-do List</header>
            <Form 
                setInputText={setInputText} 
                todos={todos} 
                setTodos={setTodos} 
                inputText = {inputText}
            />
            <TodoList 
                todos={todos}
                setTodos = {setTodos}
            />
        </div>
    )
}
export default Todo;