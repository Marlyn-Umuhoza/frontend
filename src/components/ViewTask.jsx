import React, { Component } from 'react'
import TaskService from '../services/TasksService'

class ViewTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            task: {}
        }
    }

    componentDidMount(){
        TaskService.getTaskById(this.state.id).then( res => {
            this.setState({task: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Task Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Task title: </label>
                            <div> { this.state.task.title }</div>
                        </div>
                        <div className = "row">
                            <label> Start date: </label>
                            <div> { this.state.task.startDate }</div>
                        </div>
                        <div className = "row">
                            <label> End date: </label>
                            <div> { this.state.task.endDate }</div>
                        </div>
                        <div className = "row">
                            <label> Assignee: </label>
                            <div> { this.state.task.assignee }</div>
                        </div>
                        <div className = "row">
                            <label> Project: </label>
                            <div> { this.state.task.project }</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.task.description }</div>
                        </div>
                        <div className = "row">
                            <label> Priority: </label>
                            <div> { this.state.task.priority }</div>
                        </div>
                        <div className = "row">
                            <label> File: </label>
                            <div> { this.state.task.file }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTask
