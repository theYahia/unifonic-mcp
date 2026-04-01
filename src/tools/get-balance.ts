import { z } from "zod";
import { UnifonicClient } from "../client.js";

const client = new UnifonicClient();

export const getBalanceSchema = z.object({});

export async function handleGetBalance(_params: z.infer<typeof getBalanceSchema>): Promise<string> {
  const result = await client.request("POST", "/Account/GetBalance", {});
  return JSON.stringify(result, null, 2);
}
