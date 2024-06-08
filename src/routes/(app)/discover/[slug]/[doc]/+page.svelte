<script lang="ts">
	import type { ComponentType } from 'svelte';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import type { PageData } from './$types.js';
	import { ProductPager } from '$lib/components/island/index.js';
	import { cn } from '$lib/utils.js';
	import { Separator } from '$lib/registry/new-york/ui/separator/index.js';
	export let data: PageData;
	import { AlbumFrontMatter } from '$lib/components/island/index.js';

	type Component = $$Generic<ComponentType>;
	$: component = data.component as unknown as Component;
	$: doc = data.metadata;
	$: relates = data.relates; //推荐商品列表
	$: slug = data.slug;
	$: indexMetadata = data.indexMetadata; //上级分类的metadata
</script>

<div class="border-b">
	<div class="container flex-1 items-start lg:gap-10">
		<div class="flex items-center space-x-1 py-6">
			<a href="/home">
				<div class="overflow-hidden text-ellipsis whitespace-nowrap">产品库</div>
			</a>
			<ChevronRight class="h-4 w-4" />
			<a href="/discover/{slug}">
				<div class="overflow-hidden text-ellipsis whitespace-nowrap">{indexMetadata?.title}</div>
			</a>
			<ChevronRight class="h-4 w-4" />
			<div class="font-medium text-foreground">{doc?.title}</div>
		</div>

		<main class="relative py-6 lg:gap-10 lg:py-8 grid lg:grid-cols-5">
			<div class="hidden text-sm xl:block col-span-2">
				<div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
					<img src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80" alt={doc.title} />
				</div>
			</div>
			<div class="col-span-3">
				<div class="space-y-2">
					<h1 class={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
						{doc?.title}
					</h1>
					{#if doc?.description}
						<p class="text-balance text-lg text-muted-foreground">
							{doc?.description}
						</p>
					{/if}
				</div>
				<div class="markdown pb-12 pt-8" id="markdown">
					<svelte:component this={component} />
				</div>
				<ProductPager />
			</div>
		</main>

		<Separator class="my-6" />

		<div class="w-full h-full py-6">
			<div class="border-none p-0 outline-none">
				<div class="flex items-center justify-between">
					<div class="space-y-1">
						<h2 class="text-2xl font-semibold tracking-tight">类似产品</h2>
					</div>
				</div>
				<div class="relative mt-10">
					<div class="grid grid-cols-6 gap-4">
						{#each relates as album}
							<AlbumFrontMatter parent="discover" {album} aspectRatio="portrait" width={221} height={221} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
