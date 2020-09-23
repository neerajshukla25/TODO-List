import React, { Component } from 'react';
import { Button,List,ListItem, ListItemText } from '@material-ui/core';
import db from './firebase';
function Todo(props){
    return(
        <List>
            <ListItem>
                <ListItemText primary="Todo...." secondary={props.text.todo}/>
            </ListItem>
            <Button onClick={event=> db.collection('todos').doc(props.text.id).delete()}>😈 Delete Me</Button>
        </List>
        // <div>
        //    <li>{props.text}h</li>  
        // </div>
    )
}
 
export default Todo;