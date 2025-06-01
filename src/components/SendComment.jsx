import { useStore } from '@nanostores/preact';
import { isLogged } from '../state/loginState';

export default function SendComment({ lang }) {
    const $isLogged = useStore(isLogged);
    if($isLogged == "false"){
        return <></>;
    } else {
        return (<form class="max-w-screen bg-white rounded-lg border border-stone-200 p-2 mx-auto mt-20">
    <div class="px-3 mb-2 mt-2">
        <textarea placeholder={lang == "en" ? "Comment" : "Comentario"} class="w-full bg-white rounded border border-stone-200 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
    </div>
    <div class="flex justify-end px-4">
        <button class="px-2.5 py-1.5 rounded-md text-white text-sm bg-red-500 cursor-pointer" data-modal-target="soon-modal" data-modal-toggle="soon-modal" type="button">{lang == "en" ? "Comment" : "Comentar"}</button>
    </div>
</form>);
    }
};
