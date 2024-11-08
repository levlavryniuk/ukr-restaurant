<script lang="ts">
	type BenketyText = {
		title: string;
		src: string;
		desc: string;
	};

	const texts: BenketyText[] = [
		{
			title: 'Бенкетні зали',
			desc: 'На ваш вибір пропонуються 5 залів від 10 до 100 персон',
			src: ''
		},
		{
			title: 'Спеціальне меню',
			desc: 'Спеціальне бенкетне меню',
			src: ''
		},
		{
			title: 'Затишне подвiр’я',
			desc: 'До Ваших послуг у теплу пору року',
			src: ''
		}
	];
</script>

<div class="mt-40">
	<section
		class="bg mt-40 flex h-fit flex-col items-center justify-center gap-6 bg-transparent bg-[url('/bg.jpg')] bg-fixed pb-40 pt-48 text-center"
	>
		<h1 class="font-marck text-6xl text-background">Бенкети</h1>
	</section>
	<section class="bg-background px-6 py-20">
		<h2 class="mb-8 text-center text-4xl text-primary">
			ВСЕ ДЛЯ НАЙКРАЩОГО ПРОВЕДЕННЯ ВАШОГО ЗАХОДУ!
		</h2>
		<p class="text-center text-xl text-mainText">
			Ласкаво просимо до ресторану №1 з українськими традиціями в місті Києві. Місце в якому
			відчуваєш смак традиційної української кухні та щедрість усієї України. Ми Вас завжди
			зустрінемо, з домашньою гостинністю, та пригостимо смачними запашними стравами.
		</p>
	</section>
	<section class="px-4">
		{#each texts as { src, title, desc }}
			<div class="card">
				<img {src} alt={title} />
				<h3>{title.toUpperCase()}</h3>
				<p>{desc}</p>
			</div>
		{/each}
	</section>
</div>

<style>
	.card {
		img {
			@apply mb-5 aspect-video w-full bg-secondaryText;
		}
		h3 {
			@apply mb-3 text-2xl;
		}
		p {
			@apply mb-8 text-lg;
		}
	}
</style>

