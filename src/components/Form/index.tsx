import { useRef, useState } from "react"
import { useAddParticipant } from "../../hook/useAddParticipant";
import { useMessageError } from "../../hook/useMessageError";

export function Form() {
    const [particpantName, setParticpantName] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const addParticipantList = useAddParticipant();
    const errorMessage = useMessageError();

    const addParticipants = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addParticipantList(particpantName);
        setParticpantName('');
        inputRef.current?.focus()
    }

    return (
        <div className="w-full flex justify-center flex-col items-center gap-8">
            <p className="text-3xl color-font-primary font-semibold">Vamos começar!</p>
            <form onSubmit={addParticipants} className="w-full max-w-[500px] flex relative items-center">
                <div className="absolute left-[20px]">
                    <i className="ri-user-add-fill color-font-gray-opacity" />
                </div>
                <input
                    className="border-b-5 border-2 w-full p-[20px] rounded-l-[37px] pl-[50px] text-base"
                    ref={inputRef}
                    placeholder="Insira os nomes dos participantes"
                    value={particpantName}
                    type="text"
                    onChange={({ target }) => setParticpantName(target.value)} />
                <button
                    className={`${!particpantName && 'cursor-not-allowed bg-color-gray text-black'} text-white bg-color-secondary cursor-pointer p-[20px] rounded-r-[37px] border-b-5 border-2 w-[255px] text-base border-black`}
                    aria-label="button-adding"
                    disabled={!particpantName}>Adicionar
                </button>
                {errorMessage && <p role='alert'>{errorMessage}</p>}
            </form>
        </div>
    )
}
