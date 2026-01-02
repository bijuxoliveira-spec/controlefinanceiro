# 🔐 Variáveis de Ambiente

## Para Desenvolvimento Local

Crie um arquivo `.env.local` na raiz do projeto `pos-system/`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://uuunnssmuelyndymzamo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF
```

## Para Vercel (Produção)

No painel do Vercel, adicione estas variáveis em **Settings > Environment Variables**:

### Production
```
NEXT_PUBLIC_SUPABASE_URL = https://uuunnssmuelyndymzamo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF
```

### Preview
```
NEXT_PUBLIC_SUPABASE_URL = https://uuunnssmuelyndymzamo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF
```

### Development
```
NEXT_PUBLIC_SUPABASE_URL = https://uuunnssmuelyndymzamo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF
```

⚠️ **IMPORTANTE**: 
- As variáveis que começam com `NEXT_PUBLIC_` são expostas ao cliente
- Não coloque chaves secretas do Supabase aqui
- Use apenas a chave anônima (anon key)

