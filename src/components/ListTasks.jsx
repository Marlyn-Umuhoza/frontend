import React, { Component } from 'react'
import TasksService from '../services/TasksService'

class ListTasks extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(id){
        TasksService.deleteTask(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
        });
    }
    viewTask(id){
        this.props.history.push(`/view-task/${id}`);
    }
    editTask(id){
        this.props.history.push(`/add-task/${id}`);
    }

    componentDidMount(){
        TasksService.getTasks().then((res) => {
            this.setState({ tasks: res.data});
        });
    }

    addTask(){
        this.props.history.push('/add-task/_add');
    }

    render() {
        return (
            <div className="outer" >
                 <h2 className="text-center">Tasks List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTask}> Add Task</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Title </th>
                                    <th> Start date</th>
                                    <th> End date</th>
                                    <th> Assignees</th>
                                    <th> Project </th>
                                    <th> Description</th>
                                    <th> Priority</th>
                                    <th> File</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(
                                        task => 
                                        <tr key = {task.id}> 
                                             <td> {task.title} </td> 
                                             <td> {task.startDate} </td>   
                                             <td> {task.endDate}</td>
                                             <td> {task.assignee.name}</td>
                                             <td> {task.project.projectName} </td>   
                                             <td> {task.description}</td>
                                             <td> {task.priority}</td>
                                             <td> {task.file}</td>
                                             <td>
                                                 <button onClick={ () => this.editTask(task.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(task.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTask(task.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTasks