import { z } from "zod";

export const schemaAddress = z.object({
    CEP: z.string().regex(/^\d{5}$/, "CEP inválido"),
    street: z.string().min(1, "Digite o nome da sua rua!"),
    number: z.number().min(1, "Digite o número da sua casa!"),
    neiborhood: z.string().min(1, "Digite o bairro da sua casa!"),
    complement: z.string(),
    city: z.string().min(1, "Digite o nome da sua cidade!"),
    state: z.string().min(2, "Digite a sigla do seu estado!"),
});
