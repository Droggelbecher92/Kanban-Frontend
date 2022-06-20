import { Task } from "../services/model";
import KanbanColumn from "./KanbanColumn";

interface KanbanGalleryProps {
    tasks: Array<Task>
    onTaskManipulation: () => void;
}

export default function KanbanGallery(props: KanbanGalleryProps) {

    const openTasks = props.tasks.filter(task => task.status === 'OPEN');
    const tasksInProgress = props.tasks.filter(task => task.status === 'IN_PROGRESS');
    const doneTasks = props.tasks.filter(task => task.status === 'DONE');

    return(
        <div className="columns">
            <div data-testid="open-column" className="column">
                <KanbanColumn headline="Open" tasks={openTasks} onTaskManipulation={props.onTaskManipulation} />
            </div>
            <div data-testid="in-progress-column"  className="column">
                <KanbanColumn headline="In Progress" tasks={tasksInProgress} onTaskManipulation={props.onTaskManipulation} />
            </div>
            <div data-testid="done-column" className="column">
                <KanbanColumn headline="Done" tasks={doneTasks} onTaskManipulation={props.onTaskManipulation} />
            </div>
        </div>
    )
}