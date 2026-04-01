import { z } from "zod";
import { UnifonicClient } from "../client.js";
const client = new UnifonicClient();
export const getMessageStatusSchema = z.object({
    message_id: z.string().describe("Message ID to check status"),
});
export async function handleGetMessageStatus(params) {
    const result = await client.request("POST", "/Messages/GetMessageIDStatus", {
        MessageID: params.message_id,
    });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=get-message-status.js.map