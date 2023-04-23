"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formProps } from "../interfaces";

import { schemaRegister, schemaLogin } from "../utils";
import { RegisterHomeContext } from "@/contexts/registerUserHome";
import { UserDataContext } from "@/contexts/userDataLogin";

export const useLoginRegister = (registerForm: boolean, editProfile: boolean) => {
    const schema = registerForm ? schemaRegister : schemaLogin;
    const { userData } = useContext(RegisterHomeContext);
    const { allUserData } = useContext(UserDataContext);

    let defaultValues = {}
    if (editProfile) {
        defaultValues = {
            confirmPassword: allUserData.password,
            email: allUserData.email,
            password: allUserData.password,
            name: allUserData.name,
            type: allUserData.role === "admin",
        }
    } else {
        defaultValues = {
            confirmPassword: "",
            email: userData.email,
            password: userData.password,
            name: "",
            type: false,
        }
    }

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<formProps>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(schema),
        reValidateMode: "onChange",
        defaultValues,
    });

    return {
        handleSubmit,
        register,
        errors,
    };
};
