import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function PUT(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { name, description } = await request.json()
    const categoryId = parseInt(params.categoryId)
    
    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Nome da categoria é obrigatório' },
        { status: 400 }
      )
    }

    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('categories')
      .update({
        name: name.trim(),
        description: description || null,
      })
      .eq('id', categoryId)
      .select()
      .single()

    if (error) {
      if (error.code === '23505') { // Unique violation
        return NextResponse.json(
          { error: 'Esta categoria já existe' },
          { status: 400 }
        )
      }
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      category: data,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erro ao atualizar categoria' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const categoryId = parseInt(params.categoryId)
    const supabase = createClient()
    
    // Verificar se há produtos usando esta categoria
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('id')
      .eq('category', categoryId.toString())
      .limit(1)

    if (productsError) {
      return NextResponse.json(
        { error: 'Erro ao verificar produtos' },
        { status: 400 }
      )
    }

    if (products && products.length > 0) {
      return NextResponse.json(
        { error: 'Não é possível excluir categoria que possui produtos associados' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', categoryId)

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Categoria excluída com sucesso',
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erro ao excluir categoria' },
      { status: 500 }
    )
  }
}

