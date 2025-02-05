import { atom } from "recoil";

export const listParticipant = atom<string[]>({
    key:'listParticipant',
    default:[]
})