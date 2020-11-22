import React,{useState} from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

const Form = ({inputText,setInputText, todos, setTodos}) =>{

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const [count,setCount] = useState(0);
    const incrementCount = ()=>{
        setCount((prev) =>prev +1);
    };
    const submitTodoHandler =(e) =>{
        e.preventDefault();
        incrementCount();
        setTodos([...todos, {text:inputText , completed: false, id:count}])
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