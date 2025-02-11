import { useRecoilValue } from "recoil"
import { errorState } from "../state/atom"

export const useMessageError = () => {
    const messageError = useRecoilValue(errorState);
    return messageError;
}