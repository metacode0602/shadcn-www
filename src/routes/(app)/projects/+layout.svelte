<script lang="ts">
	import { Announcement, ExamplesNav } from "$lib/components/docs/index.js";
	import * as PageHeader from "$lib/components/docs/page-header/index.js";
	import { Button } from "$lib/registry/default/ui/button/index.js";
	import Search from "$lib/components/island/search.svelte";
</script>

<div class="container relative pb-10">
	<PageHeader.Root>
		<PageHeader.Heading class="hidden md:block">发现你的专属应用</PageHeader.Heading>
		<PageHeader.Description  balanced={false}>
			优选最佳人工智能产品和服务，覆盖从AI绘画到智能营销的各个领，并持续更新。
		</PageHeader.Description>
        <Search />

	</PageHeader.Root>
	<ExamplesNav />

	<section>
		<div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
			<slot />
		</div>
	</section>
</div>
