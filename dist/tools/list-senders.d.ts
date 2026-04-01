import { z } from "zod";
export declare const listSendersSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare function handleListSenders(_params: z.infer<typeof listSendersSchema>): Promise<string>;
