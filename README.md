# LinkedIn Translator

What you mean ↔ What you post.

A satirical tool that translates honest human language into performative LinkedIn speak — and vice versa.

## Setup

```bash
npm install
```

Create `.env.local` with your OpenAI API key:

```
OPENAI_API_KEY=sk-your-key-here
```

```bash
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import project in [vercel.com/new](https://vercel.com/new)
3. Add `OPENAI_API_KEY` as an environment variable
4. Deploy

## Stack

- Next.js 14 (App Router)
- OpenAI API (gpt-4o-mini)
- Vanilla CSS — no dependencies

## A Human Glitch Report Diagnostic

Built by [@andres](https://thehumanglitchreport.com)
