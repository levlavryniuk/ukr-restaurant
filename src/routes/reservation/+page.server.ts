import { supabase } from "@/lib/supabaseClient";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  default: async (e) => {
    const form = await e.request.formData();
    const name = form.get("name");
    const phone = form.get("phone");
    const date = form.get("date");
    const time = form.get("time");
    const notes = form.get("notes");
    const people = form.get("people")
    const tableOption = form.get("tableOption")


    try {
      await supabase.from("reservations").insert({
        name,
        phone,
        date,
        time,
        people,
        notes,
        tableOption
      })

      return { success: true, message: "Reservation added successfully" };
    } catch (error) {
      console.error("Error adding reservation:", error);
      return { success: false, message: "Failed to add reservation" };
    }
  }
} satisfies Actions;

