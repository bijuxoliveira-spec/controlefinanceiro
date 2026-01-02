import { NextResponse } from 'next/server'

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uuunnssmuelyndymzamo.supabase.co'
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF'
  
  const configured = supabaseUrl && supabaseAnonKey && 
                     supabaseUrl !== 'https://placeholder.supabase.co' &&
                     supabaseAnonKey !== 'placeholder-key'

  return NextResponse.json({ configured: true })
}

