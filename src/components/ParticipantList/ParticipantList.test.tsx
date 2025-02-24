import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { ParticipantList } from "./ParticipantList";
import { useParticipantList } from "../../hook/useParticipantList";
import { Mock, vi } from "vitest";

vi.mock('../../hook/useParticipantList', () => {
    return {useParticipantList: vi.fn()}
})

describe('Verify if participant list is empty', () => {
    beforeEach(() => {
        (useParticipantList as Mock).mockReturnValue([])
    })

    test('Verify if participant list is empty', () => {
        render(<RecoilRoot><ParticipantList/></RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0)
    })
})

describe('Verify if participant list has value' , () => {
    const partcipants = ['Ana', 'Catarina']
    beforeEach(() => {
        (useParticipantList as Mock).mockReturnValue(partcipants)
    })
    test('Verify if participant list has value', () => {
        render(<RecoilRoot><ParticipantList/></RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(partcipants.length)
    })
})