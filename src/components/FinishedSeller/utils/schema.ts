import { z } from "zod";

export const schemaAddress = z.object({
    CEP: z.string().min(9, "Digite um Cep válido!"),
    street: z.string().min(1, "Digite o nome da sua rua!"),
    number: z.string().min(1, "Digite o número da sua casa!"),
    district: z.string().min(1, "Digite o bairro da sua casa!"),
    complement: z.string(),
    city: z.string().min(1, "Digite o nome da sua cidade!"),
    state: z.string().min(2, "Digite a sigla do seu estado!"),
}).transform(field => ({
    CEP: field.CEP,
    street: field.street,
    number: field.number,
    district: field.district,
    complement: field.complement,
    city: field.city,
    state: field.state,
}));
