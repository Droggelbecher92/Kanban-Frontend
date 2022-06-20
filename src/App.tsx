import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import EditPage from "./pages/EditPage";
import KanbanBoard from "./pages/KanbanBoard";

export default function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<KanbanBoard />} />
                    <Route path="/edit/:taskId" element={<EditPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}