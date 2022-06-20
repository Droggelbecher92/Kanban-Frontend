import React from "react";
import { Task } from "../services/model";
import KanbanCard from "./KanbanCard";

interface KanbanColumnProps {
    headline: string;
    tasks: Array<Task>;
    onTaskManipulation: () => void;
}

export default function KanbanColumn(props: KanbanColumnProps) {

    const taskComponents = props.tasks.map(task => <div key={task.id}><KanbanCard task={task} onTaskManipulation={props.onTaskManipulation} /></div>)

    return(
        <div className={'kanbanColumn'}>
            <h4 className="title is-4">{props.headline}</h4>
            {taskComponents}
        </div>
    )
}