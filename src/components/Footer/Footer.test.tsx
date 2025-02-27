import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { Footer } from "."

describe('Verify if have minimun 3 participant', () => {
    test('The game is not started', () => {
        render(<RecoilRoot><Footer/></RecoilRoot>);

        const startButton = screen.getByRole('button');
        expect(startButton).toBeDisabled();
    })
})