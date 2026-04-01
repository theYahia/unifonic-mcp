import { z } from "zod";
export declare const sendSmsSchema: z.ZodObject<{
    recipient: z.ZodString;
    body: z.ZodString;
    sender_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    recipient: string;
    body: string;
    sender_id?: string | undefined;
}, {
    recipient: string;
    body: string;
    sender_id?: string | undefined;
}>;
export declare function handleSendSms(params: z.infer<typeof sendSmsSchema>): Promise<string>;
