<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# odyzhou.com

Personal website of Ody Zhou — Software Engineer & AI Researcher.

[Live Site](https://odyzhou.com) · [MCP Server](#mcp-server) · [LinkedIn](https://linkedin.com/in/ody-zhou) · [GitHub](https://github.com/ody-zhou)

</div>

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Hosting:** Vercel (static site + serverless functions)
- **MCP Server:** `@modelcontextprotocol/sdk`, Zod

## Run Locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

## MCP Server

The site exposes a remote [Model Context Protocol](https://modelcontextprotocol.io) server so AI agents can contact Ody and book meetings.

**Endpoint:** `https://odyzhou.com/api/mcp`
**Transport:** Streamable HTTP (stateless)
**Discovery:** [`/.well-known/mcp.json`](https://odyzhou.com/.well-known/mcp.json)

### Available Tools

| Tool | Description |
|---|---|
| `contact_ody` | Send a message to Ody via Telegram. Takes `sender` (required), `message` (required), `context` (optional). |
| `book_meeting` | Get a Cal.com scheduling link. Takes `topic` (optional). |

### Add to Your MCP Client

Claude Desktop, Cursor, Windsurf, or any MCP-compatible client:

```json
{
  "mcpServers": {
    "ody-zhou": {
      "url": "https://odyzhou.com/api/mcp"
    }
  }
}
```

### Test with curl

```bash
# List tools
curl -X POST https://odyzhou.com/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","method":"tools/list","id":1}'
```

## Environment Variables

Set these in the Vercel dashboard for the MCP server to work:

| Variable | Description |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Telegram bot token from [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | Your Telegram chat ID |

## Project Structure

```
├── api/
│   └── mcp.ts              # MCP serverless endpoint (Vercel)
├── lib/
│   └── mcp/tools.ts        # Tool definitions (contact_ody, book_meeting)
├── components/              # React components
├── public/
│   ├── .well-known/mcp.json # MCP discovery file
│   └── llms.txt             # LLM-readable site summary
├── App.tsx                  # Main React app
├── index.html               # Entry point with JSON-LD structured data
├── vercel.json              # Vercel routing & CORS config
└── package.json
```

## License

All rights reserved.
