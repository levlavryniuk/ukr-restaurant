<script lang="ts">
	import Footer from '@/components/Footer.svelte';
	import Header from '@/components/Header.svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';

	let { children, data } = $props();
</script>

{#key data.url}
	<Header />
	<main in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
		{@render children()}
	</main>
	<Footer />
{/key}
