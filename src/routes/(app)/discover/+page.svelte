<script lang="ts">
	import PlusCircled from 'svelte-radix/PlusCircled.svelte';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	// import indexNewData from '../../../content/discover/index-new.json';
	// import indexHotData from '../../../content/discover/index-hot.json';
	import * as Tabs from '$lib/registry/new-york/ui/tabs/index.js';
	import type { PageData } from './$types.js';
	import { AlbumFrontMatter, AlbumProduct } from '$lib/components/island/index.js';

	export let data: PageData;

	$: indexHotData = data.indexHotData;
	$: indexNewData = data.indexNewData;
</script>

<div class=" px-4 py-6 lg:px-8">
	<Tabs.Root value="music" class="space-y-6">
		<div class="space-between flex items-center my-6">
			<Tabs.List>
				<Tabs.Trigger value="music" class="relative">最新</Tabs.Trigger>
				<Tabs.Trigger value="podcasts">热门</Tabs.Trigger>
			</Tabs.List>
			<div class="ml-auto mr-4">
				<Button href="/submit">
					<PlusCircled class="mr-2 h-4 w-4" />
					在这里显示
				</Button>
			</div>
		</div>
		<Tabs.Content value="music" class="border-none p-0 outline-none">
			<div class="relative my-10">
				<div class="grid grid-cols-5 gap-4">
					{#each indexNewData as album}
						<AlbumFrontMatter {album} aspectRatio="portrait" width={250} height={330} />
					{/each}
				</div>
			</div>
		</Tabs.Content>
		<Tabs.Content value="podcasts" class="flex-col border-none p-0 data-[state=active]:flex">
			<div class="relative my-10">
				<div class="grid grid-cols-5 gap-4">
					{#each indexHotData as album}
						<AlbumFrontMatter {album} aspectRatio="portrait" width={250} height={330} />
					{/each}
				</div>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
