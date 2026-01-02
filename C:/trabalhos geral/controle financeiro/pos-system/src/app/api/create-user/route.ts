import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()
    
    const supabase = createClient()
    
    // Criar usuário
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (authError) {
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      )
    }

    if (authData.user) {
      // Criar registro na tabela customers se necessário
      const { error: customerError } = await supabase
        .from('customers')
        .insert({
          name: name || email.split('@')[0],
          email: email,
          user_uid: authData.user.id,
          status: 'active',
        })

      return NextResponse.json({
        success: true,
        message: 'Usuário criado com sucesso!',
        user: authData.user,
      })
    }

    return NextResponse.json(
      { error: 'Erro ao criar usuário' },
      { status: 500 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erro desconhecido' },
      { status: 500 }
    )
  }
}


