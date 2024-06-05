<script lang="ts">
  import { homeCategories } from "./(data)/category.js";
  import PlusCircled from "svelte-radix/PlusCircled.svelte";
  import {
    AlbumArtwork,
    Menu,
    PodcastEmptyPlaceholder,
    Sidebar,
  } from "./(components)/index.js";
  import { listenNowAlbums, madeForYouAlbums } from "./(data)/albums.js";
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
                <AlbumArtwork
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
									<AlbumArtwork
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

</div>
</div>
