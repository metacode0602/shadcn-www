<script lang="ts">
	import { page } from "$app/stores";
	import { cn } from "$lib/utils.js";
	import { DocsSidebarNav } from "$lib/components/docs/index.js";
	import PlusCircled from "svelte-radix/PlusCircled.svelte";
	import { AlbumArtwork } from "./(components)/index.js";
	import { listenNowAlbums, madeForYouAlbums } from "./(data)/albums.js";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import { Separator } from "$lib/registry/new-york/ui/separator/index.js";
	import * as Tabs from "$lib/registry/new-york/ui/tabs/index.js";
</script>


<div class="h-full px-4 py-6 lg:px-8">

	<Tabs.Root value="music" class="h-full space-y-6">
		<div class="space-between flex items-center my-6">
			<Tabs.List>
				<Tabs.Trigger value="music" class="relative">
					最新
				</Tabs.Trigger>
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
					<div class="flex space-x-4 pb-4">
						{#each listenNowAlbums as album}
							<AlbumArtwork
								{album}
								class="w-[250px]"
								aspectRatio="portrait"
								width={250}
								height={330}
							/>
						{/each}
					</div>
			</div>
		</Tabs.Content>
		<Tabs.Content
			value="podcasts"
			class="h-full flex-col border-none p-0 data-[state=active]:flex"
		>
		<div class="relative my-10">
			<div class="grid grid-cols-6 gap-4">
				{#each madeForYouAlbums as album}
					<AlbumArtwork
						{album}
						aspectRatio="portrait"
						width={250}
						height={330}
					/>
				{/each}
			</div>
	</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
