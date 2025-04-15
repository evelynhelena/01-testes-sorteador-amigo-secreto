import { useRef, useState } from "react"
import { useAddParticipant } from "../../hook/useAddParticipant";
import { useMessageError } from "../../hook/useMessageError";
import { LANGUAGE } from "../../pt-br";
import { ParticipantList } from "../ParticipantList/ParticipantList";
import { useParticipantList } from "../../hook/useParticipantList";

export function Form() {
    const [particpantName, setParticpantName] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const addParticipantList = useAddParticipant();
    const errorMessage = useMessageError();
    const list = useParticipantList();

    const addParticipants = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addParticipantList(particpantName);
        setParticpantName('');
        inputRef.current?.focus();
    }

    return (
        <div className="w-full flex justify-center flex-col items-center gap-8 relative">
            <p className="text-3xl color-font-primary font-semibold">Vamos começar!</p>
            <form onSubmit={addParticipants} className="w-full max-w-[500px] flex relative items-center">
                <div className="absolute left-[20px]">
                    <i className="ri-user-add-fill color-font-gray-opacity" />
                </div>
                <input
                    className="border-b-5 border-2 w-full p-[20px] rounded-l-[37px] pl-[50px] text-base"
                    ref={inputRef}
                    placeholder={LANGUAGE.FORM.PLACEHOLDER}
                    value={particpantName}
                    type="text"
                    onChange={({ target }) => setParticpantName(target.value)} />
                <button
                    className={`${!particpantName ? 'cursor-not-allowed bg-color-gray text-black' : 'cursor-pointer'} text-white bg-color-secondary p-[20px] rounded-r-[37px] border-b-5 border-2 w-[255px] text-base border-black`}
                    aria-label="button-adding"
                    disabled={!particpantName}>
                    {LANGUAGE.FORM.BUTTON_ADD}
                </button>
            </form>
            {errorMessage &&
                <div className="bg-red-400 p-3 rounded-md text-white">
                    <p role='alert'>{errorMessage}</p>
                </div>
            }
            {/*<div className="absolute top-0">
                erro
            </div>*/}

            {
                list && (
                    <ParticipantList />
                )
            }
        </div>
    )
}
