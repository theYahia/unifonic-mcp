import { z } from "zod";
import { UnifonicClient } from "../client.js";

const client = new UnifonicClient();

export const getDeliveryReportSchema = z.object({
  message_id: z.string().describe("Message ID for delivery report"),
});

export async function handleGetDeliveryReport(params: z.infer<typeof getDeliveryReportSchema>): Promise<string> {
  const result = await client.request("POST", "/Messages/GetMessageReport", {
    MessageID: params.message_id,
  });
  return JSON.stringify(result, null, 2);
}
