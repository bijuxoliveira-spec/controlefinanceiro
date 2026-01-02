"use client"

import { signup, login } from "./actions";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const [errorMessage, setErrorMessage] = useState<string | null>(error)

  useEffect(() => {
    setErrorMessage(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Logo className="mb-4" />
          <h2 className="text-2xl font-bold text-white">Bem-vindo de volta</h2>
          <p className="text-amber-400/90">
            Digite seu email e senha para entrar.
          </p>
        </div>

        <Card className="border-amber-800/50 bg-gray-800/90 shadow-lg shadow-black/50 backdrop-blur-sm">
          <form>
            <CardContent className="space-y-4 mt-4">
              {errorMessage && (
                <div className="rounded-lg border border-destructive bg-destructive/10 p-3 text-sm text-destructive">
                  <p className="font-medium">Erro:</p>
                  <p>{errorMessage}</p>
                </div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-amber-400">Email</Label>
                <Input id="email" name="email" type="email" placeholder="seu@email.com" required className="border-amber-700/50 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-amber-400">Senha</Label>
                <Input id="password" name="password" type="password" required minLength={6} className="border-amber-700/50 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                href="#"
                className="text-sm text-amber-400/70 hover:text-amber-300"
                prefetch={false}
              >
                Esqueceu a senha?
              </Link>
              <div className="flex gap-2">
                <Button formAction={login} className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 text-white shadow-lg shadow-amber-900/50">Entrar</Button>
                <Button formAction={signup} variant="outline" className="border-amber-700/50 text-amber-400 hover:bg-amber-900/30 hover:border-amber-600">Cadastrar</Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
