<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import * as PageHeader from "$lib/components/docs/page-header/index.js";
</script>

<div class="container relative">
	<PageHeader.Root class="max-w-3xl">
		{#if $page.url.pathname == "/posters"}
		<PageHeader.Heading class="text-balance">上传图片写小红书文案</PageHeader.Heading>
		{:else if $page.url.pathname == "/posters/rewrite"}
		<PageHeader.Heading class="text-balance">提供 笔记链接  模仿爆款</PageHeader.Heading>
		{:else}
		<PageHeader.Heading class="text-balance">生成海报  自由发挥</PageHeader.Heading>
		{/if}
		<PageHeader.Description>
			1500W +条小红书文案库驱动，让我成为您的智能文案助手。
		</PageHeader.Description>
		<PageHeader.Actions>
			<Button href="/posters" variant="{$page.url.pathname === "/posters" ? 'default' : 'outline'}">图转笔记</Button>
			<Button
				href="/posters/rewrite"
				variant="{$page.url.pathname.startsWith("/posters/rewrite") ? 'default' : 'outline'}"
			>
			生成海报 
			</Button>
			<Button
				href="/posters/banner"
				variant="{$page.url.pathname.startsWith("/posters/banner") ? 'default' : 'outline'}"
			>
			仿写笔记
			</Button>			
		</PageHeader.Actions>
	</PageHeader.Root>
	<section id="blocks" class="grid scroll-mt-24 gap-24 lg:gap-48">
		<slot />
	</section>
</div>
