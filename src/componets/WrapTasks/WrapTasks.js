import React from 'react';
import { connect } from 'react-redux';
import './wrapTasker.scss'
import Task from '../Task/Task';


class WrapTasks extends React.Component{
    render(){
        console.log(this.props.tasks)
        return(
            <div className="wrap-tasker">
                <div className="wrap-tasker__content">
                    <div className="wrap-tasker__box wrap-tasker__box_active">
                    <h3>Активные</h3>
                        {this.props.tasks.map((task, index)=>{
                            if(task.type==='active'){
                                return(
                                    <Task taskText={task.task} key={index} id={task.id} type={task.type}/>
                                )
                            }
                        })}
                    </div>
                    <div className="wrap-tasker__box wrap-tasker__box_done">
                    <h3>Выполненые</h3>
                        {this.props.tasks.map((task, index)=>{
                            if(task.type==='done'){
                                return(
                                    <Task taskText={task.task} key={index} id={task.id} type={task.type}/>
                                )
                            }
                        })}
                    </div>
                    <div className="wrap-tasker__box wrap-tasker__box_all">
                    <h3>Все</h3>
                        {this.props.tasks.map((task, index)=>{
                                return(
                                    <Task taskText={task.task} key={index} id={task.id} type={task.type}/>
                                )
                        })}
                    </div>
                    
                </div>  
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        tasks: state.taskReducer.tasks
    }
}
export default connect(mapStateToProps, null)(WrapTasks)