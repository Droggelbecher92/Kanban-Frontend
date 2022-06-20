import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPage from "./pages/EditPage";
import KanbanBoard from "./pages/KanbanBoard";

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