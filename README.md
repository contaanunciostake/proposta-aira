# AIra - Proposta de Investimento

Apresentação interativa da proposta de investimento da AIra, sua assistente de vendas com IA que nunca dorme.

## 🚀 Deploy no Render.com

### Passo 1: Subir para o GitHub

```bash
cd aira-proposta
git add .
git commit -m "Initial commit - AIra Investment Proposal"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/aira-proposta.git
git push -u origin main
```

### Passo 2: Configurar no Render.com

1. Acesse [https://render.com](https://render.com) e faça login
2. Clique em **"New +"** → **"Static Site"**
3. Conecte seu repositório GitHub
4. Configure o deploy:
   - **Name:** `aira-proposta` (ou o nome que preferir)
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Clique em **"Create Static Site"**

### ✅ Pronto!

O Render.com vai:
- Instalar as dependências automaticamente
- Fazer o build da aplicação
- Gerar uma URL pública (ex: `https://aira-proposta.onrender.com`)
- Fazer deploy automático a cada push no GitHub

## 🖥️ Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:5173
```

## 📦 Build para Produção

```bash
npm run build
npm run preview
```

## 🛠️ Tecnologias

- **React 19** com TypeScript
- **Vite** - Build tool ultra-rápida
- **Tailwind CSS** (via classes inline)
- **Lucide React** - Ícones modernos
- **Render.com** - Hospedagem gratuita

## 📁 Estrutura

```
aira-proposta/
├── src/
│   ├── PropostaInvestimento.tsx  # Componente principal
│   ├── App.tsx                    # App wrapper
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Estilos globais
├── public/                        # Assets estáticos
├── package.json
└── README.md
```

## 🎯 Features

- ✅ 18 slides profissionais
- ✅ Navegação com teclado (← →)
- ✅ Design responsivo
- ✅ Animações suaves
- ✅ Dados financeiros detalhados
- ✅ Projeções realistas
- ✅ 100% TypeScript

## 📝 Customização

Para editar o conteúdo, modifique o arquivo `src/PropostaInvestimento.tsx`.

Os dados dos slides estão organizados no array `slides` (linha 7).

## 🆘 Suporte

Se tiver problemas com o deploy:
1. Verifique os logs no painel do Render.com
2. Confirme que o `package.json` está correto
3. Teste o build localmente: `npm run build`

---

**Desenvolvido com ❤️ para Silas - Annex Vistorias**
