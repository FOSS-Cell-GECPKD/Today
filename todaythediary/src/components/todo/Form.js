import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

const Form = ({inputText,setInputText, todos, setTodos}) =>{

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const submitTodoHandler =(e) =>{
        e.preventDefault();
        setTodos([...todos, {text:inputText , completed: false, id: Math.random()*10000}])
        setInputText("");
    };

    return(
        <form>
            <input 
                placeholder="what to do today..."
                value={inputText} 
                onChange = {inputTextHandler} 
                type="text" 
            />
            <button onClick ={submitTodoHandler} className="todo-button" type="submit">
                <BsPlusCircleFill />
            </button>
      </form>
    );
}
export default Form;