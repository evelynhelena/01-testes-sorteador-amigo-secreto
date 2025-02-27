import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

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
                <Footer />
            </div>

        </div>
    )
}