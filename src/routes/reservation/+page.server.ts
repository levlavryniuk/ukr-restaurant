import { supabase } from "@/lib/supabaseClient";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  default: async (e) => {
    const form = await e.request.formData();
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const date = form.get("date");
    const time = form.get("time");
    const notes = form.get("notes");
    const people = form.get("people")


    try {
      await supabase.from("reservations").insert({
        name,
        email,
        phone,
        date,
        time,
        people,
        notes,
      })

      return { success: true, message: "Reservation added successfully" };
    } catch (error) {
      console.error("Error adding reservation:", error);
      return { success: false, message: "Failed to add reservation" };
    }
  }
} satisfies Actions;

