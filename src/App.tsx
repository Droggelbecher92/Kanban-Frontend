import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPage from "./EditPage";
import KanbanBoard from "./KanbanBoard";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<KanbanBoard />} />
                <Route path="/edit/:taskId" element={<EditPage />} />
            </Routes>
        </BrowserRouter>
    )
}