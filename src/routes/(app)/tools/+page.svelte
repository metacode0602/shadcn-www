<script lang="ts">
	import type { ComponentType } from "svelte";
	import ChevronRight from "lucide-svelte/icons/chevron-right";
	import type { PageData } from "./$types.js";
	import { page } from "$app/stores";
	import { DocsPager, TableOfContents } from "$lib/components/docs/index.js";
	import { cn } from "$lib/utils.js";

	export let data: PageData;

	type Component = $$Generic<ComponentType>;
	$: component = data.component as unknown as Component;
	$: doc = data.metadata;
</script>
这里的tools的 page。svelte
<div class="flex items-center space-x-1 py-6">
	<div class="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
	<ChevronRight class="h-4 w-4" />
	<div class="font-medium text-foreground">{doc.title}</div>
</div>

<main class="relative py-6 lg:gap-10 lg:py-8 grid lg:grid-cols-5">
    <div class="hidden text-sm xl:block col-span-2">
        <div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
            <img src="https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80" alt="{doc.title}" />
        </div>
    </div>    
    <div class="col-span-3">
        <div class="space-y-2">
            <h1 class={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
                {doc.title}
            </h1>
            {#if doc.description}
                <p class="text-balance text-lg text-muted-foreground">
                    {doc.description}
                </p>
            {/if}
        </div>

        <div class="markdown pb-12 pt-8" id="markdown">
            <svelte:component this={component} />
        </div>

        <DocsPager />
    </div>
    <!-- <div class="hidden text-sm xl:block">
        <div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
            {#key $page.url.pathname}
                <TableOfContents />
            {/key}
        </div>
    </div> -->
</main>