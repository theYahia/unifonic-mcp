import { z } from "zod";
export declare const sendBulkSmsSchema: z.ZodObject<{
    recipients: z.ZodString;
    body: z.ZodString;
    sender_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    body: string;
    recipients: string;
    sender_id?: string | undefined;
}, {
    body: string;
    recipients: string;
    sender_id?: string | undefined;
}>;
export declare function handleSendBulkSms(params: z.infer<typeof sendBulkSmsSchema>): Promise<string>;
