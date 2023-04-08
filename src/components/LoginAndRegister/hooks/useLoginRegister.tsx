import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formProps } from "../interfaces";

import { schemaRegister, schemaLogin } from "../utils";

export const useLoginRegister = (registerForm: boolean) => {
    const schema = registerForm ? schemaRegister : schemaLogin;

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<formProps>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(schema),
        reValidateMode: "onChange",
        defaultValues: {
            confirmPassword: "",
            email: "",
            password: "",
            name: "",
            type: false,
        },
    });

    return {
        handleSubmit,
        register,
        errors,
    };
};
