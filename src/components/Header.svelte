<script lang="ts">
	import { slide } from 'svelte/transition';
	import MenuToggle from './MenuToggle.svelte';

	let isBurgerOpen = $state(false);
</script>

<header
	class="absolute left-0 top-0 z-10 h-40 w-screen bg-slate-900 p-4 text-center text-2xl font-bold text-white"
>
	<MenuToggle bind:checked={isBurgerOpen} />
	{#if isBurgerOpen}
		<div
			transition:slide
			class="absolute left-0 top-20 h-screen w-full bg-slate-900/80 backdrop-blur-md"
		></div>
	{/if}
</header>
