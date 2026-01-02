# 👤 Criar Usuário Juliene

## ✅ Opção 1: Via Interface (Mais Fácil)

1. **Acesse:** http://localhost:3000
2. **Na tela de login, clique em "Sign up"**
3. **Preencha:**
   - Email: `juliene@teste.com` (ou qualquer email)
   - Password: `juliene123` (ou qualquer senha com 6+ caracteres)
4. **Clique em "Sign up"**
5. **Pronto!** O usuário será criado

---

## ✅ Opção 2: Via API (Automático)

Execute este comando no PowerShell:

```powershell
$body = @{
    email = "juliene@teste.com"
    password = "juliene123"
    name = "Juliene"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/create-user" -Method POST -Body $body -ContentType "application/json"
```

---

## ✅ Opção 3: Direto no Supabase

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **Authentication** → **Users**
4. Clique em **Add User** → **Create new user**
5. Preencha:
   - Email: `juliene@teste.com`
   - Password: `juliene123`
   - Auto Confirm User: ✅ (marcar)
6. Clique em **Create User**

---

## 📝 Credenciais Sugeridas:

- **Email:** juliene@teste.com
- **Senha:** juliene123
- **Nome:** Juliene

---

## 🎯 Depois de Criar:

1. Acesse: http://localhost:3000
2. Faça login com as credenciais criadas
3. Você verá o dashboard!

---

**A forma mais fácil é usar a interface - apenas clique em "Sign up" na tela de login!** ✅


