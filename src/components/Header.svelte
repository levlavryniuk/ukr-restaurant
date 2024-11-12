<script lang="ts">
	import { slide } from 'svelte/transition';
	import MenuToggle from './MenuToggle.svelte';

	let isBurgerOpen = $state(false);

	function onclick() {
		isBurgerOpen = false;
	}
</script>

<header
	class="absolute left-0 top-0 z-10 flex h-40 w-screen flex-col items-center gap-5 bg-slate-900 p-4 text-center text-2xl font-bold text-white"
>
	<img src="/logo.webp" alt="logo" class="h-auto w-60" />
	<MenuToggle bind:checked={isBurgerOpen} />
	{#if isBurgerOpen}
		<div
			transition:slide
			style:opacity={isBurgerOpen ? 1 : 0}
			class="absolute left-0 top-40 h-fit w-full rounded-b-full bg-slate-900/80 pb-20 pt-10 backdrop-blur-md duration-500"
		>
			<ul class="header-list">
				<li><a {onclick} href="/">ГОЛОВНА</a></li>
				<li><a {onclick} href="/menu">МЕНЮ ТА БАР</a></li>
				<li><a {onclick} href="/poslygi">ПОСЛУГИ</a></li>
				<li><a {onclick} href="/dostavka">ДОСТАВКА</a></li>
				<li><a {onclick} href="/keyteryng">КЕЙТЕРИНГ</a></li>
				<li><a {onclick} href="/contacts">КОНТАКТИ</a></li>
			</ul>
		</div>
	{/if}
</header>

<style>
	.header-list {
		@apply flex flex-col items-center justify-center gap-5;
		li {
			@apply text-2xl font-medium text-background/90 hover:text-background/70;
		}
	}
</style>
