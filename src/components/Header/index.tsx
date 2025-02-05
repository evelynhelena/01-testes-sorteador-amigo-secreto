import Logo from '../../../src/assets/logo-1.svg'
import Woman from '../../../src/assets/woman.svg'
import { LANGUAGE } from '../../pt-br'
export function Header() {

    return (
        <header className="bg-color-primary pt-[123px] flex justify-center  h-[454px]">
            <img src={Logo} alt={LANGUAGE.ALT_IMG_LOGO} className='max-w-[450px]' />
            <img
                className='mt-20 max-w-[450px]'
                src={Woman}
                alt={LANGUAGE.ALT_IMG_WOMAN}
            />
        </header>
    )
}