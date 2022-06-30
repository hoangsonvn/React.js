import React, { useEffect, useState } from "react";

const App3 = ()=>{
   const [posts,setPosts] = useState([]);

    useEffect(()=>
      {  fetch('https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users')
        .then(
            (response)=>response.json())
        .then((res) => {
                setPosts(res);})
        .catch((err)=> console.log(err))    
                         
    },[]);
   
    
        const pos= posts;
        return(
            <>
            {pos.map((item)=>{
            return(
                <div key={item.id}>
                <div> {item.name}</div>
                <div> {item.id}</div>
                </div>
            );}
            )
            
            }
            </>
        );
    
}
export default App3;