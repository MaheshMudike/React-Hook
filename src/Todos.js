import React, { useState , useRef, useEffect} from "react"

const Todos = ()=>{
    const [todo,setTodo] = useState('')
    const [todos,setTodos] = useState([])
    const todoRef = useRef()

    useEffect (()=>{
      todoRef.current.focus()
    },[])
   const  onTodoChange = (e)=>{
     setTodo(e.target.value)
    }
   let  addTodo = ()=>{
        setTodos([
            ...todos,
            todo
        ])
        setTodo('')
    }
    let removeTodo=(todo)=>{
        setTodos(todos.filter((curentTodo)=>{
           return curentTodo != todo
        }))
    }
    return (
        <div>
            <input type='text' ref = {todoRef}name='todo' placeholder = "Enter Todo" value={todo} onChange = {onTodoChange}></input>&nbsp;
            <button onClick = {addTodo}>Add Todo</button> <br></br>
            <ul>
                {
                    todos.map((todo,index)=>{
                        return <li key={index}>{todo}&nbsp;
                        <button onClick = {()=>
                            removeTodo(todo)}>Remove</button></li>
                    })
                }
            </ul>


        </div>
    )
}

export default Todos;
 
