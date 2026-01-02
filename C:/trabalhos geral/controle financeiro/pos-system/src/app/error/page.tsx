export default function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mx-auto w-full max-w-md space-y-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-6xl">❌</div>
          <h1 className="text-3xl font-bold">Erro ao Fazer Login</h1>
          <p className="text-muted-foreground">
            Ocorreu um erro ao tentar fazer login ou criar conta.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-left">
          <h2 className="mb-4 text-lg font-semibold">Possíveis causas:</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Email ou senha incorretos</li>
            <li>Conta ainda não foi criada (tente &quot;Cadastrar&quot; primeiro)</li>
            <li>Rate limit - muitas tentativas de signup (aguarde alguns minutos)</li>
            <li>Problema de conexão com o Supabase</li>
            <li>Email não foi confirmado (verifique sua caixa de entrada)</li>
          </ul>
          <div className="mt-4 p-3 bg-muted rounded">
            <p className="text-sm font-semibold mb-2">💡 Solução alternativa:</p>
            <p className="text-xs">Execute o script <code className="bg-background px-1 rounded">CRIAR_USUARIO.ps1</code> na pasta raiz do projeto para criar um usuário diretamente via API.</p>
          </div>
        </div>
        <div className="space-x-4">
          <a 
            href="/login" 
            className="inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Tentar Novamente
          </a>
        </div>
      </div>
    </div>
  )
}