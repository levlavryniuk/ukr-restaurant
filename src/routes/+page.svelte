<script lang="ts">
	import ReservationForm from '../components/ReservationForm.svelte';
</script>

<div class="flex min-h-screen flex-col bg-background text-mainText">
	<!-- Header -->

	<!-- Welcome Section -->
	<section
		class="bg mt-40 flex h-fit flex-col items-center justify-center gap-6 bg-transparent bg-[url('/bg.jpg')] bg-fixed pb-40 pt-48 text-center"
	>
		<h1 class="font-marck text-4xl font-semibold text-background">Ласкаво просимо!</h1>
		<p class="mt-2 font-cormorant text-2xl font-semibold text-background">
			КУЛІНАРНІ ТРАДИЦІЇ, ЩО ВАРТІ ВАШОГО СМАКУ!
		</p>
		<button
			class=" bg-background px-8 py-2 text-2xl text-primary hover:bg-primary hover:text-background"
		>
			Резервувати стіл
		</button>
	</section>

	<!-- Menu Section -->
	<section class="py-20 text-center">
		<h2 class="text-5xl">МЕНЮ РЕСТОРАНУ</h2>
		<div class="mt-4 flex justify-center gap-4">
			<button
				onclick={() => {
					window.open('/src/lib/menu.pdf', '_blank');
				}}
				class="rounded border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white"
			>
				Головні страви
			</button>
		</div>
	</section>
	<section class="flex flex-col items-center bg-primary py-16 text-white">
		<p class="text-center text-4xl font-semibold">МИ ПРАЦЮЄМО</p>
		<p class="text-center text-xl">Кожен день з 12.00 по 22.00</p>
	</section>

	<!-- Reservation Form Section -->
	<div class="px-4">
		<ReservationForm />
	</div>

	<!-- Footer -->
</div>
