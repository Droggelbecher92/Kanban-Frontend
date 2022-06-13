import { deleteTask } from "../services/apiServices";
import { Task } from "../services/model"

interface KanbanCardProps {
    task: Task;
    onTaskDeletion: () => void;
}

export default function KanbanCard(props: KanbanCardProps) {

    const deleteCard = () => {
        deleteTask(props.task.id!)
            .then(props.onTaskDeletion)
    }

    return(
        <div className={'kanbanCard'}>
            <p>{props.task.task}</p>
            <p>{props.task.description}</p>
            <button onClick={deleteCard}>Delete</button>
            <button>ok</button>
            <button>ok</button>
        </div>
    )
}