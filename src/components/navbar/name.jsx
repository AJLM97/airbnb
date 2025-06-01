import { useStore } from '@nanostores/preact';
import { isLogged, userEmail } from '../../state/loginState';

export default function NavbarUsername({lang}) {
    const $host = (lang == "en" ? "Be a host" : "Sé un anfitrión");
    const $userEmail = useStore(userEmail);
    const $isLogged = useStore(isLogged);
    console.log(userEmail.get());
    console.log(isLogged.get());

    return <div class="flex items-center relative cursor-pointer whitespace-nowrap font-medium"> {$isLogged == "true" ? $userEmail : $host} </div>;
};