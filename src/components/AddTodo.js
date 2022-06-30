import { useState } from "react"

const AddTodo = (props)=>{
const [item,setItem] = useState({ id: 1,
    name: "son"});

const addItem = ()=>{
   if(!item.name){
  return  alert('nothing');
   }
props.addTodoList(item);
setItem({name: ""})
console.log(item);
}


return (
<><input value={item.name} type= "text" onChange={(e)=>{   
    setItem({id:Math.floor(Math.random()*1000),name:e.target.value})
 console.log(e.target.value);

}} />
<button onClick={addItem}>add</button>
         
</>

)
}
export default AddTodo;