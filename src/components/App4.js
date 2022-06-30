import { useEffect, useState } from "react";

const App4 =()=>{
    const [User,setUsers]= useState([]);


    useEffect(()=>{
        fetch('https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users')
        .then(
            (response)=>response.json())
        .then((res) => {
                setUsers(res);})
        .catch((err)=> console.log(err))    
                         
    },[]);

    return(
<>
{User.map((item)=>{
  return(
    <div key={item.id}>
    <div> {item.name}</div>
    <div> {item.id}</div>
    </div>
);}
)}
</>

    )
}
export default App4;