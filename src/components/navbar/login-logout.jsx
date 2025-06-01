import { useStore } from '@nanostores/preact';
import { isLogged, userEmail } from '../../state/loginState';

export default function LogInLogOut({ enter, exit, lang }) {
    const $isLogged = useStore(isLogged);
    if($isLogged == "false"){
        return (<button id="log-in" data-modal-target="login-modal" data-modal-toggle="login-modal" type="button" class="inline-block py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer">
            <div class="flex items-center relative whitespace-nowrap font-medium">{enter}</div>
        </button>);
    } else {
        return (<div id="log-out" onClick={() => logOut(lang)} class="inline-block py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer">
            <div class="flex items-center relative whitespace-nowrap font-medium">{exit}</div>
        </div>);
    }
};

function logOut(lang) {
    isLogged.set("false");
    userEmail.set("");
    window.location.href = "/" + lang;
}