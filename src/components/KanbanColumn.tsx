import React from "react";
import { Task } from "../services/model";
import KanbanCard from "./KanbanCard";

interface KanbanColumnProps {
    headline: string;
    tasks: Array<Task>;
    onTaskManipulation: () => void;
}

export default function KanbanColumn(props: KanbanColumnProps) {

    const taskComponents = props.tasks.map(task => <div key={task.id}><KanbanCard task={task} onTaskDeletion={props.onTaskManipulation} /></div>)

    return(
        <div className={'kanbanColumn'}>
                <h3>{props.headline}</h3>
                {taskComponents}
        </div>
    )
}