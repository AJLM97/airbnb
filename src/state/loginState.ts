import { persistentAtom } from '@nanostores/persistent'

export const isLogged = persistentAtom<string>('isLogged', "false");
export const userEmail = persistentAtom<string>('userEmail', '');
