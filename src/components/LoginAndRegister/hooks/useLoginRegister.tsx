import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formProps } from "../interfaces";

import { schemaRegister, schemaLogin } from "../utils";
import { RegisterHomeContext } from "@/contexts/registerUserHome";

export const useLoginRegister = (registerForm: boolean) => {
    const schema = registerForm ? schemaRegister : schemaLogin;
    const { userData } = useContext(RegisterHomeContext);

    console.log(userData, "hook")

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
            email: userData.email,
            password: userData.password,
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
