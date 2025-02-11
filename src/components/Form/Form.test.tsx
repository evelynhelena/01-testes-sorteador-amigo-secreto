import { RecoilRoot } from 'recoil';
import { Form } from '.'
import { act, fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest'


describe('Form behavior', () => {
    test('When input to be empty, new particpants does not adding', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes') //find input in the document

        const button = screen.getByLabelText('button-adding') //find button in the document

        expect(input).toBeInTheDocument() // verify if input to be in the document
        expect(button).toBeDisabled() // verify if button is disabled

    })

    test('Add new participant', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button = screen.getByLabelText('button-adding')

        //Insert value
        fireEvent.change(input, { target: { value: 'Ana Catarina' } })

        //Submit form
        fireEvent.click(button)

        //Verify focus
        expect(input).toHaveFocus()

        //Verify input is empty
        expect(input).toHaveValue('')
    })

    test('If name is duplicated not insert in list', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button = screen.getByLabelText('button-adding')

        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        fireEvent.click(button)

        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        fireEvent.click(button)

        const errorMessage = screen.getByRole('alert')

        expect(errorMessage.textContent).toBe('Nomes dublicados não são permitidos!')

    })

    test('Verify if message error closed after 3 seconds', () => {

        vi.useFakeTimers();

        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button = screen.getByLabelText('button-adding')

        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        fireEvent.click(button)

        fireEvent.change(input, { target: { value: 'Ana Catarina' } })
        fireEvent.click(button)

        let errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeInTheDocument()
        //await n seconds
        act(() => {
            vi.runAllTimers();
        })
        errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeNull()

    })
})
