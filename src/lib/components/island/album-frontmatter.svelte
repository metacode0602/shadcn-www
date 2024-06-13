<script lang="ts">
	import PlusCircled from 'svelte-radix/PlusCircled.svelte';
	import { cn } from '$lib/utils.js';
	import * as ContextMenu from '$lib/registry/new-york/ui/context-menu/index.js';
	import type { FrontMatterWithPath } from '$lib/types/docs.js';
	import { IMG_BASE_URL, IMG_PLACEHOLDER } from '$lib/constants.js';
	let className: string | undefined | null = undefined;
	export let album: FrontMatterWithPath;
	export let parent: string = 'discover';
	export let aspectRatio: 'portrait' | 'square' = 'square';
	export { className as class };
</script>

<div class={cn('space-y-3 p-3', className)} {...$$restProps}>
	<a
		target="_blank"
		href="/{parent}/{album?.path}"
		class={cn('items-start rounded-lg text-left text-sm transition-all hover:bg-accent')}
	>
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div class="overflow-hidden rounded-md">
					<img
						class={cn(
							' object-cover transition-all hover:scale-105',
							aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-[5/3]'
						)}
						src={album?.cover ? IMG_BASE_URL + album?.cover : IMG_PLACEHOLDER}
						alt={album?.title}
					/>
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Content class="w-40">
				<ContextMenu.Item><PlusCircled />收藏</ContextMenu.Item>
				<ContextMenu.Separator />
				<ContextMenu.Item>喜欢</ContextMenu.Item>
				<ContextMenu.Item>分享</ContextMenu.Item>
			</ContextMenu.Content>
		</ContextMenu.Root>
		<div class="space-y-2 my-3">
			<h3 class="font-medium leading-none text-xl overflow-hidden whitespace-nowrap text-overflow-ellipsis">
				{album?.title}
			</h3>
			<p class=" text-sm text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap">{album?.label}</p>
			<p class="text-sm text-muted-foreground overflow-hidden text-ellipsis leading-tight line-clamp-2">
				{album?.description}
			</p>
		</div>
	</a>
</div>
