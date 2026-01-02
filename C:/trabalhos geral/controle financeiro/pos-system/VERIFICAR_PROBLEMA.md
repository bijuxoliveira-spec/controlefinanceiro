# 🔍 Verificar Problema com o Servidor

## ⚠️ Se o servidor não inicia:

### 1. Verificar se está na pasta correta:
```powershell
cd "c:\trabalhos geral\controle financeiro\pos-system"
pwd  # ou Get-Location no PowerShell
```

### 2. Verificar se as dependências estão instaladas:
```powershell
# Se a pasta node_modules não existir:
npm install
```

### 3. Verificar se há erros no package.json:
```powershell
cat package.json  # ou Get-Content package.json
```

### 4. Tentar iniciar com mais informações:
```powershell
npm run dev -- --verbose
```

### 5. Verificar se a porta 3000 está livre:
```powershell
Get-NetTCPConnection -LocalPort 3000
```

Se estiver em uso, pare o processo:
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

### 6. Limpar e reinstalar:
```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm install
npm run dev
```

---

## 🆘 Se nada funcionar:

1. Verifique se o Node.js está instalado:
   ```powershell
   node --version
   npm --version
   ```

2. Se não estiver, instale: https://nodejs.org

3. Tente em uma nova janela do PowerShell (como Administrador)

---

**O servidor está sendo iniciado agora. Aguarde alguns segundos e tente acessar http://localhost:3000**



