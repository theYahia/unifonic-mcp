import { describe, it, expect, vi, beforeEach } from "vitest";
const mockFetch = vi.fn();
global.fetch = mockFetch;
process.env.UNIFONIC_APP_SID = "test-app-sid";
describe("unifonic-mcp tools", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.resetModules();
    });
    it("send_sms sends message", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true, data: { MessageID: "msg_123", Status: "Sent" } }),
        });
        const { handleSendSms } = await import("../send-sms.js");
        const result = await handleSendSms({ recipient: "966501234567", body: "Hello from test" });
        expect(JSON.parse(result).data.MessageID).toBe("msg_123");
    });
    it("send_bulk_sms sends to multiple", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true, data: { Messages: 3 } }),
        });
        const { handleSendBulkSms } = await import("../send-bulk-sms.js");
        const result = await handleSendBulkSms({ recipients: "966501234567,966507654321,966509876543", body: "Bulk test" });
        expect(JSON.parse(result).data.Messages).toBe(3);
    });
    it("get_message_status checks delivery", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true, data: { Status: "Delivered" } }),
        });
        const { handleGetMessageStatus } = await import("../get-message-status.js");
        const result = await handleGetMessageStatus({ message_id: "msg_123" });
        expect(JSON.parse(result).data.Status).toBe("Delivered");
    });
    it("make_voice_call initiates call", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true, data: { CallID: "call_456", Status: "Queued" } }),
        });
        const { handleMakeVoiceCall } = await import("../make-voice-call.js");
        const result = await handleMakeVoiceCall({ recipient: "966501234567", content: "Hello", language: "english", repeat: 1 });
        expect(JSON.parse(result).data.CallID).toBe("call_456");
    });
    it("send_whatsapp sends message", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true, data: { MessageID: "wa_789" } }),
        });
        const { handleSendWhatsapp } = await import("../send-whatsapp.js");
        const result = await handleSendWhatsapp({ recipient: "966501234567", body: "WhatsApp test" });
        expect(JSON.parse(result).data.MessageID).toBe("wa_789");
    });
    it("get_balance returns account balance", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true, data: { Balance: "1500.00", CurrencyCode: "SAR" } }),
        });
        const { handleGetBalance } = await import("../get-balance.js");
        const result = await handleGetBalance({});
        expect(JSON.parse(result).data.Balance).toBe("1500.00");
    });
    it("list_senders returns sender IDs", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true, data: { SenderIDs: ["MyBrand", "NOTIFY"] } }),
        });
        const { handleListSenders } = await import("../list-senders.js");
        const result = await handleListSenders({});
        expect(JSON.parse(result).data.SenderIDs).toHaveLength(2);
    });
    it("get_delivery_report returns report", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ success: true, data: { Status: "Delivered", DeliveredAt: "2026-04-01T10:00:00Z" } }),
        });
        const { handleGetDeliveryReport } = await import("../get-delivery-report.js");
        const result = await handleGetDeliveryReport({ message_id: "msg_123" });
        expect(JSON.parse(result).data.Status).toBe("Delivered");
    });
    it("handles HTTP errors gracefully", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false, status: 403, text: async () => "Forbidden",
        });
        const { handleSendSms } = await import("../send-sms.js");
        await expect(handleSendSms({ recipient: "966501234567", body: "test" })).rejects.toThrow("Unifonic HTTP 403");
    });
});
//# sourceMappingURL=tools.test.js.map