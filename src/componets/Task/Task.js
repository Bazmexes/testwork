import React from 'react'
import './task.scss'
import {actionDoneTask, actionDeleteTask} from '../../redux/actions/actions'
import {useDispatch, useSelector } from 'react-redux'

export default function(props){
    const dispatch = useDispatch()
    const taskDone = (taskId)=>{
        console.log('govno')
        dispatch(actionDoneTask(taskId))
    }
    const deleteTask=(taskId)=>{
        dispatch(actionDeleteTask(taskId))
    }
    const tasks = useSelector(state => state.taskReducer.tasks)
    if(props.type==='done'){
        return(
            <div  className="task_done">
                <p >{props.taskText}</p>
                <p >{props.type}</p>  
                <button id={`${props.id}`} onClick={(e)=>deleteTask(e.target.id)}>Удалить</button>
            </div>
        )
    
    }else{
        return(
            <div  className="task">
                <p >{props.taskText}</p>
                <p>{props.type}</p>    
                <button id={`${props.id}`} onClick={(e)=>taskDone(e.target.id)}>Выполнено</button>
            </div>
        )
    }
}