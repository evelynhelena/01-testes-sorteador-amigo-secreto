import { LANGUAGE } from "../../pt-br";
import Bag from "../../assets/bag.svg"
import { useParticipantList } from "../../hook/useParticipantList";

export function Footer() {
    const participantList = useParticipantList();
    const isDisabled = participantList.length < 3;

    return (
        <div className="flex w-full max-w-[500px] justify-between items-center">
            <button 
            disabled={isDisabled}
            className={`
                bg-color-secondary w-full max-w-[250px] h-[70px] rounded-[37px] 
                border-b-5 border-2 text-white 
                border-black flex gap-[15px] 
                justify-center items-center
                ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                `
            }

            >
                <i className="ri-play-circle-line text-[30px]" />
                <span className="text-xl">{LANGUAGE.HOME.BTN_START_GAME}</span>
            </button>
            <img src={Bag} className="w-full max-w-[200px]" />
        </div>
    )
}