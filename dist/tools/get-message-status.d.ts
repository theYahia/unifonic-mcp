import { z } from "zod";
export declare const getMessageStatusSchema: z.ZodObject<{
    message_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message_id: string;
}, {
    message_id: string;
}>;
export declare function handleGetMessageStatus(params: z.infer<typeof getMessageStatusSchema>): Promise<string>;
