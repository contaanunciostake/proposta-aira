# Como Fazer Deploy no Render.com

## Passo a Passo para Subir a Apresentação AIra

### 1. Criar Conta no Render
- Acesse: https://render.com
- Clique em "Get Started" ou "Sign Up"
- Pode usar sua conta do GitHub pra facilitar

### 2. Conectar o Repositório
1. No dashboard do Render, clique em **"New +"**
2. Selecione **"Static Site"**
3. Conecte sua conta do GitHub (se ainda não conectou)
4. Procure pelo repositório: **contaanunciostake/proposta-aira**
5. Clique em **"Connect"**

### 3. Configurar o Deploy

Preencha as configurações assim:

- **Name**: `proposta-aira` (ou o nome que você quiser)
- **Branch**: `main`
- **Root Directory**: deixe vazio
- **Build Command**:
  ```
  npm install && npm run build
  ```
- **Publish Directory**:
  ```
  dist
  ```

### 4. Variáveis de Ambiente (Opcional)
Não precisa configurar nenhuma variável de ambiente pra esse projeto.

### 5. Deploy Automático
1. Clique em **"Create Static Site"**
2. O Render vai começar a fazer o build automaticamente
3. Aguarde uns 3-5 minutos (primeira vez demora mais)
4. Quando terminar, vai aparecer "Live" com um ícone verde

### 6. Acessar a Apresentação
- O Render vai gerar uma URL tipo: `https://proposta-aira.onrender.com`
- Você pode personalizar essa URL nas configurações
- Ou até conectar um domínio próprio se tiver

## Deploy Automático

Toda vez que você fizer `git push` pro repositório GitHub, o Render vai:
- Detectar as mudanças automaticamente
- Fazer um novo build
- Atualizar o site automaticamente

Não precisa fazer nada manual! 🚀

## Solução de Problemas

### Build Falhou?
- Verifique se o `Build Command` está correto: `npm install && npm run build`
- Verifique se o `Publish Directory` está como: `dist`

### Site não carrega?
- Aguarde o build terminar completamente (ícone verde "Live")
- Limpe o cache do navegador
- Tente abrir em uma aba anônima

### Imagens não aparecem?
- Verifique se a imagem `AIra_Logotipo.png` está na pasta `/public`
- O Vite copia automaticamente arquivos da pasta `public` pro build

## Comandos Úteis Localmente

Para testar antes de subir:

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Fazer build de produção
npm run build

# Testar o build localmente
npm run preview
```

## Contato de Suporte

Se tiver problemas:
- Discord do Render: https://discord.gg/render
- Documentação: https://render.com/docs/static-sites

---

**Feito com 💚 pela equipe Helix AI**
