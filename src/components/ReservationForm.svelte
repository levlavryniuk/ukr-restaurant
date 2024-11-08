<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<section class="py-10 text-center">
	<h2 class="text-2xl font-semibold">Забронювати столик</h2>
	<form method="POST" use:enhance action="/reservation" class="mx-auto mt-6 max-w-md space-y-4">
		<input
			type="text"
			name="name"
			placeholder="Ваше Ім'я"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
		/>
		<input
			type="tel"
			name="phone"
			placeholder="Номер телефону"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
		/>
		<input
			type="date"
			name="date"
			placeholder="Дата візиту"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
		/>
		<select name="time" class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none">
			<option value="10:00">10:00</option>
			<option value="11:00">11:00</option>
			<option value="12:00">12:00</option>
			<option value="13:00">13:00</option>
			<option value="14:00">14:00</option>
		</select>
		<input
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			type="number"
			name="people"
			placeholder="Кількість людей"
		/>
		<textarea
			name="notes"
			placeholder="Примітки"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			rows="3"
		></textarea>
		<button
			type="submit"
			class="w-full rounded bg-primary px-6 py-2 text-white hover:bg-primary/80"
		>
			Надіслати
		</button>
	</form>
</section>
