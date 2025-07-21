# GPT Toolkit Boilerplate 🧠⚙️

A monorepo boilerplate for building OpenAI-powered developer tools using Fastify (API), Next.js (UI), and reusable utility packages with PNPM workspaces.

---

## 🧱 Monorepo Structure

```

gpt-toolkit-boilerplate/
├── apps/
│   ├── api/      → Fastify backend (OpenAI, REST APIs)
│   └── web/      → Next.js frontend (minimal, optional UI)
├── packages/
│   └── utils/    → Shared GPT/OpenAI client + helpers

````

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
````

### 2. Set environment variables

Create `.env` inside `apps/api/`:

```
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Run the backend

```bash
pnpm --filter api dev
```

### 4. Run the frontend (Next.js)

```bash
pnpm --filter web dev
```

---

## 🧩 Tech Stack

* ⚡ Fastify (API server)
* 🧠 OpenAI SDK (GPT)
* ⚛️ Next.js (Frontend)
* 🧪 TypeScript
* 📦 PNPM Workspaces

---

## 📦 Shared Utilities

* `packages/utils/gptClients.ts` → OpenAI wrapper (chat completions, reusable logic)

---

## 🔐 Environment Setup

For `apps/api/`, add `.env` with:

```
OPENAI_API_KEY=sk-xxx
```

---

## 📌 License

MIT — free for personal and commercial use.