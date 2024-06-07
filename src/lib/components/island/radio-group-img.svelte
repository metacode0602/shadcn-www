<script lang="ts">
  import PlusCircled from "svelte-radix/PlusCircled.svelte";
  import type { Product } from "$lib/types/category.js";
  import { cn } from "$lib/utils.js";
  import * as ContextMenu from "$lib/registry/new-york/ui/context-menu/index.js";

  let className: string | undefined | null = undefined;
  export let albums: Product[];
  export let aspectRatio: "portrait" | "square" = "square";
  export let width: number;
  export let height: number;
  export { className as class };
  import * as RadioGroup from "$lib/registry/default/ui/radio-group/index.js";
  import { Label } from "$lib/registry/default/ui/label/index.js";

</script>

<RadioGroup.Root value="card" class="grid grid-cols-4 gap-2 {className}">
  {#each albums as album}
  <Label
    for="{album.id}"
    class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-1 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
  >
    <RadioGroup.Item
      value="{album.id}"
      id="{album.id}"
      class="sr-only"
      aria-label="{album.title}"
    />

    <!-- Span bottom edge -->
    <div class="relative">
    <div class="overflow-hidden rounded-md">
      <img
        class={cn(
          "h-auto w-auto object-cover transition-all hover:scale-105",
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
        )}
        src={album.cover}
        alt={album.title}
        {width}
        {height}
      />
    </div>
    <div class="text-sm absolute inset-x-0 bottom-0 z-100 bg-secondary/50">
      <span class="font-medium text-xs leading-none">{album.title}</span>
    </div>
  </div>    

  </Label>
  {/each}
</RadioGroup.Root>
