# Script para criar o arquivo .env.local
$envPath = Join-Path $PSScriptRoot ".env.local"

$content = @"
NEXT_PUBLIC_SUPABASE_URL=https://uuunnssmuelyndymzamo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF
"@

$content | Out-File -FilePath $envPath -Encoding utf8 -NoNewline

Write-Host "✓ Arquivo .env.local criado com sucesso!"
Write-Host ""
Write-Host "Conteúdo:"
Get-Content $envPath
Write-Host ""
Write-Host "Agora reinicie o servidor: npm run dev"

