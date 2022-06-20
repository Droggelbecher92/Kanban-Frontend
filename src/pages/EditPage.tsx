import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { editTask, getTask } from "../services/apiServices";
import { Task } from "../services/model";

export default function EditPage() {

    const [taskToEdit, setTaskToEdit] = useState<Task>()
    const [newTask, setNewTask] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    
    const { taskId } = useParams()
    const nav = useNavigate()


    useEffect(() => {
        getTask(taskId!)
            .then(task => {
                setTaskToEdit(task)
                setNewTask(task.task)
                setNewDescription(task.description)
            })
            .catch(() => setErrorMessage(`Task with ID ${taskId} not found`))
    }, [taskId]);


    const submitForm = (ev: FormEvent) => {
        ev.preventDefault()

        const changedTask = {
            id: taskId,
            task: newTask,
            description: newDescription,
            status: taskToEdit?.status
        }

        editTask(changedTask)
            .then(() => nav("/"))
    }

    return (
        <div>
            { errorMessage
                ? 
                    <div>
                        <div className="error">{errorMessage}</div>
                        <Link to="/">Back</Link>
                    </div>
                :
                    <div className={'inputForm'}>
                        <form onSubmit={submitForm}>
                            <div className="field">
                                <div className="control">
                                    <input data-testid="task-field" className="input" type="text" value={newTask} placeholder="Task" onChange={ev => setNewTask(ev.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input data-testid="description-field" className="input" type="text" value={newDescription} placeholder="Description" onChange={ev => setNewDescription(ev.target.value)} />
                                </div>
                            </div>
                            <div className="control">
                                <input data-testid="submit-button" type="submit" className="button is-link" value="Save" />
                            </div>
                        </form>
                    </div>
            }
        </div>
    )
}
