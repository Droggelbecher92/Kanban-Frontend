import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import KanbanGallery from "./KanbanGallery"

test('that tasks are correcty split up into columns', () => {
    const tasks = [
        {
            id: '4711',
            task: 'Einkaufen',
            description: 'endlich machen',
            status: 'OPEN'
        },
        {
            id: '4712',
            task: 'Putzen',
            description: '',
            status: 'DONE'
        },
        {
            id: '4713',
            task: 'Kochen',
            description: '',
            status: 'IN_PROGRESS'
        },
        {
            id: '4714',
            task: 'Sport machen',
            description: '',
            status: 'OPEN'
        }
    ];

    render(<MemoryRouter><KanbanGallery tasks={tasks} onTaskManipulation={() => {}} /></MemoryRouter>)

    const openColumn = screen.getByTestId('open-column')
    const inProgressColumn = screen.getByTestId('in-progress-column')
    const doneColumn = screen.getByTestId('done-column')

    expect(openColumn.querySelectorAll('.kanbanCard').length).toBe(2)
    expect(inProgressColumn.querySelectorAll('.kanbanCard').length).toBe(1)
    expect(doneColumn.querySelectorAll('.kanbanCard').length).toBe(1)
})
