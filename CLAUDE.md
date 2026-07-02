# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Contexto do projeto

Site institucional simples da **Leanwork** em HTML + CSS + JS puro (sem frameworks, sem build step).
Os assets de marca estão na raiz e devem ser consultados antes de escrever qualquer código:
- `leanwork-brand-guide.pdf` — guia visual: cores, tipografia, logo, tom
- `leanwork-institucional-2026.docx` — conteúdo: textos, proposta de valor, seções

## Stack

- HTML5, CSS3, JavaScript vanilla
- Sem bundler, sem framework, sem dependências de build
- CDNs permitidos para fontes e ícones (ex: Google Fonts, Font Awesome)

## Estrutura esperada

```
index.html       # página principal
style.css        # estilos globais
script.js        # interações (menu mobile, scroll, etc.) — só se necessário
assets/          # imagens, ícones, logo exportados do brand guide
```

## Idioma

Português em toda comunicação com o usuário.
