<script lang="ts">
	import PlusCircled from 'svelte-radix/PlusCircled.svelte';
	import { cn } from '$lib/utils.js';
	import * as ContextMenu from '$lib/registry/new-york/ui/context-menu/index.js';
	import type { FrontMatter, FrontMatterWithPath } from '$lib/types/docs.js';

	let className: string | undefined | null = undefined;
	export let album: FrontMatterWithPath;
	export let parent: string = 'discover';
	export let aspectRatio: 'portrait' | 'square' = 'square';
	export let width: number;
	export let height: number;
	export { className as class };
</script>

<div class={cn('space-y-3', className)} {...$$restProps}>
	<a
		target="_blank"
		href="/{parent}/{album.path}"
		class={cn('items-start rounded-lg text-left text-sm transition-all hover:bg-accent')}
	>
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div class="overflow-hidden rounded-md">
					<img
						class={cn(
							'h-auto w-auto object-cover transition-all hover:scale-105',
							aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
						)}
						src={album.cover}
						alt={album.title}
						{width}
						{height}
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
		<div class="space-y-1 text-sm">
			<h3 class="font-medium leading-none">{album.title}</h3>
			<p class="text-xs text-muted-foreground">{album.description}</p>
		</div>
	</a>
</div>
