import React from 'react';
import {connect} from 'react-redux'
import {actionAddTask} from '../../redux/actions/actions'
import './fotmAdd.scss'
class FormAdd extends React.Component{
    state = {
        task: '',
        type: 'active'
    }
    _handlerChange(e){
        this.setState({task: e.target.value})
    }
    _stopReload(e){
        e.preventDefault()
    }
    _addTask(){
        this.props.addTask(this.state)
        this.setState({task: ''})
    }
    render(){
        return(
            <div className="form">
                <form onSubmit={(e)=>{this._stopReload(e)}} className="form-add">
                    <input type="text" onChange={(e)=>{this._handlerChange(e)}}/>
                    <button type="reset" onClick={()=>{this._addTask()}}>Добавить задачу</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        addTask: task => dispatch(actionAddTask(task))
    }
}
export default connect(null, mapDispatchToProps)(FormAdd)