export interface IDataRegisterUser {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export interface IDataRegisterHome {
    password: string;
    email: string;
}

export interface IContextDataRegisterHome {
    userData: IDataRegisterHome;
    setUserData: Function;
}
