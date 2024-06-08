<script lang="ts">
	import { get } from 'svelte/store';
	// import { homeNewData } from '$lib/types/category.js';
	import PlusCircled from 'svelte-radix/PlusCircled.svelte';
	import AlbumProduct from '$lib/components/island/album-product.svelte';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	import { Separator } from '$lib/registry/new-york/ui/separator/index.js';
	import * as Tabs from '$lib/registry/new-york/ui/tabs/index.js';
	import type { PageData } from './$types.js';
	import { writable } from 'svelte/store';

	export let data: PageData;

	// 定义一个writable store，其类型为Record<string, string>
	const stringStringRecord = writable(new Map<string, string>());
	/**
	 * 当前目录下的子目录被点击了
	 * @param category
	 * @param child
	 */
	function onChildClick(categoryName: string, childName: string) {
		// 更新store，保存当前选中的分类和子分类
		stringStringRecord.update((record) => {
			record.set(categoryName, childName);
			return record;
		});
	}

	$: homeCategories = data.homeCategories; //分类推荐商品列表
	$: homeNewData = data.homeNewData; //新品推荐商品列表
</script>

<div class="hidden md:block">
	<div class="border-t">
		<div class="bg-background">
			<div class="w-full h-full px-4 py-6 lg:px-8">
				<div class="border-none p-0 outline-none">
					<div class="flex items-center justify-between">
						<div class="space-y-1">
							<h2 class="text-2xl font-semibold tracking-tight">今日最新产品</h2>
							<p class="text-sm text-muted-foreground">更新时间：2024-06-02 10:10:12</p>
						</div>
					</div>
					<Separator class="my-4" />
					<div class="relative">
						<div class="grid grid-cols-5 gap-4">
							{#each homeNewData as album}
								<AlbumProduct {album} class="w-[250px]" aspectRatio="portrait" width={221} height={231} />
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	{#if homeCategories.length > 0}
		{#each homeCategories as category}
			{#if category.children && category.children.length > 0}
				<div class="border-t">
					<div class="bg-background">
						<div class="w-full h-full px-4 py-6 lg:px-8">
							<div class="border-none p-0 outline-none">
								<Tabs.Root value={category.children[0].name} class="h-full space-y-6">
									<div class="flex items-center justify-between">
										<div class="flex flex-row">
											<h2 class="text-2xl font-semibold tracking-tight mx-4">
												{category.title}
											</h2>
											<Tabs.List>
												{#each category.children as child}
													<Tabs.Trigger
														value={child.name}
														class="relative"
														on:click={() => {
															onChildClick(category.name, child.name);
														}}
													>
														{child.title}
													</Tabs.Trigger>
												{/each}
											</Tabs.List>
										</div>
										<div class="space-between flex items-center">
											<div class="ml-auto mr-4">
												<Button href="/discover/{$stringStringRecord.get(category.name) ?? category.children[0].name}">
													<PlusCircled class="mr-2 h-4 w-4" />
													查看更多
												</Button>
											</div>
										</div>
									</div>

									{#if category.children}
										{#each category.children as child}
											<Tabs.Content value={child.name} class="border-none p-0 outline-none">
												<div class="relative">
													{#if child.products && child.products.length > 0}
														<div class="flex space-x-4 pb-4">
															{#each child.products as album}
																<AlbumProduct
																	{album}
																	class="w-[250px]"
																	aspectRatio="portrait"
																	width={250}
																	height={270}
																/>
															{/each}
														</div>
													{/if}
												</div>
											</Tabs.Content>
										{/each}
									{/if}
								</Tabs.Root>
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	{/if}
</div>
