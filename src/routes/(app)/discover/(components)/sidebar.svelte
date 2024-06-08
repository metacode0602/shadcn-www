<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	import type { SidebarNavItem } from '$lib/types/nav.js';
	import { Icons } from '$lib/components/docs/icons/index.js';
	import { page } from '$app/stores';

	let className: string | null | undefined = undefined;
	export let sidebarNav: SidebarNavItem[];

	export { className as class };
</script>

<div class={cn('pb-12', className)}>
	<div class="space-y-4 py-4">
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

						<Button variant="ghost" class="w-full justify-start">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2 h-4 w-4"
							>
								<rect width="7" height="7" x="3" y="3" rx="1" />
								<rect width="7" height="7" x="14" y="3" rx="1" />
								<rect width="7" height="7" x="14" y="14" rx="1" />
								<rect width="7" height="7" x="3" y="14" rx="1" />
							</svg>
							Browse
						</Button>
						<Button variant="ghost" class="w-full justify-start">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2 h-4 w-4"
							>
								<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
								<path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
								<circle cx="12" cy="12" r="2" />
								<path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
								<path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
							</svg>
							Radio
						</Button>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
