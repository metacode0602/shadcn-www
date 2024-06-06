<script lang="ts">
  import { homeCategories, madeForYouAlbums } from "$lib/types/category.js";
  import PlusCircled from "svelte-radix/PlusCircled.svelte";
  import AlbumProduct from "$lib/components/island/album-product.svelte";
  import { Button } from "$lib/registry/new-york/ui/button/index.js";
  import { Separator } from "$lib/registry/new-york/ui/separator/index.js";
  import * as Tabs from "$lib/registry/new-york/ui/tabs/index.js";
</script>

<div class="hidden md:block">
  <div class="border-t">
    <div class="bg-background">
      <div class="w-full h-full px-4 py-6 lg:px-8">
        <div class="border-none p-0 outline-none">
          <div class="flex items-center justify-between">
            <div class="space-y-1">
              <h2 class="text-2xl font-semibold tracking-tight">
                收藏最多的产品
              </h2>
            </div>
          </div>
          <Separator class="my-4" />
          <div class="relative">
              <div class="grid grid-cols-6 gap-4">
                {#each madeForYouAlbums as album}
                  <AlbumProduct
                    {album}
                    aspectRatio="square"
                    width={150}
                    height={150}
                  />
                {/each}
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
