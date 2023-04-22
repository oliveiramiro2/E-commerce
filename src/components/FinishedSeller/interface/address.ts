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
