<script lang="ts">
  import { homeCategories, madeForYouAlbums } from "$lib/types/category.js";
  import PlusCircled from "svelte-radix/PlusCircled.svelte";
  import AlbumProduct from "$lib/components/island/album-product.svelte";
  import { Button } from "$lib/registry/new-york/ui/button/index.js";
  import { Separator } from "$lib/registry/new-york/ui/separator/index.js";
  import * as Tabs from "$lib/registry/new-york/ui/tabs/index.js";
</script>

<section class="my-10">
  <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
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

                <div class="ml-auto mr-4">
                  <Button href="/home">
                    <PlusCircled class="mr-2 h-4 w-4" />
                    返回产品库
                  </Button>
                </div>                
              </div>
              <Separator class="my-6" />
              <div class="relative">
                <div class="grid grid-cols-6 gap-4">
                  {#each madeForYouAlbums as album}
                    <AlbumProduct
                      {album}
                      aspectRatio="portrait"
                      width={221}
                      height={221}
                    />
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
  </div>
</section>

