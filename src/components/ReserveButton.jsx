import { useStore } from '@nanostores/preact';
import { isLogged } from '../state/loginState';

export default function SendComment({ lang }) {
    const $isLogged = useStore(isLogged);
    if($isLogged == "true"){
        return <button data-modal-target="soon-modal" data-modal-toggle="soon-modal" type="button" class="flex py-4 px-16 rounded-3xl text-white bg-red-500 items-center justify-center text-xl font-medium cursor-pointer">
                {lang == "en" ? "Reserve" : "Reservar"}
            </button>;
    } else {
        return <button data-modal-target="login-modal" data-modal-toggle="login-modal" type="button" class="flex py-4 px-16 rounded-3xl text-white bg-red-500 items-center justify-center text-xl font-medium cursor-pointer">
                {lang == "en" ? "Reserve" : "Reservar"}
            </button>;
    }
};
