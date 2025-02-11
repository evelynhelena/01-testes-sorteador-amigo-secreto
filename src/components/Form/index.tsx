import { useRef, useState } from "react"
import { useAddParticipant } from "../../hook/useAddParticipant";
import { useMessageError } from "../../hook/useMessageError";

export function Form(){
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
        <div>
            <form onSubmit={addParticipants}>
                <input
                ref={inputRef} 
                placeholder="Insira os nomes dos participantes" 
                value={particpantName}
                type="text" 
                onChange={({target}) => setParticpantName(target.value)}/>
                <button aria-label="button-adding" disabled={!particpantName}>Adicionar</button>
               {errorMessage && <p role='alert'>{errorMessage}</p>} 
            </form>
        </div>
    )
}
