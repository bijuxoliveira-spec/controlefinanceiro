# 🚀 Passo a Passo para Configurar o Sistema

## ✅ 1. Configurar o arquivo .env.local

**Localização:** `pos-system/.env.local`

**Conteúdo:**
```
NEXT_PUBLIC_SUPABASE_URL=https://uuunnssmuelyndymzamo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_secret_b-a_8WalrwALIJ2qNiyzhw_bec6Qx8E
```

**Como fazer:**
1. Abra a pasta `pos-system`
2. Crie ou edite o arquivo `.env.local`
3. Cole as duas linhas acima
4. Salve o arquivo

---

## ⚠️ 2. IMPORTANTE: Verificar a Anon Key

A chave fornecida (`sb_secret_b-a_8WalrwALIJ2qNiyzhw_bec6Qx8E`) parece ser uma **Service Role Key**, mas para o frontend precisamos da **Anon Key** (chave pública).

### Como pegar a Anon Key correta:

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Na seção **Project API keys**, procure por:
   - **`anon` `public`** ← Esta é a que precisamos!
   - (NÃO use a `service_role` que é secreta)

5. Se a chave for diferente, substitua no `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_correta_aqui
   ```

---

## 📊 3. Executar o Schema SQL

1. **Acesse o Supabase Dashboard:**
   - https://supabase.com/dashboard
   - Faça login
   - Selecione seu projeto: `uuunnssmuelyndymzamo`

2. **Abra o SQL Editor:**
   - No menu lateral esquerdo, clique em **SQL Editor**
   - Clique no botão **New Query**

3. **Cole o SQL:**
   - Abra o arquivo `schema.sql` na pasta `pos-system`
   - Copie TODO o conteúdo
   - Cole no SQL Editor do Supabase

4. **Execute:**
   - Clique no botão **Run** (ou pressione `Ctrl+Enter`)
   - Aguarde a mensagem de sucesso

5. **Verificar:**
   - Vá em **Table Editor** no menu lateral
   - Você deve ver 6 tabelas criadas:
     - ✅ products
     - ✅ customers
     - ✅ orders
     - ✅ order_items
     - ✅ payment_methods
     - ✅ transactions

---

## 🔄 4. Reiniciar o Servidor

Após configurar tudo:

1. **Pare o servidor atual:**
   - No terminal, pressione `Ctrl+C`

2. **Inicie novamente:**
   ```bash
   cd pos-system
   npm run dev
   ```

3. **Aguarde a mensagem:**
   ```
   ✓ Ready in Xs
   ○ Local: http://localhost:3000
   ```

---

## 🎯 5. Testar o Sistema

1. **Acesse:** http://localhost:3000

2. **Criar conta:**
   - Digite um email (ex: teste@email.com)
   - Digite uma senha (mínimo 6 caracteres)
   - Clique em **Sign up**

3. **Verificar email (se necessário):**
   - O Supabase pode enviar um email de confirmação
   - Verifique sua caixa de entrada
   - Clique no link de confirmação

4. **Fazer login:**
   - Use o email e senha criados
   - Clique em **Log in**

5. **Acessar o Dashboard:**
   - Se tudo estiver certo, você verá o dashboard com gráficos!

---

## ❌ Se der erro:

### Erro de autenticação:
- Verifique se a **Anon Key** está correta (não a Service Role)
- Verifique se o arquivo `.env.local` está salvo corretamente
- Reinicie o servidor após alterar o `.env.local`

### Erro de banco de dados:
- Verifique se executou o `schema.sql` completamente
- Verifique se todas as 6 tabelas foram criadas
- Tente executar o SQL novamente

### Erro de conexão:
- Verifique se a URL do Supabase está correta
- Verifique sua conexão com a internet
- Verifique se o projeto Supabase está ativo

---

## 📝 Credenciais Guardadas:

- **URL:** https://uuunnssmuelyndymzamo.supabase.co
- **Database Password:** ivTYVxjmrrVO1OIB
- **Service Role Key:** sb_secret_b-a_8WalrwALIJ2qNiyzhw_bec6Qx8E

---

## ✅ Checklist Final:

- [ ] Arquivo `.env.local` criado e configurado
- [ ] Anon Key verificada e correta
- [ ] Schema SQL executado no Supabase
- [ ] Todas as 6 tabelas criadas
- [ ] Servidor reiniciado
- [ ] Conta criada no sistema
- [ ] Login funcionando
- [ ] Dashboard acessível

---

**Boa sorte! 🚀**

