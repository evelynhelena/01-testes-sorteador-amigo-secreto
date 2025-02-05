import { RecoilRoot } from 'recoil';
import { Form } from '.'
import { fireEvent, render, screen } from '@testing-library/react';



test('When input to be empty, new particpants does not adding', () => {
    render(<Form/>)

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes') //find input in the document

    const button = screen.getByLabelText('button-adding') //find button in the document

    expect(input).toBeInTheDocument() // verify if input to be in the document
    expect(button).toBeDisabled() // verify if button is disabled

})

test('Add new participant',() => {
    render(<RecoilRoot><Form/></RecoilRoot>)
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const button = screen.getByLabelText('button-adding')

    //Insert value
    fireEvent.change(input, {target: {value: 'Ana Catarina'}})

    //Submit form
    fireEvent.click(button)

    //Verify focus
    expect(input).toHaveFocus()

    //Verify input is empty
    expect(input).toHaveValue('')
})