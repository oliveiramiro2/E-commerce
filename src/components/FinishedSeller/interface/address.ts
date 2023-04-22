import { z } from "zod";
import { schemaAddress } from "../utils";

export type formType = z.infer<typeof schemaAddress>

export interface IAddressSchema {
    street: boolean;
    district: boolean;
    complement: boolean;
    city: boolean;
    state: boolean;
}

export interface IViaCepReturn {
    bairro: string;
    complemento: string;
    uf: string;
    logradouro: string;
    localidade: string;
    erro: boolean;
}
