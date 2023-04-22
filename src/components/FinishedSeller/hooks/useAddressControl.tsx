"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { formType } from "../interface";
import { zipCodeMask } from "@/functions/zipCodeMask";
import { schemaAddress } from "../utils";

export const useAddressControl = () => {
    const schema = schemaAddress;

    const {
        handleSubmit,
        register,
        setValue,
        watch,
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

    useEffect(() => {
        setValue('CEP', zipCodeMask(watch('CEP')))
    }, [watch('CEP')])

    return {
        handleSubmit,
        register,
        errors,
    };
};
