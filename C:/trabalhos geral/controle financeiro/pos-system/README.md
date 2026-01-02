# Sistema de Controle Financeiro - Oliveira's Semi Jóias & Folheados

Sistema completo de gestão financeira e ponto de venda desenvolvido com Next.js 14, Supabase e TypeScript.

## 🚀 Funcionalidades

- ✅ Autenticação de usuários (Login/Cadastro)
- ✅ Painel administrativo completo
- ✅ Gestão de produtos com categorias
- ✅ Gestão de clientes
- ✅ Gestão de pedidos
- ✅ Ponto de Venda (POS)
- ✅ Controle de caixa e transações
- ✅ Dashboard com gráficos e métricas
- ✅ Interface dark com tema dourado premium

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Supabase** - Backend e autenticação
- **Tailwind CSS** - Estilização
- **Recharts** - Gráficos
- **Radix UI** - Componentes acessíveis

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Supabase

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd pos-system
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais do Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse `http://localhost:3000`

## 🗄️ Configuração do Banco de Dados

Execute os scripts SQL no Supabase para criar as tabelas:

1. **Tabela de categorias**: Execute `CRIAR_TABELA_CATEGORIAS.sql` no SQL Editor do Supabase
2. As outras tabelas (products, customers, orders, etc.) serão criadas automaticamente pelo sistema

## 🚀 Deploy no Vercel

### 1. Conecte o repositório GitHub ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório do GitHub

### 2. Configure as variáveis de ambiente

No painel do Vercel, adicione as seguintes variáveis de ambiente:

```
NEXT_PUBLIC_SUPABASE_URL=https://uuunnssmuelyndymzamo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF
```

### 3. Deploy

O Vercel fará o deploy automaticamente após o push para o repositório.

## 📁 Estrutura do Projeto

```
pos-system/
├── src/
│   ├── app/              # Rotas e páginas Next.js
│   │   ├── admin/        # Painel administrativo
│   │   ├── login/        # Página de login
│   │   └── api/          # API routes
│   ├── components/       # Componentes React
│   │   ├── ui/           # Componentes UI reutilizáveis
│   │   └── admin-layout.tsx
│   └── lib/              # Utilitários e configurações
│       └── supabase/     # Configuração Supabase
├── public/               # Arquivos estáticos
└── package.json
```

## 🔐 Autenticação

O sistema usa Supabase Auth para autenticação. Para criar um usuário:

1. Use a página de cadastro no sistema
2. Ou execute o script `CRIAR_USUARIO.ps1` (Windows PowerShell)
3. Ou crie manualmente no painel do Supabase

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa linter

## 🎨 Personalização

- **Logo**: Adicione sua logo em `public/logo.png`
- **Cores**: Edite `src/app/globals.css` para personalizar o tema
- **Categorias**: Gerencie categorias de produtos na página de Produtos

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

## 📄 Licença

Este projeto é privado e de uso exclusivo.
