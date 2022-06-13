import React from 'react';
import './App.css';

export default function App() {
    return (
        <div>
            <div>
                <h1>Kanban-Dude</h1>
            </div>
            <div>
                <input type="text"/>
                <input type="text"/>
                <button>ok</button>
            </div>
            <div>
                <div>
                    Status1
                    <div>
                        <p>Task</p>
                        <p>Beschreibung</p>
                        <button>ok</button>
                        <button>ok</button>
                        <button>ok</button>
                    </div>
                </div>
                <div>
                    Status2
                    <div>
                        <p>Task</p>
                        <p>Beschreibung</p>
                        <button>ok</button>
                        <button>ok</button>
                        <button>ok</button>
                    </div>
                </div>
                <div>
                    Status3
                    <div>
                        <p>Task</p>
                        <p>Beschreibung</p>
                        <button>ok</button>
                        <button>ok</button>
                        <button>ok</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
