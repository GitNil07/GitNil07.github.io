
# BPO AI Collections Agent — V1 (Claude-Native)

## Overview

This project demonstrates a lightweight AI agent designed for BPO-style financial collections workflows.

The system simulates real-world customer interaction scenarios such as:
- Overdue EMI reminders
- NACH payment failures
- Escalation handling
- Multilingual conversations (including Hindi)

---

## Architecture (V1)

**Flow:**

Browser → React/Vite Frontend → Anthropic Claude API → Response to UI

---

## Design Choice: Claude-Native

This system is intentionally built using **Anthropic Claude** as the primary model.

### Rationale

- Strong long-context reasoning for financial conversations  
- Better handling of sensitive and regulated interactions  
- Safer conversational tone for customer-facing workflows  
- Ability to manage escalation scenarios effectively  
- Multilingual capability  

Claude serves as both:
- reasoning engine  
- response generator  

---

## Trade-offs

- API key exposure in frontend (acceptable for demo)  
- No backend orchestration layer  
- Limited logging and monitoring  

---

## Future Evolution (V2)

The system is designed to evolve into a **multi-model orchestration architecture**.

Planned routing:

- Claude → sensitive, high-context, regulated conversations  
- OpenAI → classification, extraction, structured outputs  

```javascript
// V2 placeholder
function routeRequest(taskType) {
  if (taskType === "conversation") return "claude";
  if (taskType === "classification") return "openai";
}

