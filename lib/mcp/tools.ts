import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const SOCIAL_LINKS = {
  email: "zhouodywork@gmail.com",
  github: "https://github.com/ody-zhou",
  linkedin: "https://linkedin.com/in/ody-zhou",
  x: "https://x.com/OdyZhou",
  website: "https://odyzhou.com",
};

const CAL_LINK = "https://cal.com/ody-zhou";

async function sendTelegram(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials not configured");
    return false;
  }

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  return res.ok;
}

export function registerTools(server: McpServer) {
  server.tool(
    "contact_ody",
    "Send a message to Ody Zhou. Use this to introduce yourself, propose collaboration, ask a question, or express interest in working together. Ody will receive your message instantly via Telegram.",
    {
      sender: z.string().max(200).describe("Your name or the name of the person/company reaching out"),
      message: z.string().max(2000).describe("The message you want to send to Ody"),
      context: z.string().max(500).optional().describe("Optional context about how you found Ody or why you're reaching out"),
    },
    async ({ sender, message, context }) => {
      const lines = [
        `📬 *New MCP Contact*`,
        `*From:* ${sender}`,
        `*Message:* ${message}`,
      ];
      if (context) lines.push(`*Context:* ${context}`);
      lines.push(`\n_Sent via MCP server_`);

      const sent = await sendTelegram(lines.join("\n"));

      return {
        content: [
          {
            type: "text" as const,
            text: sent
              ? `Message delivered to Ody Zhou! He'll get back to you soon.\n\nYou can also reach Ody at:\n- Email: ${SOCIAL_LINKS.email}\n- GitHub: ${SOCIAL_LINKS.github}\n- LinkedIn: ${SOCIAL_LINKS.linkedin}\n- X/Twitter: ${SOCIAL_LINKS.x}\n- Website: ${SOCIAL_LINKS.website}`
              : `Could not deliver the message right now. Please reach out directly:\n- Email: ${SOCIAL_LINKS.email}\n- LinkedIn: ${SOCIAL_LINKS.linkedin}`,
          },
        ],
      };
    }
  );

  server.tool(
    "book_meeting",
    "Book a meeting with Ody Zhou. Returns a Cal.com scheduling link where you can pick a time that works.",
    {
      topic: z.string().max(200).optional().describe("Optional topic or agenda for the meeting"),
    },
    async ({ topic }) => {
      const url = topic
        ? `${CAL_LINK}?notes=${encodeURIComponent(topic)}`
        : CAL_LINK;

      return {
        content: [
          {
            type: "text" as const,
            text: `Book a meeting with Ody Zhou here: ${url}\n\nThe calendar syncs with his real availability, so pick any open slot.`,
          },
        ],
      };
    }
  );
}
