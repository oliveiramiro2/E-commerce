import { z } from "zod";
import { schemaRegister, schemaLogin } from "../utils";

export type formProps = z.infer<typeof schemaRegister & typeof schemaLogin>;
