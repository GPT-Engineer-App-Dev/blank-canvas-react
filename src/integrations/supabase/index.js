import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };

/* supabase integration types

// TYPES SECTION

Event // table: events
    id: number
    created_at: string
    name: string
    date: string
    description: string
    venue_id: number
    venue?: Venue // available if .select('*,venue(*)') was done

Comment // table: comments
    id: number
    created_at: string
    content: string
    event_id: number
    event?: Event // available if .select('*,event(*)') was done

Venue // table: venues
    id: number
    name: string
    location: string
    description: string
    created_at: string
    updated_at: string
    events?: Event[] // available if .select('*,events(*)') was done

*/