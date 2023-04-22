"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schemaRegister } from "@/components/LoginAndRegister/utils";
import { formType } from "../interface";

export const useAddressControl = () => {
    const schema = schemaRegister;

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<formType>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(schema),
        reValidateMode: "onChange",
        defaultValues: {
            CEP: "",
            city: "",
            complement: "",
            district: "",
            number: "",
            state: "",
            street: "",
        },
    });

    return {
        handleSubmit,
        register,
        errors,
    };
};
