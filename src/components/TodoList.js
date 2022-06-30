import { useEffect, useState } from "react"
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoList = ()=>{

const [todoList,setTodolist] = useState([{
    id: 1,
    name: ""
}]);
const [todoEdit,setTodoEdit] = useState({});
const addTodoList = (todo)=>{
setTodolist([...todoList,todo]);
toast("add success");

}
const handleDelete = (i)=>{
setTodolist(todoList.filter((item)=>
    item.id!==i.id
));
}
function handleEdit(i){
   
    let isEmptyObj = Object.keys(todoEdit).length===0;
if(isEmptyObj===false && i.id===todoEdit.id){// bỏ cái sau && cũng dc
    let listCopy = [...todoList];
  let indexEdit=  listCopy.findIndex(i=>i.id===todoEdit.id);
  listCopy[indexEdit].name=todoEdit.name;
  setTodolist(listCopy);
  setTodoEdit({});
  toast("edit sussess");
  return;}
  /* let listAfterUpdate=  listCopy.reduce((obj,item)=>{
if(item.id !== todoEdit.id){
    return [...obj,item];
}else{
return [...obj,todoEdit];
}},[]);
    setTodolist(listAfterUpdate);
    setTodoEdit({});// để nút save thành edit
}// cục trên để cập nhật lại todoList khi bấm save
else{ */
setTodoEdit(i);
 
 console.log(i);
}

const handOnChangEdit = (e) =>{
    let editCopy = {...todoEdit};
    editCopy.name=e.target.value
    setTodoEdit(editCopy);
} 
let isEmptyObj = Object.keys(todoEdit).length===0;
return (
    <>
   <AddTodo addTodoList={addTodoList}/>
    <div>
    {todoList.map((i)=>{
        return(
            <>
           
            <div key={i.id}>
            <>{isEmptyObj === true?
            <>
                <p>{i.id}</p>
                <p>{i.name}</p>
            </>
                : 
            <>
            {i.id===todoEdit.id ?
            <><p>ok</p>
                <p>{i.id}</p>
                <input value={todoEdit.name} onChange={(e)=>handOnChangEdit(e)}/>
                </>
               :<>
               <p>{i.id}</p>
                <p>{i.name}</p>
               </> 
            
            }
            </>
                }
                </>
                <button onClick={()=>handleEdit(i)} >{isEmptyObj=== false && todoEdit.id===i.id? 'save':'edit'}</button>
                <button onClick={()=>handleDelete(i)}>delete</button>
            </div>
            </>
        )
    })}</div>
         <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
    </>
)

}
export default TodoList;