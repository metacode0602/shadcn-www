<script lang="ts">
	import { Announcement, ExamplesNav } from "$lib/components/docs/index.js";
	import * as PageHeader from "$lib/components/docs/page-header/index.js";
	import { Button } from "$lib/registry/default/ui/button/index.js";
	import Search from "$lib/components/island/search.svelte";
</script>

<div class="container relative pb-10">
	<PageHeader.Root>
		<!-- <Announcement /> -->
		<PageHeader.Heading class="hidden md:block">发现更适合的AI产品和服务</PageHeader.Heading>
		<PageHeader.Heading class="md:hidden">AI极客岛</PageHeader.Heading>
		<PageHeader.Description  balanced={false}>
			优选最佳人工智能产品和服务，覆盖从AI绘画到智能营销的各个领，并持续更新。
		</PageHeader.Description>
		<Search />
		<section class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
			<Button href="/docs" class="rounded-[6px]">今天</Button>
			<Button href="/components" variant="outline" class="rounded-[6px]">最多保存</Button>
		</section>
	</PageHeader.Root>
	<section>
		<ExamplesNav />
		<div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
			<slot />
		</div>
	</section>
</div>
