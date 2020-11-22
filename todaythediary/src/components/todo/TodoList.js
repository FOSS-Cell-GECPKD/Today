import React from 'react';
import Task from './Task';

const TodoList = ({todos,setTodos})=> {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Task 
                        key={todo.id}
                        text={todo.text} 
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;