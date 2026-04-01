#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { sendSmsSchema, handleSendSms } from "./tools/send-sms.js";
import { sendBulkSmsSchema, handleSendBulkSms } from "./tools/send-bulk-sms.js";
import { getMessageStatusSchema, handleGetMessageStatus } from "./tools/get-message-status.js";
import { makeVoiceCallSchema, handleMakeVoiceCall } from "./tools/make-voice-call.js";
import { sendWhatsappSchema, handleSendWhatsapp } from "./tools/send-whatsapp.js";
import { getBalanceSchema, handleGetBalance } from "./tools/get-balance.js";
import { listSendersSchema, handleListSenders } from "./tools/list-senders.js";
import { getDeliveryReportSchema, handleGetDeliveryReport } from "./tools/get-delivery-report.js";
const server = new McpServer({ name: "unifonic-mcp", version: "1.0.0" });
server.tool("send_sms", "Send an SMS message via Unifonic.", sendSmsSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleSendSms(params) }] }));
server.tool("send_bulk_sms", "Send SMS to multiple recipients.", sendBulkSmsSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleSendBulkSms(params) }] }));
server.tool("get_message_status", "Get delivery status of a message.", getMessageStatusSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetMessageStatus(params) }] }));
server.tool("make_voice_call", "Make a text-to-speech voice call.", makeVoiceCallSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleMakeVoiceCall(params) }] }));
server.tool("send_whatsapp", "Send a WhatsApp message.", sendWhatsappSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleSendWhatsapp(params) }] }));
server.tool("get_balance", "Get account balance.", getBalanceSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetBalance(params) }] }));
server.tool("list_senders", "List registered sender IDs.", listSendersSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleListSenders(params) }] }));
server.tool("get_delivery_report", "Get delivery report for a message.", getDeliveryReportSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetDeliveryReport(params) }] }));
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("[unifonic-mcp] Server started. 8 tools available.");
}
main().catch((error) => { console.error("[unifonic-mcp] Error:", error); process.exit(1); });
//# sourceMappingURL=index.js.map