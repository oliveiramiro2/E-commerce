import { IDataUser } from "./dataRegisterUser";

export interface IDataLoginUser {
    email: string;
    password: string;
}

export interface ILoginTokens {
    access_token: string;
    refresh_token: string;
}

export interface ILoginData extends IDataUser, ILoginTokens {}

export interface IContextLoginData {
    allUserData: ILoginData;
    setAllUserData: Function;
    logined: boolean;
    setLogined: Function;
}
