import  React, {useState,useEffect, useRef} from 'react'

// useEffect brings the life cycle to react - hook 

const Users = ()=>{
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
  
// useEffect Hook is users as CompoenenntDidMount it excute only after render 
// it is also used if we get new Props AS componentReceiveProps ()
//.. this as CompoenntDidMount
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>{
        setUsers(users)
        setLoading(false)
    })
    .catch((error)=>{
       setError(true)
       setLoading(false)
    })
  },[])

  //useEffect is is also used as to revie New props as ComponenttecevieProps()...
  //// ... this is aS ccomponentwillReciveProps()..

   // useEffect(()=>{
    //    setUsers(props.users)
    // },[props])

    /// useEffect can be used for State Changing it ca n be used for multipurposse
     //useEffect(()=>{
        //stateChanges Loading 
    // },[loading])

   if(loading === true){
       return(
           <div>
               <h1>Users</h1>
               <p>Loading Please waiy....</p>
           </div>
       )
   }
   if(error === true){
    return(
        <div>
            <h1>Users</h1>
            <p>Server Down  Please try again....</p>
        </div>
    )
}
    return (
        <div>
            <h1>Users </h1>
            <ul>
                {
                    users.map((user=>{
                        return <li key={user.id}>{user.name}</li>
                    }))
                }
            </ul>
        </div>
    )
}
export default Users