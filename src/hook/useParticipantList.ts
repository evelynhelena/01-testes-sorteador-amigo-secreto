import { useRecoilValue } from "recoil"
import { listParticipantState } from "../state/atom"

export const useParticipantList = () => {
    return useRecoilValue(listParticipantState)
}