<script>
	import { fly } from 'svelte/transition';
</script>

<section class="mt-40 bg-background px-4 py-16">
	<div class="mx-auto max-w-4xl">
		<!-- Banquet Services -->
		<div class="mb-16 text-center">
			<h2 class="mb-6 font-marck text-4xl text-primary">Святкуйте з нами!</h2>
			<div class="relative">
				<div
					class="transform rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 hover:-rotate-1"
				>
					<h3 class="mb-4 font-cormorant text-2xl text-mainText">
						Банкети для будь-якого приводу:
					</h3>
					<ul class="space-y-3 text-secondaryText">
						<li class="flex items-center justify-center">
							<span class="mr-2 text-primary">❦</span>
							<span>Весілля</span>
						</li>
						<li class="flex items-center justify-center">
							<span class="mr-2 text-primary">❦</span>
							<span>Дні народження</span>
						</li>
						<li class="flex items-center justify-center">
							<span class="mr-2 text-primary">❦</span>
							<span>Корпоративи</span>
						</li>
						<li class="flex items-center justify-center">
							<span class="mr-2 text-primary">❦</span>
							<span>Сімейні свята</span>
						</li>
					</ul>
					<p class="mt-4 font-marck text-xl text-primary">
						та будь-які інші приводи для святкування!
					</p>
				</div>
			</div>
		</div>

		<!-- Winter House -->
		<div in:fly={{ y: 50, duration: 1000, delay: 300 }} class="text-center">
			<div class="relative">
				<div
					class="transform rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 hover:rotate-1"
				>
					<h3 class="mb-4 font-cormorant text-2xl text-mainText">
						<span class="text-primary">❄</span>
						Зимовий "Будиночок"
						<span class="text-primary">❄</span>
					</h3>
					<p class="text-secondaryText">
						Резервація в зимовий період:
						<span class="font-bold text-primary">200 грн</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-image: radial-gradient(
			circle at center,
			rgba(189, 46, 33, 0.05) 0%,
			transparent 70%
		);
	}
</style>
