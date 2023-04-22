"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schemaRegister } from "@/components/LoginAndRegister/utils";
import { IAddressSchema } from "../interface";

export const useAddressControl = () => {
    const schema = schemaRegister;

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IAddressSchema>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(schema),
        reValidateMode: "onChange",
        defaultValues: {
            CEP: "",
            city: "",
            complement: "",
            neiborhood: "",
            number: 0,
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
