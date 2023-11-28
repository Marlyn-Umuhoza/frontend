import axios from 'axios';

const TASKS_API_BASE_URL = "http://localhost:8080/api/v1/tasks";

class TasksService {

    getTasks(){
        return axios.get(TASKS_API_BASE_URL);
    }

    createTask(task){
        return axios.post(TASKS_API_BASE_URL, task);
    }

    getTaskById(taskId){
        return axios.get(TASKS_API_BASE_URL + '/' + taskId);
    }

    updateTask(task, taskId){
        return axios.put(TASKS_API_BASE_URL + '/' + taskId, task);
    }

    deleteTask(taskId){
        return axios.delete(TASKS_API_BASE_URL + '/' + taskId);
    }
}

export default new TasksService()