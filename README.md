# Emporium Stone Marmoraria — landing page

Site da Emporium Stone (Rua São Miguel, 208 · Varadouro, João Pessoa-PB).
Página única em HTML/CSS/JS, sem build: basta publicar a raiz (Vercel, Netlify ou GitHub Pages).

- `index.html` — a página (o prompt do projeto está comentado no topo)
- `img/` — fotos recortadas, logo, favicon, capa de compartilhamento (`og-capa.jpg`) e textura de mármore (`marmore-fundo.jpg`, trocar pelo wallpaper definitivo)
- `video/` — vídeos em 4:5 com pôsteres
- `BRIEFING.md` — briefing, chamadas, vibe spec e prompt

## Segurança e auditoria (checklist antes do lançamento)
- `vercel.json`: CSP sem script inline, HSTS, X-Frame-Options/frame-ancestors, nosniff, Referrer-Policy, Permissions-Policy, COOP/CORP.
- `.vercelignore`: arquivos `.md` (briefing e este README) não vão para o ar.
- Sem formulários, cookies, Analytics ou bibliotecas de terceiros; fontes hospedadas no próprio site (`fonts/`, licença OFL).
- `404.html`, `privacidade.html` (LGPD), `robots.txt`, `sitemap.xml`, `.well-known/security.txt`, dados estruturados LocalBusiness.
