import React, { Component } from 'react'
import TaskService from '../services/TasksService';

class CreateTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            title: this.props.match.params.title,
            startDate: '',
            endDate: '',
            assignee: '',
            project: '',
            description: '',
            priority: '',
            file: ''
        }
        this.changeAssigneeHandler = this.changeAssigneeHandler.bind(this);
        this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
        this.saveOrUpdateTask = this.saveOrUpdateTask.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TaskService.getTaskById(this.state.id).then( (res) =>{
                let task = res.data;
                this.setState({
                    title: task.title,
                    startDate: task.startDate,
                    endDate : task.endDate,
                    assignee: task.assignee,
                    project : task.project,
                    description: task.description,
                    priority : task.priority,
                    file: task.file
                });
            });
        }        
    }
    saveOrUpdateTask = (e) => {
        e.preventDefault();
        let task = {title: this.state.title, startDate: this.state.startDate, endDate: this.state.endDate, assignee: this.state.assignee, project: this.state.project, description: this.state.description,priority: this.state.priority, file: this.state.file};
        console.log('task => ' + JSON.stringify(task));

        // step 5
        if(this.state.id === '_add'){
            TaskService.createTask(task).then(res =>{
                this.props.history.push('/tasks');
            });
        }else{
            TaskService.updateTask(task, this.state.id).then( res => {
                this.props.history.push('/tasks');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeStartDateHandler= (event) => {
        this.setState({startDate: event.target.value});
    }

    changeProjectHandler= (event) => {
        this.setState({project: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    
    changeAssigneeHandler= (event) => {
        this.setState({assignee: event.target.value});
    }

    changeEndDateHandler= (event) => {
        this.setState({endDate: event.target.value});
    }

    changePriorityHandler= (event) => {
        this.setState({priority: event.target.value});
    }

    cancel(){
        this.props.history.push('/tasks');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Task</h3>
        }else{
            return <h3 className="text-center">Update Task</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Assignee: </label>
                                            <input placeholder="assignee" name="assignee" className="form-control" 
                                                value={this.state.title} onChange={this.changeAssigneeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Start Date: </label>
                                            <input placeholder="Start Date" name="startDate" className="form-control" 
                                                value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> End Date: </label>
                                            <input placeholder="End date" name="endDate" className="form-control" 
                                                value={this.state.endDate} onChange={this.changeEndDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Project: </label>
                                            <input placeholder="Project" name="project" className="form-control" 
                                                value={this.state.project} onChange={this.changeProjectHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Priority: </label>
                                            <input placeholder="Priority" name="priority" className="form-control" 
                                                value={this.state.priority} onChange={this.changePrioriyHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTask}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTask