<script lang="ts">
	let { checked = $bindable() }: { checked: boolean } = $props();
</script>

<div id="menuToggle" class="z-50">
	<input id="checkbox" type="checkbox" bind:checked />
	<label class="toggle" for="checkbox">
		<div class="bar bar--top"></div>
		<div class="bar bar--middle"></div>
		<div class="bar bar--bottom"></div>
	</label>
</div>

<style>
	#checkbox {
		display: none;
	}

	.toggle {
		@apply relative m-auto block h-[calc(2px*3+6px*2)] w-6 cursor-pointer;
	}

	.bar {
		transition: none 0.35s cubic-bezier(0.5, -0.35, 0.35, 1.5) 0s;
		@apply absolute left-0 right-0 h-0.5 rounded-sm bg-background;
	}

	.bar--top {
		bottom: calc(50% + 6px + 2px / 2);
		transition-property: bottom, margin, transform;
		transition-delay: calc(0s + 0.35s), 0s, 0s;
	}

	.bar--middle {
		top: calc(50% - 2px / 2);
		transition-property: top, opacity;
		transition-duration: 0.35s, 0s;
		transition-delay: calc(0s + 0.35s * 1.3), calc(0s + 0.35s * 1.3);
	}

	.bar--bottom {
		top: calc(50% + 6px + 2px / 2);
		transition-property: top, transform;
		transition-delay: 0s;
	}

	#checkbox:checked + .toggle .bar--top {
		bottom: calc(50% - 6px - 2px);
		margin-bottom: calc(6px + 2px / 2);
		transform: rotate(45deg);
		transition-delay: calc(0s + 0.35s * 0.3), calc(0s + 0.35s * 1.3), calc(0s + 0.35s * 1.3);
	}

	#checkbox:checked + .toggle .bar--middle {
		top: calc(50% + 6px);
		opacity: 0;
		transition-duration: 0.35s, 0s;
		transition-delay: 0s, calc(0s + 0.35s);
	}

	#checkbox:checked + .toggle .bar--bottom {
		top: calc(50% - 2px / 2);
		transform: rotate(-45deg);
		transition-delay: calc(0s + 0.35s * 1.3), calc(0s + 0.35s * 1.3);
	}
</style>
