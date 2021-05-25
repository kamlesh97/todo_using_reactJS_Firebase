import { Button, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'
import './App.css'


function Todo({todo,inprogress,id}) {

    const toggleInprogress=()=>{
        db.collection('todos').doc(id).update({
            inprogress:!inprogress


        })
    }

    const deleteTodo=()=>{
        db.collection('todos').doc(id).delete()
    }

    return (
        <div className='par'>
            <ListItem >
                <ListItemText disableTypography primary={todo} 
                secondary={inprogress?<Typography type="body2" style={{ color: 'green', fontFamily:'Chela One' }}>Inprogress</Typography>
                :<Typography type="body2" style={{ color: 'red', fontFamily:'Chela One'}}>Complete</Typography> }  
                 />

            </ListItem>

            <Button onClick={toggleInprogress} >{inprogress?
            <Typography type="body2" style={{ color: 'red', fontFamily:'Chela One' }}>Done</Typography>
            :<Typography type="body2" style={{ color: 'green', fontFamily:'Chela One' }}>Undone</Typography>}</Button>
            <Button onClick={deleteTodo} style={{ color: 'red' }}>X</Button>
        </div>
    )
}

export default Todo
