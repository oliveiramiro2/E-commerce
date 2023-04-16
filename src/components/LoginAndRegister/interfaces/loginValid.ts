import { formProps } from "./register";

export interface IloginValid {
    data: formProps;
    setShowIconLoading: Function;
    setAllUserData: Function;
    setLogined: Function;
    push: Function;
    paramRedirect(): string;
}
