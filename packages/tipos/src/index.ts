import z from "zod";

export const PAPEL_ROTA_EMBARQUES = "Embarques";

export const PAPEL_ROTA_ADMINISTRADOR = "Administrador";

export const PAPEL_ROTA_QUALIDADE = "Qualidade";

export const PAPEL_ROTA_PLANEAMENTO = "Planeamento";

export const PAPEL_CP = "Cp";

export const AREA_MARROCOS = "Marrocos";

export const PAPEL_JOANA = "Joana";

export const PAPEL_FERNANDA = "Fernanda";

export const PAPEL_RFID = "Rfid";

export const StringSchema = z.string();

export type StringDto = z.infer<typeof StringSchema>;
