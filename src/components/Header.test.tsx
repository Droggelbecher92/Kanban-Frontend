import { render, screen } from "@testing-library/react"
import Header from "./Header"

test('that headline is rendered', () => {
    render(<Header />)
    const h1 = screen.getByTestId('headline')
    expect(h1.textContent).toEqual('Kanban-Dude')
})
