<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import Code from 'svelte-radix/Code.svelte';
	import ExternalLink from 'svelte-radix/ExternalLink.svelte';
	import type { PageData } from './$types.js';
	import { config } from '$lib/stores/index.js';
	import { page } from '$app/stores';
	import { DocsPager, TableOfContents } from '$lib/components/docs/index.js';
	import { badgeVariants } from '$lib/registry/new-york/ui/badge/index.js';
	import { cn } from '$lib/utils.js';
	import { homeCategories, madeForYouAlbums } from '$lib/types/category.js';
	import PlusCircled from 'svelte-radix/PlusCircled.svelte';
	import AlbumProduct from '$lib/components/island/album-product.svelte';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	import { Separator } from '$lib/registry/new-york/ui/separator/index.js';
	import * as Tabs from '$lib/registry/new-york/ui/tabs/index.js';

	export let data: PageData;
	$: markdown = data.component;
	$: doc = data.metadata;
	$: componentSource = data.metadata.source?.replace('default', $config.style ?? 'default');
</script>

<div class="hidden md:block">
	<div class="border-t">
		<div class="bg-background">
			<div class="w-full h-full px-4 py-6 lg:px-8">
				<div class="border-none p-0 outline-none">
					<div class="flex items-center justify-between">
						<div class="space-y-1">
							<h2 class="text-2xl font-semibold tracking-tight">收藏最多的产品</h2>
						</div>
					</div>
					<Separator class="my-6" />
					<div class="relative">
						<div class="grid grid-cols-6 gap-4">
							{#each madeForYouAlbums as album}
								<AlbumProduct {album} aspectRatio="portrait" width={221} height={221} />
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
