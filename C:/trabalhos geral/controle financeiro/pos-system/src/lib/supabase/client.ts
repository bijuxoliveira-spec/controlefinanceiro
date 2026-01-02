import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uuunnssmuelyndymzamo.supabase.co'
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_SCT36vcY2d48yXLue5xs9Q_ugF7fCKF'
  
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}