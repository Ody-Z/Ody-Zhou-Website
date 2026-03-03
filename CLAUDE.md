# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Ody Zhou (odyzhou.com). Static React SPA with a serverless MCP (Model Context Protocol) endpoint, deployed on Vercel.

## Commands

- `npm run dev` — Start Vite dev server on port 3000
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally

No test runner or linter is configured.

## Architecture

**Frontend:** Single-page React 19 + TypeScript app. Tailwind CSS is loaded via CDN `<script>` tag in `index.html` (not PostCSS/build-time). The Tailwind config (custom colors, fonts, animations) and all global CSS live inline in `index.html`. The `@` path alias maps to the project root.

**Entry flow:** `index.html` → `index.tsx` → `App.tsx` → section components (`Hero`, `Experience`, `Skills`, `Navbar`, `Footer`). Scroll-reveal animation is driven by an IntersectionObserver in `App.tsx`.

**MCP Server:** A stateless Streamable HTTP MCP server exposed as a Vercel serverless function at `/api/mcp`. The handler (`api/mcp.ts`) creates a fresh `McpServer` per request. Tool definitions live in `lib/mcp/tools.ts` — currently `contact_ody` (sends Telegram message) and `book_meeting` (returns Cal.com link). Discovery file at `public/.well-known/mcp.json`.

**SEO:** `index.html` contains JSON-LD structured data (`Person`, `WebSite`, `ProfilePage`, `WebAPI`). `public/llms.txt` provides an LLM-readable site summary.

**Routing:** `vercel.json` rewrites `/api/*` to serverless functions and everything else to `index.html`. CORS headers for the MCP endpoint are configured there as well.

## Environment Variables (Vercel only)

- `TELEGRAM_BOT_TOKEN` — Telegram bot token for `contact_ody` tool
- `TELEGRAM_CHAT_ID` — Telegram chat ID for message delivery
