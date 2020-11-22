import React from 'react';
import {RiDeleteBack2Fill} from 'react-icons/ri';
import {MdDone} from 'react-icons/md';

const Task = ({text,todo,todos,setTodos}) =>{
    const deleteHandler = () =>{
        setTodos(todos.filter(element => (element.id !== todo.id) ));
    };
    const completeHandler = () =>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {...item,completed: !item.completed}
            }
            return item;
        }))
    }
    
    return(
        <div className = "todo">
            <li className={`todo-item ${todo.completed ?"completed":""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><MdDone /></button>
            <button onClick={deleteHandler} className="delete-btn"><RiDeleteBack2Fill /></button>
        </div>
    );
}
export default Task;