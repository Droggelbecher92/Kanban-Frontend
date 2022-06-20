import { AxiosResponse } from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editTask, getTask } from "../services/apiServices";
import { Task } from "../services/model";

export default function EditPage() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const taskId = useParams().taskId;
    const nav = useNavigate();

    useEffect(() => {
        getTask(taskId!)
            .then((response: AxiosResponse<Task, any>) => {
                setTask(response.data.task)
                setDescription(response.data.description)
                setStatus(response.data.status!)
            })
    }, [])

    const submitForm = (ev: FormEvent) => {
        ev.preventDefault();

        editTask({id: taskId, task: task, description: description, status: status})
            .then(() => nav('/'))
    }

    return (
        <div>
            <div className={'inputForm'}>
                <form onSubmit={submitForm}>
                    <input data-testid="task-field" type="text" value={task} placeholder="Task" onChange={ev => setTask(ev.target.value)} />
                    <input data-testid="description-field" type="text" value={description} placeholder="Description" onChange={ev => setDescription(ev.target.value)} />
                    <input data-testid="submit-button" type="submit" value="Save" />
                </form>
            </div>
            <Link to="/">Zurück zum Board</Link>
        </div>
    )
}