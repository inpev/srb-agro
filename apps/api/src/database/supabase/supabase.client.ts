import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { AppConfig } from '../../config/app.config';

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!supabaseClient) {
    const config = AppConfig.getInstance();
    supabaseClient = createClient(
      config.get('SUPABASE_URL'),
      config.get('SUPABASE_SERVICE_KEY'),
    );
  }
  return supabaseClient;
}

export { SupabaseClient };