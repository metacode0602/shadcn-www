<script lang="ts">
	import { madeForYouAlbums } from '$lib/types/category.js';
	import PlusCircled from 'svelte-radix/PlusCircled.svelte';
	import { AlbumFrontMatter, AlbumProduct } from '$lib/components/island/index.js';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	import { Separator } from '$lib/registry/new-york/ui/separator/index.js';
	import type { PageData } from './$types.js';

	export let data: PageData;

	$: faveritesData = data.faveritesData; //收藏最多商品列表
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

						<div class="ml-auto mr-4">
							<Button href="/home">
								<PlusCircled class="mr-2 h-4 w-4" />
								返回产品库
							</Button>
						</div>
					</div>
					<Separator class="my-6" />
					<div class="relative">
						<div class="grid grid-cols-4 gap-6">
							{#each faveritesData as album}
								{#if album}
									<AlbumFrontMatter {album} width={221} height={221} />
								{/if}
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
