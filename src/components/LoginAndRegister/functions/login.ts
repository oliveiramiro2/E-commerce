import { SubmitErrorHandler, SubmitHandler } from "react-hook-form/dist/types";

import { formProps } from "../interfaces";

export const loginValid: SubmitHandler<formProps> = (data) => {
    console.log(data)
    return data;
};

export const loginInvalid: SubmitErrorHandler<formProps> = (data) => {
    console.log(data.email?.message, 'aaa')
    return data;
};
