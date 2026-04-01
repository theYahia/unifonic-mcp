# unifonic-mcp

MCP server for Unifonic CPaaS platform (Saudi Arabia). Send SMS, bulk SMS, WhatsApp messages, make voice calls, and check delivery status.

## Tools (8)

| Tool | Description |
|---|---|
| `send_sms` | Send an SMS message |
| `send_bulk_sms` | Send SMS to multiple recipients |
| `get_message_status` | Check message delivery status |
| `make_voice_call` | Make a text-to-speech call |
| `send_whatsapp` | Send a WhatsApp message |
| `get_balance` | Get account balance |
| `list_senders` | List registered sender IDs |
| `get_delivery_report` | Get delivery report |

## Quick Start

```json
{
  "mcpServers": {
    "unifonic": {
      "command": "npx",
      "args": ["-y", "@theyahia/unifonic-mcp"],
      "env": {
        "UNIFONIC_APP_SID": "<YOUR_APP_SID>"
      }
    }
  }
}
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `UNIFONIC_APP_SID` | Yes | Application SID from Unifonic dashboard |

## Demo Prompts

- "Send an SMS to 966501234567 saying 'Your order is ready'"
- "Send bulk SMS to 3 numbers about a promotion"
- "Check delivery status of message msg_123"
- "Make a voice call to 966501234567 saying 'Your OTP is 4521'"
- "What is my Unifonic account balance?"

## License

MIT
