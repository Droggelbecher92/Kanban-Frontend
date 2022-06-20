import React, { FormEvent, useState } from "react";
import { setSyntheticLeadingComments } from "typescript";

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
            <div className="field">
                    <div className="control">
                        <input data-testid="task-field" className="input" type="text" value={task} placeholder="Task" onChange={ev => setTask(ev.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input data-testid="description-field" className="input" type="text" value={description} placeholder="Description" onChange={ev => setDescription(ev.target.value)} />
                    </div>
                </div>
                <div className="control">
                    <input data-testid="submit-button" type="submit" className="button is-link" value="Save" />
                </div>
            </form>
        </div>
    )
}