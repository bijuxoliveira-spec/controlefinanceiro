# 🖼️ Como Adicionar a Logo no Sistema

## 📁 Passo 1: Colocar a Imagem da Logo

1. **Localize a pasta `public`:**
   - Vá até: `pos-system/public/`
   - Caminho completo: `c:\trabalhos geral\controle financeiro\pos-system\public\`

2. **Adicione sua imagem:**
   - Coloque o arquivo da logo com o nome: **`logo.png`**
   - ⚠️ **IMPORTANTE:** O nome deve ser exatamente `logo.png` (minúsculas)
   - Se sua imagem tiver outro nome, renomeie para `logo.png`

3. **Localização completa:**
   ```
   pos-system/public/logo.png
   ```

## 🎨 Formatos Aceitos

- **PNG** (recomendado - com ou sem transparência)
- **JPG/JPEG** (se não tiver transparência)
- **SVG** (melhor qualidade, mas precisa ajustar o código)
- **WEBP** (precisa ajustar o código)

**Nota:** Se usar outro formato além de PNG, me avise para ajustar o código.

## 📐 Tamanhos Recomendados

- **Para tela de login:** 600x300px ou maior (proporção 2:1)
- **Para header admin:** 240x120px ou maior
- O sistema ajusta automaticamente o tamanho mantendo a proporção

## ✅ Após Adicionar

1. ✅ Salve o arquivo na pasta `public/` com o nome `logo.png`
2. ✅ O sistema detectará automaticamente
3. ✅ A logo aparecerá na tela de login e no header do admin
4. ✅ Se o servidor estiver rodando, recarregue a página (F5)

## 🔄 Se a Logo Não Aparecer

1. ✅ Verifique se o nome está correto: `logo.png` (não `Logo.png` ou `LOGO.PNG`)
2. ✅ Verifique se está na pasta correta: `pos-system/public/logo.png`
3. ✅ Reinicie o servidor Next.js (Ctrl+C e depois `npm run dev`)
4. ✅ Limpe o cache do navegador (Ctrl+Shift+R ou Ctrl+F5)
5. ✅ Verifique se o arquivo não está corrompido

## 📝 Exemplo de Estrutura

```
pos-system/
  └── public/
      ├── logo.png          ← SUA LOGO AQUI
      ├── next.svg
      └── placeholder-user.jpg
```

