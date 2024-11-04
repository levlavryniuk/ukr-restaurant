import { supabase } from "@/lib/supabaseClient"
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ()=>{
  try{
  const {data }= await supabase.from("reservations").select();

  return {reservations: data || []} 
  }catch (e){
    console.log(e)
    fail(500)
  }
}
