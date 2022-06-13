import React from 'react';
import './App.css';
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import KanbanGallery from "./components/KanbanGallery";

export default function App() {
    return (
        <div>
            <Header/>
            <InputForm/>
            <KanbanGallery/>
        </div>
    );
}
