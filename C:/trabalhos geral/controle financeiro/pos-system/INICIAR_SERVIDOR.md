# 🚀 Como Iniciar o Servidor

## ⚠️ Se aparecer "Conexão recusada"

O servidor não está rodando. Siga estes passos:

---

## ✅ SOLUÇÃO RÁPIDA:

### 1. Abra o PowerShell ou Terminal

### 2. Navegue até a pasta do projeto:
```powershell
cd "c:\trabalhos geral\controle financeiro\pos-system"
```

### 3. Inicie o servidor:
```bash
npm run dev
```

### 4. Aguarde a mensagem:
```
✓ Ready in Xs
○ Local: http://localhost:3000
```

### 5. Acesse no navegador:
```
http://localhost:3000
```

---

## 🔍 Verificar se o Servidor Está Rodando:

### No PowerShell:
```powershell
Get-NetTCPConnection -LocalPort 3000
```

Se aparecer algo, o servidor está rodando!

### Ou verifique processos Node:
```powershell
Get-Process -Name node
```

---

## ❌ Se Der Erro:

### Erro: "npm não é reconhecido"
- Instale o Node.js: https://nodejs.org

### Erro: "Cannot find module"
```bash
cd pos-system
npm install
npm run dev
```

### Erro: "Port 3000 already in use"
```powershell
# Pare o processo na porta 3000
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
# Depois inicie novamente
npm run dev
```

---

## 📝 Comandos Úteis:

### Parar o servidor:
- No terminal onde está rodando, pressione **Ctrl+C**

### Reiniciar:
```bash
# Pare (Ctrl+C) e depois:
npm run dev
```

### Limpar cache e reiniciar:
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

---

## ✅ Checklist:

- [ ] Está na pasta `pos-system`
- [ ] Executou `npm run dev`
- [ ] Apareceu a mensagem "Ready"
- [ ] Acessou http://localhost:3000
- [ ] Página carregou

---

**O servidor deve estar rodando agora! Acesse http://localhost:3000** 🚀



