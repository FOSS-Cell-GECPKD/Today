import React,{useState} from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

const Form = ({inputText,setInputText, todos, setTodos}) =>{

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const [counter,setCounter] = useState(0);
    const incrementer = ()=>{
        setCounter((prev) =>prev +1);
    };
    const submitTodoHandler =(e) =>{
        e.preventDefault();
        incrementer();
        setTodos([...todos, {text:inputText , completed: false, id:counter}])
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