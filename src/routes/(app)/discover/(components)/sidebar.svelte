<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	import type { SidebarNavItem } from '$lib/types/nav.js';
	import { Icons } from '$lib/components/docs/icons/index.js';
	import { page } from '$app/stores';
	import ScrollArea from '$lib/registry/default/ui/scroll-area/scroll-area.svelte';
	let className: string | null | undefined = undefined;
	export let sidebarNav: SidebarNavItem[];

	export { className as class };
</script>

<div class={cn('pb-12', className)}>
	<div class="space-y-4 py-4">
		<ScrollArea class="h-screen">
			{#each sidebarNav as menu}
				{#if menu.items && menu.items.length > 0}
					<div class="px-3 py-2">
						<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">{menu.title}</h2>
						<div class="space-y-1">
							{#each menu.items as child}
								{@const isActive = child.href ? $page.url.pathname.includes(child.href) : false}
								<Button variant={isActive ? 'secondary' : 'ghost'} class="w-full justify-start" href={child.href}>
									{#if child.icon}
										<svelte:component this={Icons[child.icon]} class="mr-2 h-4 w-4" />
									{/if}
									{child.title}
								</Button>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</ScrollArea>
	</div>
</div>
