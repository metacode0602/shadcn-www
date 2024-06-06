<script lang="ts">
	import { ScrollArea } from "$lib/registry/new-york/ui/scroll-area/index.js";
	import { DocsSidebarNav } from "$lib/components/docs/index.js";
	import { docsConfig } from "$lib/config/discovers.js";
	import PlusCircled from "svelte-radix/PlusCircled.svelte";
	import { Sidebar } from "./(components)/index.js";
	import { playlists } from "./(data)/playlists.js";
	// import { listenNowAlbums, madeForYouAlbums } from "./(data)/albums.js";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import { Separator } from "$lib/registry/new-york/ui/separator/index.js";
	import * as Tabs from "$lib/registry/new-york/ui/tabs/index.js";
</script>

<div class="container relative pb-10">
	<div class="border-t">
		<div class="bg-background">
			<div class="grid lg:grid-cols-5">
				<Sidebar {playlists} class="hidden lg:block" />
				<div class="col-span-3 lg:col-span-4 lg:border-l">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>