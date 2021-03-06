import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import KanbanGallery from "../components/KanbanGallery";
import { fetchAllTasks } from '../services/apiServices';
import { Task } from '../services/model';

export default function KanbanBoard() {

    const [tasks, setTasks] = useState<Array<Task>>([]);

    useEffect(() => {
        fetchAll();
    }, [])

    const fetchAll = () => {
        fetchAllTasks()
            .then((tasksFromDB: Array<Task>) => setTasks(tasksFromDB))
    }

    return (
        <>
            <Header/>
            <InputForm onTaskCreation={fetchAll} />
            <KanbanGallery tasks={tasks} onTaskManipulation={fetchAll} />
        </>
    );
}
