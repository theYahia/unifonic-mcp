import { z } from "zod";
import { UnifonicClient } from "../client.js";
const client = new UnifonicClient();
export const sendBulkSmsSchema = z.object({
    recipients: z.string().describe("Comma-separated recipient numbers"),
    body: z.string().max(1600).describe("SMS message body"),
    sender_id: z.string().optional().describe("Sender ID"),
});
export async function handleSendBulkSms(params) {
    const body = {
        Recipient: params.recipients,
        Body: params.body,
    };
    if (params.sender_id)
        body.SenderID = params.sender_id;
    const result = await client.request("POST", "/Messages/SendBulk", body);
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=send-bulk-sms.js.map