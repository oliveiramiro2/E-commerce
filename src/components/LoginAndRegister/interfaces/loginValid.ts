import { ILoginData } from "@/interface";
import { formProps } from "./register";

export interface IloginValid {
    data: formProps;
    setShowIconLoading: Function;
    setAllUserData: Function;
    allUserData: ILoginData;
    setLogined: Function;
    push: Function;
    paramRedirect(): string;
    editProfile: boolean;
}
