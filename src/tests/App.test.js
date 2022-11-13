import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import App from "../App";

describe('Testing App component', () => {

  test('should show structure of the component', () => {
    render(<App />)

    const title = screen.getByText(/word counter/i)
    const subTitle = screen.getByText(/enter some text below:/i)
    const textarea = screen.getByPlaceholderText('Write here...')
    const resutl = screen.getByText(/there are 0 characters and 0 words/i)

    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
    expect(resutl).toBeInTheDocument()
  })

  test('should input some text in the textarea and show a result', () => {
    render(<App />)

    const textarea = screen.getByPlaceholderText('Write here...')
    const resutl = screen.getByText(/there are 0 characters and 0 words/i)
    
    expect(resutl).toBeInTheDocument()

    userEvent.type(textarea, 'Habia una vez...')

    expect(textarea.value).toBe('Habia una vez...')

    const resutlAgain = screen.getByText(/there are 16 characters and 3 words/i)

    expect(resutlAgain).toBeInTheDocument()
  })

})