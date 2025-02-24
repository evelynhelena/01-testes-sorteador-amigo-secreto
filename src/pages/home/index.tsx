import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import Bag from "../../assets/bag.svg"

export function Home() {
    return (
        <div className="relative bg-color-primary">
            <Header />
            <div className="
                bg-color-tertiary 
                p-[87px]
                mt-[-29px] 
                flex 
                justify-center
                flex-col 
                border-2 
                rounded-t-[64px]
                w-[100%]
                items-center
                gap-[80px]
                "
            >
                <Form />

                <div className="flex w-full max-w-[500px] justify-between gap-[] items-center">
                    <button className="bg-color-secondary w-full max-w-[250px] h-[70px] rounded-[37px]">
                        <span>Iniciar brincadeira!</span>
                    </button>
                    <img src={Bag} className="w-full max-w-[200px]" />
                </div>
            </div>

        </div>
    )
}