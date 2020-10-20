import React, {useState} from 'react'

const Counter = ()=>{
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(true)
  
    const increment =()=>{
        setCount(count + 1);
        setDisabled(false)
    }
    const decrement =()=>{
        if(count === 1){
            setDisabled(true)
        }
        setCount(count - 1);
       
    }
 
   return (
     <div>
       <h3>{count}</h3> <br></br>
       <button onClick = {increment} >Increment</button> &nbsp;
       <button onClick = {decrement}  disabled={disabled}>Decrement</button> 
     </div>
   )
  
}
export default Counter;