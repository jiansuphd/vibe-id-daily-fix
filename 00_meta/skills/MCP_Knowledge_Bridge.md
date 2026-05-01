# 🌉 MCP Knowledge Bridge (SOP)

**Purpose:** Synchronize strategic context between the VibeID Daily vault and external Model Context Protocol (MCP) servers (e.g., a local Obsidian research vault).

## 🛠️ Prerequisites
- [ ] Obsidian Local REST API plugin installed and active.
- [ ] `obsidian-mcp-server` configured in Gemini CLI.
- [ ] API Key stored in Gemini CLI configuration (not in the vault).

## 🚀 Workflow

### 1. External Discovery
Run a semantic search on your external vault to find related ID research.
> **Prompt:** "Use the Obsidian MCP server to search for 'UDL implementation gaps' in my local research vault. Extract the top 3 insights."

### 2. Contextual Injection
Inject the external findings into a new daily transmission.
> **Prompt:** "Read Day 32 transmission. Based on the MCP search results, add a section on 'Cross-Vault Alignment' that bridges my local notes with this pointer."

### 3. Automated Synthesis
Use the MCP server to update your local vault's MOC based on the daily pointers here.
> **Prompt:** "Use the Obsidian MCP server to append a link to [VibeID Daily Day 32] in my local 'ID Trends' MOC."

## 🛡️ Guardrails
- **Security:** NEVER commit your MCP API keys to this public repository.
- **Privacy:** Only pull high-signal snippets from your external vault; do not mirror sensitive or personal data.
- **Validation:** Always verify that the link generated in the external vault is valid.

---
**Backlinks:** [Root MOC](../../root_MOC.md) | [Meta MOC](../00_meta_MOC.md)
