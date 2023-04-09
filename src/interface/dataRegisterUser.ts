export interface IDataRegisterUser {
    name: string;
    email: string;
    password: string;
    avatar: string;
    role: "customer" | "admin";
}

export interface IDataRegisterHome {
    password: string;
    email: string;
}

export interface IContextDataRegisterHome {
    userData: IDataRegisterHome;
    setUserData: Function;
}

export interface IDataUser extends IDataRegisterUser {
    id: number;
}
