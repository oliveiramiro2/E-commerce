import { useState } from "react";
import { IInputs } from "../interfaces";
import { inputsDataLogin, inputsDataRegister } from "../utils";

export const useLoginOrRegister = (register: boolean) => {
    const [dataInputs] = useState<IInputs[]>(
        register ? inputsDataRegister : inputsDataLogin
    );

    return {dataInputs}
};
