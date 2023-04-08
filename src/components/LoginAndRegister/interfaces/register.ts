import { z } from "zod";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldErrors } from "react-hook-form/dist/types/errors";

import { schemaRegister, schemaLogin } from "../utils";

export type formProps = z.infer<typeof schemaRegister & typeof schemaLogin>;

export interface IPropsInput {
    name: "name" | "email" | "password" | "confirmPassword" | "type";
    label: string;
    placeholder: string;
    type: string;
    register: UseFormRegister<formProps>;
    errors?: FieldErrors<formProps>;
    registerForm: boolean;
}

export interface IInputs {
    id: number;
    name: "name" | "email" | "password" | "confirmPassword" | "type";
    label: string;
    placeholder: string;
    type: string;
}
