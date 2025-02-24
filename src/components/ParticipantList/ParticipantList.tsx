import { useParticipantList } from "../../hook/useParticipantList";

export function ParticipantList(){
    const list = useParticipantList();
    
    return (
        <div className="flex justify-start w-full max-w-[435px]">
        <ol className="list-decimal">
            {list.map((el) => (<li key={el}>{el}</li>))}
        </ol>
    </div>
    )
}