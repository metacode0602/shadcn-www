<script lang="ts">
  import { homeCategories, listenNowAlbums } from "$lib/types/category.js";
  import PlusCircled from "svelte-radix/PlusCircled.svelte";
  import AlbumProduct from "$lib/components/island/album-product.svelte";
  // import { listenNowAlbums, madeForYouAlbums } from "./(data)/albums.js";
  import { Button } from "$lib/registry/new-york/ui/button/index.js";
  import { Separator } from "$lib/registry/new-york/ui/separator/index.js";
  import * as Tabs from "$lib/registry/new-york/ui/tabs/index.js";
  import { ScrollArea } from "$lib/registry/new-york/ui/scroll-area/index.js";
</script>

<div class="hidden md:block">
  <div class="border-t">
    <div class="bg-background">
      <div class="w-full h-full px-4 py-6 lg:px-8">
        <div class="border-none p-0 outline-none">
          <div class="flex items-center justify-between">
            <div class="space-y-1">
              <h2 class="text-2xl font-semibold tracking-tight">
                今日最新产品
              </h2>
              <p class="text-sm text-muted-foreground">
                更新时间：2024-06-02 10:10:12
              </p>
            </div>
          </div>
          <Separator class="my-4" />
          <div class="relative">
            <div class="flex space-x-4 pb-4">
              {#each listenNowAlbums as album}
                <AlbumProduct
                  {album}
                  class="w-[250px]"
                  aspectRatio="portrait"
                  width={221}
                  height={310}
                />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {#if homeCategories.length > 0}
    {#each homeCategories as category}
    {#if category.children && category.children.length > 0}
      <div class="border-t">
        <div class="bg-background">
          <div class="w-full h-full px-4 py-6 lg:px-8">

            
            <div class="border-none p-0 outline-none">
              <Tabs.Root value="{category.children[0].id}" class="h-full space-y-6">
                <div class="flex items-center justify-between">
                  <div class="flex flex-row">
                    <h2 class="text-2xl font-semibold tracking-tight mx-4">
                      {category.name}
                    </h2>
                    <Tabs.List>
                      {#each category.children as child}
                      <Tabs.Trigger value="{child.id}" class="relative">
                        {child.name}
                      </Tabs.Trigger>
                      {/each}
                    </Tabs.List>
                  </div>
                  <div class="space-between flex items-center">
                    <div class="ml-auto mr-4">
                      <Button href="/discover/{category.id}">
                        <PlusCircled class="mr-2 h-4 w-4" />
                        查看更多
                      </Button>
                    </div>
                  </div>
                </div>

                {#if category.children}
                {#each category.children as child}
                <Tabs.Content
                  value="{child.id}"
                  class="border-none p-0 outline-none"
                >
                  <div class="relative">
                      {#if child.products && child.products.length > 0}
                      <div class="flex space-x-4 pb-4">
                        {#each child.products as album}
                          <AlbumProduct
                            {album}
                            class="w-[250px]"
                            aspectRatio="portrait"
                            width={250}
                            height={330}
                          />
                        {/each}
                      </div>
                      {/if}
                  </div>
                </Tabs.Content>
                {/each}
                {/if}
              </Tabs.Root>
            </div>
           
          </div>
        </div>
      </div>
      {/if}
    {/each}
  {/if}
</div>
