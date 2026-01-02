# 🔄 Reiniciar o Servidor

## ⚠️ IMPORTANTE: Após configurar o .env.local

O Next.js **NÃO lê** o arquivo `.env.local` automaticamente se o servidor já estava rodando.

**Você PRECISA reiniciar o servidor!**

---

## 📝 Passo a Passo:

### 1. Parar o servidor atual:
- No terminal onde o servidor está rodando
- Pressione **Ctrl+C**
- Aguarde até parar completamente

### 2. Verificar o arquivo .env.local:
- Abra a pasta `pos-system`
- Verifique se existe o arquivo `.env.local`
- Se não existir, crie com este conteúdo:

```
NEXT_PUBLIC_SUPABASE_URL=https://uuunnssmuelyndymzamo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF
```

### 3. Iniciar o servidor novamente:
```bash
cd pos-system
npm run dev
```

### 4. Aguardar:
- O servidor vai compilar
- Aguarde a mensagem: `✓ Ready in Xs`
- Deve mostrar: `○ Local: http://localhost:3000`

### 5. Testar:
- Acesse: http://localhost:3000
- A mensagem de aviso deve desaparecer
- Os botões devem estar habilitados

---

## ✅ Se ainda aparecer o aviso:

1. **Verifique o arquivo .env.local:**
   - Deve estar na pasta `pos-system` (não em subpastas)
   - Deve ter exatamente essas duas linhas
   - Sem espaços extras no início/fim

2. **Verifique se o servidor foi reiniciado:**
   - Pare completamente (Ctrl+C)
   - Inicie novamente (npm run dev)

3. **Limpe o cache do Next.js:**
   ```bash
   cd pos-system
   rm -rf .next
   npm run dev
   ```
   (No Windows PowerShell: `Remove-Item -Recurse -Force .next`)

---

## 🎯 Depois de reiniciar:

O sistema deve funcionar normalmente:
- ✅ Sem aviso de configuração
- ✅ Botões habilitados
- ✅ Login funcionando
- ✅ Dashboard acessível

---

**Lembre-se: SEMPRE reinicie o servidor após alterar o .env.local!** 🔄

