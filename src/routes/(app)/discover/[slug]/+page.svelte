<script lang="ts">
	import type { PageData } from './$types.js';
	import { Separator } from '$lib/registry/new-york/ui/separator/index.js';
	import { AlbumFrontMatter } from '$lib/components/island/index.js';

	export let data: PageData;
	$: doc = data.metadata;
	$: items = data.items; //分类下所有的md文件列表
</script>

<div class="hidden md:block">
	<div class="border-t">
		<div class="bg-background">
			<div class="w-full h-full px-4 py-6 lg:px-8">
				<div class="border-none p-0 outline-none">
					<div class="flex items-center justify-between">
						<div class="space-y-1">
							<h2 class="text-2xl font-semibold tracking-tight">{doc?.title}</h2>
						</div>
					</div>
					<Separator class="my-6" />
					<div class="relative">
						<div class="grid grid-cols-3 gap-4">
							{#each items as album}
								<AlbumFrontMatter parent="discover" {album} width={321} height={221} />
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
