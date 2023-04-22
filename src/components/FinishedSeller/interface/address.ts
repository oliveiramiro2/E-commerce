import { z } from "zod";
import { schemaAddress } from "../utils";

export type formType = z.infer<typeof schemaAddress>

export interface IAddressSchema {
    CEP: string;
    street: string;
    number: string;
    district: string;
    complement: string;
    city: string;
    state: string;
}

export interface IViaCepReturn {
    bairro: string;
    compomento: string;
    uf: string;
    logradouro: string;
    localidade: string;
}
