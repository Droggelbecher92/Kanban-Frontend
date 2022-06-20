import { render, screen, waitFor } from "@testing-library/react"
import axios from "axios"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import EditPage from "./EditPage"

test('that error message is shown', async () => {
    jest.spyOn(axios, 'get').mockImplementation((url: string) => {
        expect(url).toEqual('http://localhost:8080/api/kanban/4711')
        return Promise.resolve({
            data: {
                id: '4711',
                task: 'Shoppen',
                description: 'in der stadt',
                status: 'OPEN'
            }
        })
    })

    render(
        <MemoryRouter initialEntries={["/edit/4711"]}>
            <Routes>
                <Route path="/edit/:taskId" element={<EditPage />} />
            </Routes>
        </MemoryRouter>
    )

    await waitFor(() => {
        expect((screen.getByTestId('task-field') as HTMLInputElement).value).toEqual('Shoppen')
    })
})
