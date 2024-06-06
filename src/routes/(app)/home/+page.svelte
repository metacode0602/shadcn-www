<script lang="ts">
  import { homeCategories, listenNowAlbums } from "$lib/types/category.js";
  import PlusCircled from "svelte-radix/PlusCircled.svelte";
  import AlbumProduct from "$lib/components/island/album-product.svelte";
  import { Button } from "$lib/registry/new-york/ui/button/index.js";
  import { Separator } from "$lib/registry/new-york/ui/separator/index.js";
  import * as Tabs from "$lib/registry/new-york/ui/tabs/index.js";
  import * as PageHeader from "$lib/components/docs/page-header/index.js";
  import Search from "$lib/components/island/search.svelte";
</script>

<PageHeader.Root>
  <!-- <Announcement /> -->
  <PageHeader.Heading class="hidden md:block"
    >发现更适合的AI产品和服务</PageHeader.Heading
  >
  <PageHeader.Heading class="md:hidden">AI极客岛</PageHeader.Heading>
  <PageHeader.Description balanced={false}>
    优选最佳人工智能产品和服务，覆盖从AI绘画到智能营销的各个领，并持续更新。
  </PageHeader.Description>
  <Search />
  <section
    class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10"
  >
    <Button href="/home" class="rounded-[6px]">今天</Button>
    <Button href="/home/favorite" variant="outline" class="rounded-[6px]"
      >最多收藏</Button
    >
  </section>
</PageHeader.Root>
<section>
  <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
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
                    <Tabs.Root
                      value={category.children[0].id}
                      class="h-full space-y-6"
                    >
                      <div class="flex items-center justify-between">
                        <div class="flex flex-row">
                          <h2
                            class="text-2xl font-semibold tracking-tight mx-4"
                          >
                            {category.name}
                          </h2>
                          <Tabs.List>
                            {#each category.children as child}
                              <Tabs.Trigger value={child.id} class="relative">
                                {child.name}
                              </Tabs.Trigger>
                            {/each}
                          </Tabs.List>
                        </div>
                        <div class="space-between flex items-center">
                          <div class="ml-auto mr-4">
                            <Button href="/home/discover/{category.id}">
                              <PlusCircled class="mr-2 h-4 w-4" />
                              查看更多
                            </Button>
                          </div>
                        </div>
                      </div>

                      {#if category.children}
                        {#each category.children as child}
                          <Tabs.Content
                            value={child.id}
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
  </div>
</section>
