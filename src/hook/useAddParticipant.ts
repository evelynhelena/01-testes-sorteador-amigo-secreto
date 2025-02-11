import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listParticipantState } from "../state/atom"

export const useAddParticipant = () =>{
    const setLista = useSetRecoilState(listParticipantState)
    const list = useRecoilValue(listParticipantState)
    const setError = useSetRecoilState(errorState)
    return (nameParticipant: string) => {
        if(list.includes(nameParticipant)){
            setError('Nomes dublicados não são permitidos!');
            setTimeout(() => {
                setError('')
            },3000)
            return
        }
        return setLista(old => [...old, nameParticipant])
    }
}