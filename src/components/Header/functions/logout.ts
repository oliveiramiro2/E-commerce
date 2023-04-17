import { notify } from '@/functions/notifications';
import { removeTokens } from '@/services/localStorage'

export const logout = (setLogined: Function, setAllUserData: Function) => {
    notify("warning", "Sucesso,", "Você saiu com sucesso!")
    removeTokens();
    setAllUserData({
        access_token: "",
        refresh_token: "",
        avatar: "",
        email: "",
        id: 0,
        name: "",
        password: "",
        role: "customer",
    });
    setLogined(false);
}
