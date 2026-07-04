# Architecture

## Layers

- app: application startup
- core: shared infrastructure
- domain: business models and interfaces
- integrations: external accounting platforms
- services: business orchestration
- tools: MCP tools

## Dependency Rule

app
↓
services
↓
domain
↑
integrations

The domain layer must not depend on integrations.