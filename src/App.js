import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css'
import { Button , Typography} from '@material-ui/core';
import { db } from './firebase_config';
import firebase from 'firebase'
import Todo from './Todo'

function App() {

  const [todos,setTodos]=useState([])
  const [todoInput, setTodoInput] = useState('')

  useEffect(() => {
    getTodo()
  }, [])

  const getTodo=()=>{
    db.collection('todos').onSnapshot(function(querySnapshot){
      setTodos(querySnapshot.docs.map(doc=>({
        id:doc.id,
        todo:doc.data().todo,
        inprogress:doc.data().inprogress
      })))
    })
  }



  const addTodo=(e)=>{
    e.preventDefault();

    db.collection('todos').add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp() ,
      todo:todoInput,
    });
    setTodoInput('')
  }


  return (
    <div className="App">
      <div className='side'></div>
  

      <div className='right'>

      <h1>Kamlesh's tOdO</h1>
      <div>
      <TextField 
      
      id='standard-basic'
      value={todoInput}
      onChange={(e)=>setTodoInput(e.target.value)} 
      label={<Typography type="body2" style={{ color: 'gray', fontFamily:'Chela One'}}>Write a tOdO</Typography>} style={{maxWidth:'400px' , width:'90vw', }} InputLabelProps={{className:'green'}} />
  <Button type='submit' onClick={addTodo} variant='contained' style={{color:'purple'}} >add</Button>
  
  {todos.map(todo=>
  <Todo todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
  )}  
    </div>
    </div>
    
    </div>
  );
}

export default App;

