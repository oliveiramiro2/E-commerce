import { z } from "zod";

export const schemaRegister = z
    .object({
        name: z.string().min(2, "O campo nome é obrigatório!"),
        email: z.string().email("Por favor, digite um email válido!"),
        password: z
            .string()
            .min(8, "Sua senha deve ter no mínimo 8 caracteres!"),
        confirmPassword: z
            .string()
            .min(8, "Sua senha deve ter no mínimo 8 caracteres!"),
        type: z.boolean()
    })
    .refine(fields => fields.password === fields.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas devem ser iguais!",
    });

export const schemaLogin = z
.object({
    email: z.string().email("Por favor, digite um email válido!"),
    password: z
        .string()
        .min(8, "Sua senha deve ter no mínimo 8 caracteres!"),
});
