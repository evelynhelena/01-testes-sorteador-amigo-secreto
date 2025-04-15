import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { Footer } from "."
import { vi } from "vitest"
import { useParticipantList } from "../../hook/useParticipantList"

vi.mock('../../hook/useParticipantList', () => {
    return {useParticipantList: vi.fn()}
})

const navigateMock = vi.fn()
vi.mock('react-router-dom', () => {
    return {
        useNavigate: () => navigateMock
    }
})

describe('Verify if have minimun 3 participant', () => {
    // antes do teste ele limpa a lista, para não correr o risco desse teste falhar
    beforeEach(() => { 
        (useParticipantList as jest.Mock).mockReturnValue([])
    })
    test('The game is not started', () => {
        render(<RecoilRoot><Footer /></RecoilRoot>);

        const startButton = screen.getByRole('button');
        expect(startButton).toBeDisabled();
    })
})

describe('Has minimun 3 participant', () => {
    beforeEach(() => { 
        (useParticipantList as jest.Mock).mockReturnValue(['Ana,' , 'Catarina', 'Josefina'])
    })
    test('start game', () => {
        render(<RecoilRoot><Footer /></RecoilRoot>);

        const startButton = screen.getByRole('button');
        expect(startButton).toBeEnabled();
    })
    test('The game is started', () => {
        render(<RecoilRoot><Footer /></RecoilRoot>);

        const startButton = screen.getByRole('button');
        fireEvent.click(startButton)

        expect(navigateMock).toHaveBeenCalledTimes(1)
        expect(navigateMock).toHaveBeenCalledWith('/start-game') //validar a url
    })
})
