import {_ADDTASK, _DONETASK, _DELETETASK} from '../actions/actionsTypes'
const initialState = {
    tasks:[{task: 'Задача 1', type: 'active', id:0}, {task: 'Задача 2', type: 'done', id:1}]
}

export default function(state = initialState, action){
    switch(action.type){
        
        case _ADDTASK:{ 
            if(action.payload.task===''){
                return state
            }else{
                const task = {...action.payload, id: state.tasks.length}
                return {
                    tasks: [...state.tasks, task]
                }
            }
        }
        case _DONETASK:{
            const tasks = [...state.tasks]
            console.log(tasks, action.payload)
            const index = tasks.findIndex(task => task.id==action.payload)
            if(index === -1){
                return state
            }else{
                console.log(index)

                tasks[index].type= 'done'
                return{
                    tasks: tasks
                }
            }
        }
        case _DELETETASK:{
            const tasks = [...state.tasks]
            console.log(tasks, action.payload)
            const index = tasks.findIndex(task => task.id==action.payload)
            if(index === -1){
                return state
            }else{
                tasks.splice(index, 1)
                return{
                    tasks: tasks
                }
            }
        }
        default:{
            return state
        }
    }
}