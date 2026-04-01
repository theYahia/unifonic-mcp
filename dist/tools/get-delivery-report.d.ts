import { z } from "zod";
export declare const getDeliveryReportSchema: z.ZodObject<{
    message_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message_id: string;
}, {
    message_id: string;
}>;
export declare function handleGetDeliveryReport(params: z.infer<typeof getDeliveryReportSchema>): Promise<string>;
