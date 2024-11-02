<script lang="ts">
	let name = $state<string>('');
	let phone = $state<string>('');
	let email = $state<string>('');
	let visitDate = $state<string>('');
	let time = $state<string>('10:00');
	let guests = $state<string>('Столик на двох');
	let message = $state<string>('');
</script>

<section class="py-10 text-center">
	<h2 class="text-2xl font-semibold">Забронювати столик</h2>
	<form class="mx-auto mt-6 max-w-md space-y-4">
		<input
			type="text"
			placeholder="Ваше Ім'я"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			bind:value={name}
		/>
		<input
			type="tel"
			placeholder="Номер телефону"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			bind:value={phone}
		/>
		<input
			type="email"
			placeholder="Email"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			bind:value={email}
		/>
		<input
			type="date"
			placeholder="Дата візиту"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			bind:value={visitDate}
		/>
		<select
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			bind:value={time}
		>
			<option value="10:00">10:00</option>
			<option value="11:00">11:00</option>
			<option value="12:00">12:00</option>
			<option value="13:00">13:00</option>
			<option value="14:00">14:00</option>
		</select>
		<select
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			bind:value={guests}
		>
			<option value="Столик на двох">Столик на двох</option>
			<option value="На 4 персони">На 4 персони</option>
			<option value="На 6 персон">На 6 персон</option>
			<option value="На 8 персон">На 8 персон</option>
			<option value="Більше ніж 8">Більше ніж 8</option>
			<option value="Кейтеринг">Кейтеринг</option>
		</select>
		<textarea
			placeholder="Примітки"
			class="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
			rows="3"
			bind:value={message}
		></textarea>
		<button
			type="submit"
			class="w-full rounded bg-primary px-6 py-2 text-white hover:bg-primary/80"
		>
			Надіслати
		</button>
	</form>
</section>
