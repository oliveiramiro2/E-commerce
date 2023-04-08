import { z } from "zod";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldErrors } from "react-hook-form/dist/types/errors";

import { schemaRegister, schemaLogin } from "../utils";

export type formProps = z.infer<typeof schemaRegister & typeof schemaLogin>;

export interface IPropsInput {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    errors?: FieldErrors<formProps>;
    register: UseFormRegister<formProps>;
}

export interface IInputs {
    id: number;
    name: string;
    label: string;
    placeholder: string;
    type: string;
}
