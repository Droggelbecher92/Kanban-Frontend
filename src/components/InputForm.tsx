import React, { FormEvent, useState } from "react";

import { createTask } from "../services/apiServices";

interface InputFormProps {
    onTaskCreation: () => void;
}

export default function InputForm(props: InputFormProps) {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const submitForm = (ev: FormEvent) => {
        ev.preventDefault();

        createTask({task: task, description: description, status: 'OPEN'})
            .then(() => {
                setTask('');
                setDescription('');
                props.onTaskCreation();
            })
    }

    return(
        <div className={'inputForm'}>
            <form onSubmit={submitForm}>
                <input type="text" value={task} placeholder="Task" onChange={ev => setTask(ev.target.value)} />
                <input type="text" value={description} placeholder="Description" onChange={ev => setDescription(ev.target.value)} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}