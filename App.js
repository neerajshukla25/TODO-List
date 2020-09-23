import React, { useState ,useEffect} from 'react';
import { Button , FormControl , Input , InputLabel } from '@material-ui/core';
import Todo from './todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState('');
  

  //when the app loads we need to losten to the database and fetch new todos as they get added ot removed
  useEffect(()=>{
    //this code is to fatch the data from the database
     db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    //  console.log(snapshot.docs.map(doc => doc.data().todo));
     setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
   })
  },[]);

  const addTodo = (event) =>{
  event.preventDefault();//stop refreshing page after every submittion
  
  db.collection('todos').add({
   todo: input,     
   timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })

  setInput('');//clear up the input
  
  }
 
  
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form>
      <FormControl>
       <InputLabel>Write a Todo</InputLabel>
       <Input value ={input} onChange={event =>setInput(event.target.value)}/>
     </FormControl>

        <Button disabled ={!input} type="submit" onClick={addTodo} variant="contained" color="secondary">
         ADD TASK
        </Button>
        
      </form>
     
      <ul>
        {todos.map(todo=>(
          <Todo text={todo}/> 
        ))}
       
      </ul>
    </div>
  );
}

export default App;
