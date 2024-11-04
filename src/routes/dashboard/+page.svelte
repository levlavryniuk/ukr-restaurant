<script lang="ts">
	import { format } from 'date-fns';
	import type { PageServerData } from './$types';
	let { data }: { data: PageServerData } = $props();

	const ukrMonths: { [key: string]: string } = {
		Jan: 'січня',
		Feb: 'лютого',
		Mar: 'березня',
		Apr: 'квітня',
		May: 'травня',
		Jun: 'червня',
		Jul: 'липня',
		Aug: 'серпня',
		Sep: 'вересня',
		Oct: 'жовтня',
		Nov: 'листопада',
		Dec: 'грудня'
	};

	const formatDateTime = (date: string, time: string) => {
		const dateObj = new Date(`${date}T${time}`);
		const englishFormat = format(dateObj, 'dd MMM, yyyy HH:mm');

		// Replace English month with Ukrainian
		for (const [eng, ukr] of Object.entries(ukrMonths)) {
			if (englishFormat.startsWith(eng)) {
				return englishFormat.replace(eng, ukr);
			}
		}
		return englishFormat;
	};
</script>

<!-- Rest of your template remains exactly the same -->
<div class="mx-auto mt-40 w-full max-w-4xl p-2 sm:p-6">
	<h2 class="mb-8 font-cormorant text-3xl text-mainText">Reservations</h2>
	<div class="space-y-4">
		{#if !data.reservations}
			<div>Reservations not found</div>
		{:else}
			{#each data.reservations as reservation (reservation.id)}
				<div class="rounded-lg border border-gray-200 bg-background p-6 shadow-md">
					<div class="flex items-start justify-between">
						<div>
							<h3 class="font-cormorant text-2xl font-semibold text-mainText">
								{reservation.name}
							</h3>
							<div class="mt-2 space-y-1 text-xl">
								<p class="font-semibold text-mainText">
									<span class="font-medium text-secondaryText">Date & Time: </span>
									{formatDateTime(reservation.date, reservation.time)}
								</p>
								<p class="text-secondaryText">
									<span class="font-medium">People: </span>
									{reservation.people}
								</p>
								<p class="text-secondaryText">
									<span class="font-medium">Phone: </span>
									{reservation.phone}
								</p>
								<p class="text-secondaryText">
									<span class="font-medium">Email: </span>
									{reservation.email}
								</p>
								{#if reservation.notes}
									<p class="text-secondaryText">
										<span class="font-medium">Notes: </span>
										{reservation.notes}
									</p>
								{/if}
							</div>
						</div>
						<div class="text-sm text-secondaryText">
							ID: {reservation.id}
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

