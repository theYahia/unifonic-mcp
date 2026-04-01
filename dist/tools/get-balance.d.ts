import { z } from "zod";
export declare const getBalanceSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare function handleGetBalance(_params: z.infer<typeof getBalanceSchema>): Promise<string>;
