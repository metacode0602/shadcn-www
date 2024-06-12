<script lang="ts">
	import PlusCircled from 'svelte-radix/PlusCircled.svelte';
	import { AlbumArtwork, Menu, PodcastEmptyPlaceholder, Sidebar } from './(components)/index.js';
	import { listenNowAlbums, madeForYouAlbums } from './(data)/albums.js';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	import { Separator } from '$lib/registry/new-york/ui/separator/index.js';
	import * as Tabs from '$lib/registry/new-york/ui/tabs/index.js';
	import { ScrollArea } from '$lib/registry/new-york/ui/scroll-area/index.js';
</script>

<div class="md:block">
	<div class="border-t">
		<div class="bg-background">
			<div class="h-full px-4 py-6 lg:px-8">
				<div class="flex items-center justify-between">
					<div class="space-y-1">
						<h2 class="text-2xl font-semibold tracking-tight pb-10">精选项目</h2>
					</div>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
					{#each madeForYouAlbums as album}
						<AlbumArtwork {album} aspectRatio="square" width={150} height={150} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
