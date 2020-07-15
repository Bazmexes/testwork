import {_ADDTASK, _DONETASK, _DELETETASK} from './actionsTypes'


export function actionAddTask(task){
    return{
        type: _ADDTASK,
        payload: task
    }
}

export function actionDoneTask(taskId){
    return{
        type: _DONETASK,
        payload: taskId
    }
}
export function actionDeleteTask(taskId){
    return{
        type: _DELETETASK,
        payload: taskId
    }
}