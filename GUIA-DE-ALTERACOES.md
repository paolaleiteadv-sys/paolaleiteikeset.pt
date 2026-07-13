# GUIA DE ALTERAÇÕES — PAOLA LEITE EIKESET

Este projeto foi organizado para que as alterações mais comuns sejam feitas sem procurar em muitos ficheiros.

## 1. Alterar telefone, email, WhatsApp, Calendar ou Formspree
Abra: `src/content/settings.js`

Altere apenas o valor entre aspas. Não apague as vírgulas.

## 2. Alterar textos em português ou inglês
Abra: `src/content/siteContent.js`

- `pt` = português
- `en` = inglês

Use a pesquisa do GitHub para encontrar a frase atual.

## 3. Alterar áreas de atuação
Abra: `src/content/areas.js`

Cada área contém título, descrição curta e frase de abertura em PT e EN.

## 4. Acrescentar ou alterar artigos
Abra: `src/content/articles.js`

Duplique um bloco completo entre `{` e `}` e altere os campos.
A imagem deve ser colocada em: `public/images/articles/`

## 5. Trocar fotografias sem alterar código
Abra `public/images/` e substitua a imagem, mantendo exatamente o mesmo nome:

- `paola-hero.webp` — abertura da página
- `paola-about.webp` — Quem Sou
- `paola-approach.webp` — A nossa abordagem
- `paola-contact.webp` — Contacto
- `logo-oficial.png` — cabeçalho
- `logo-branco.png` — rodapé

## 6. Alterar cores
Abra: `src/styles/theme.css`

As cores estão todas no bloco `:root`.

## 7. Publicar no GitHub
1. Abra o repositório.
2. Carregue em **Add file → Upload files**.
3. Envie todo o conteúdo desta pasta.
4. Escreva: `Novo website`.
5. Carregue em **Commit changes**.
6. A Vercel deverá publicar automaticamente.

## 8. Regra de segurança
Antes de alterar vários ficheiros, faça uma alteração de cada vez e confirme o resultado. Não apague `package.json`, `vercel.json`, `index.html` nem a pasta `src`.
