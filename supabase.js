
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Taarifa za mradi wako wa Supabase
const supabaseUrl = 'https://mhglcqdmauflvmxfzswe.supabase.co';
const supabaseKey = 'sb_publishable_dBisUdMYLPbmZpQQN74Dkg_s3pX6n2S';

// Kuunganisha na kusafirisha Supabase client ili itumike kwenye index.html na sehemu zingine
export const supabase = createClient(supabaseUrl, supabaseKey);
