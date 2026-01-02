# 🔧 Configuração do Supabase

## ✅ Variáveis Configuradas

O arquivo `.env.local` foi configurado com:
- **URL:** https://uuunnssmuelyndymzamo.supabase.co
- **Anon Key:** Configurada

## ⚠️ IMPORTANTE: Verificar a Anon Key

A chave fornecida parece ser uma **Service Role Key** (secret), mas para o frontend precisamos da **Anon Key** (chave pública).

### Como pegar a Anon Key correta:

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Na seção **Project API keys**, copie a chave **`anon` `public`** (não a `service_role`)

### Se a chave atual não funcionar:

1. Substitua no arquivo `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_aqui
   ```

## 📊 Executar o Schema SQL

1. No Supabase Dashboard, vá em **SQL Editor**
2. Clique em **New Query**
3. Cole o conteúdo do arquivo `schema.sql`
4. Clique em **Run** (ou pressione Ctrl+Enter)

## 🔄 Reiniciar o Servidor

Após configurar, reinicie o servidor:
```bash
cd pos-system
npm run dev
```

## ✅ Testar

1. Acesse: http://localhost:3000
2. Tente fazer login ou criar uma conta
3. Se funcionar, você verá o dashboard!

---

**Database Password:** ivTYVxjmrrVO1OIB (guardado para referência)

