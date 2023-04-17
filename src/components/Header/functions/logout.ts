import { removeTokens } from '@/services/localStorage'

export const logout = (setLogined: Function, setAllUserData: Function) => {
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
