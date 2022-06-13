import axios, { AxiosResponse } from "axios";
import { Task } from "./model";

export function fetchAllTasks() {
    return axios.get('http://localhost:8080/api/kanban')
        .then((response: AxiosResponse<Array<Task>, any> ) => response.data)
}

export function createTask(task: Task) {
    return axios.post('http://localhost:8080/api/kanban', task)
}

export function deleteTask(taskId: string) {
    return axios.delete(`http://localhost:8080/api/kanban/${taskId}`)
}