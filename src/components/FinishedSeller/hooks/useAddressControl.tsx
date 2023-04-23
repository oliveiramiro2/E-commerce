"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";

import { IAddressSchema, IViaCepReturn, formType } from "../interface";
import { zipCodeMask } from "@/functions/zipCodeMask";
import { schemaAddress } from "../utils";
import { viaCep } from "@/services/viaCep";

export const useAddressControl = () => {
    const [zipCodeNotFound, setZipCodeNotFound] = useState<boolean>(false);
    const [checkingZipCode, setCheckingZipCode] = useState<boolean>(false);
    const [disabledInputs, setDisabledInputs] = useState<IAddressSchema>({
        city: false,
        complement: false,
        district: false,
        state: false,
        street: false,
    });
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

    const handleSetData = useCallback(
        (data: IViaCepReturn) => {
            setValue("city", data.localidade);
            setValue("street", data.logradouro);
            setValue("district", data.bairro);
            setValue("complement", data.complemento);
            setValue("state", data.uf);
            const auxDisable: IAddressSchema = {
                city: false,
                complement: false,
                district: false,
                state: false,
                street: false,
            };
            if (data.localidade !== "") auxDisable.city = true;
            if (data.bairro !== "") auxDisable.district = true;
            if (data.complemento !== "") auxDisable.complement = true;
            if (data.logradouro !== "") auxDisable.street = true;
            if (data.uf !== "") auxDisable.state = true;
            setDisabledInputs(auxDisable);
        },
        [setValue]
    );

    const fetchAddress = useCallback(() => {
        setCheckingZipCode(true)
        viaCep
            .get(`${watch("CEP")}/json/`)
            .then(({ data }: { data: IViaCepReturn }) => {
                if (!data.erro) {
                    setZipCodeNotFound(true);
                    handleSetData(data);
                } else {
                    setZipCodeNotFound(false);
                }
            })
            .catch(() => setZipCodeNotFound(false))
            .finally(() => setCheckingZipCode(false));
    }, [handleSetData]);

    useEffect(() => {
        setValue("CEP", zipCodeMask(watch("CEP")));

        if (watch("CEP").length !== 9) {
            setZipCodeNotFound(false);
            return;
        }
        fetchAddress();
    }, [watch("CEP"), fetchAddress, setValue]);

    return {
        handleSubmit,
        register,
        errors,
        zipCodeNotFound,
        disabledInputs,
        zipCode: watch("CEP"),
        checkingZipCode,
    };
};
