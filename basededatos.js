const supabaseUrl = 'https://bsngtztrosultorotjre.supabase.co';

// ⚠️ IMPORTANTE: Cambia esta clave por la 'anon / public' (la que empieza por eyJ...)
// No uses la que empieza por sb_secret_ porque es peligrosa.
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbmd0enRyb3N1bHRvcm90anJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1MzY3NzIsImV4cCI6MjEwNjExMjc3Mn0.Q-eRWAar3tl_ld4umWdQkZ2S6uhXlpFbNI5S9PwecVE';

// Cambiamos el nombre a clienteSupabase
const clienteSupabase = supabase.createClient(supabaseUrl, supabaseKey);

console.log("¡Conectado a Supabase desde mi archivo JS!", clienteSupabase);