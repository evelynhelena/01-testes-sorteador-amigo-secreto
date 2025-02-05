import { useSetRecoilState } from "recoil"
import { listParticipant } from "../state/atom"

export const useAddParticipant = () =>{
    const setLista = useSetRecoilState(listParticipant)
    return (nameParticipant: string) => {
        return setLista(old => [...old, nameParticipant])
    }
}