import { z } from "zod";
export declare const makeVoiceCallSchema: z.ZodObject<{
    recipient: z.ZodString;
    content: z.ZodString;
    language: z.ZodDefault<z.ZodEnum<["english", "arabic"]>>;
    repeat: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    recipient: string;
    content: string;
    language: "english" | "arabic";
    repeat: number;
}, {
    recipient: string;
    content: string;
    language?: "english" | "arabic" | undefined;
    repeat?: number | undefined;
}>;
export declare function handleMakeVoiceCall(params: z.infer<typeof makeVoiceCallSchema>): Promise<string>;
