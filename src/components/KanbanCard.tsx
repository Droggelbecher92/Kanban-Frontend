import { Link } from "react-router-dom";
import { deleteTask, demoteTask, promoteTask } from "../services/apiServices";
import { Task } from "../services/model"

interface KanbanCardProps {
    task: Task;
    onTaskManipulation: () => void;
}

export default function KanbanCard(props: KanbanCardProps) {

    const deleteCard = () => {
        deleteTask(props.task.id!)
            .then((response) => {
                if (response.status === 200) {
                    props.onTaskManipulation()
                }
            })
    }

    const next = () => {
        promoteTask(props.task)
            .then(props.onTaskManipulation)
    }

    const prev = () => {
        demoteTask(props.task)
            .then(props.onTaskManipulation)
    }

    return(
        <div className={'kanbanCard'}>
            <p>{props.task.task}</p>
            <p>{props.task.description}</p>
            { props.task.status === 'OPEN' ? <button className="button is-link is-light" onClick={deleteCard}>Delete</button> : <button className="button is-link is-light" onClick={prev}>Prev</button> }
            <Link to={`/edit/${props.task.id}`}>
                <button className="button is-link is-light">Edit task</button>
            </Link>
            { props.task.status === 'DONE' ? <button className="button is-link is-light" onClick={deleteCard}>Delete</button> : <button className="button is-link is-light" onClick={next}>Next</button> }
            
        </div>
    )
}