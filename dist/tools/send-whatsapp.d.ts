import { z } from "zod";
export declare const sendWhatsappSchema: z.ZodObject<{
    recipient: z.ZodString;
    body: z.ZodString;
    template_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    recipient: string;
    body: string;
    template_id?: string | undefined;
}, {
    recipient: string;
    body: string;
    template_id?: string | undefined;
}>;
export declare function handleSendWhatsapp(params: z.infer<typeof sendWhatsappSchema>): Promise<string>;
