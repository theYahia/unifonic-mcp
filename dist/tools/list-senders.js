import { z } from "zod";
import { UnifonicClient } from "../client.js";
const client = new UnifonicClient();
export const listSendersSchema = z.object({});
export async function handleListSenders(_params) {
    const result = await client.request("POST", "/Account/GetSenderIDList", {});
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=list-senders.js.map