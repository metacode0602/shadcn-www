<script lang="ts">
	import * as PageHeader from '$lib/components/docs/page-header/index.js';
	import { Button } from '$lib/registry/default/ui/button/index.js';
	import Search from '$lib/components/island/search.svelte';
	import { page } from '$app/stores';
</script>

<div class="container relative pb-10">
	<PageHeader.Root>
		<!-- <Announcement /> -->
		<PageHeader.Heading class="hidden md:block">发现更适合的AI产品和服务</PageHeader.Heading>
		<PageHeader.Heading class="md:hidden">AI极客岛</PageHeader.Heading>
		<PageHeader.Description balanced={false}>
			优选最佳人工智能产品和服务，覆盖从AI绘画到智能营销的各个领，并持续更新。
		</PageHeader.Description>
		<Search />
		<section class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
			<Button href="/discover" variant={$page.url.pathname == '/home' ? 'default' : 'outline'} class="rounded-[6px]"
				>发现</Button
			>
			<Button
				href="/home/favorite"
				variant={$page.url.pathname == '/home/favorite' ? 'default' : 'outline'}
				class="rounded-[6px]">最多收藏</Button
			>
		</section>
	</PageHeader.Root>
	<section>
		<div class="rounded-[0.5rem] border bg-background shadow-xl">
			<slot />
		</div>
	</section>
</div>
