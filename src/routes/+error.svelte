<script lang="ts">
	import * as PageHeader from '$lib/components/docs/page-header/index.js';
	import { Button } from '$lib/registry/default/ui/button/index.js';
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
</script>

<div class="container relative pb-10">
	<PageHeader.Root>
		<PageHeader.Heading class="hidden md:block">抱歉，您访问的页面不存在</PageHeader.Heading>
		<section class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10 my-10">
			<Button href="/" class="rounded-[6px]">返回首页</Button>
		</section>
	</PageHeader.Root>
	{#if dev}
		<section>
			<div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl p-4">
				<h1 class="text-xl text-center my-4">{$page.status} - {$page.error?.message}</h1>
				<div class="json-formatter">
					<pre class="whitespace-pre break-words p-1 bg-neutral-700 border border-neutral-300 rounded-lg">
					<code>{JSON.stringify($page, null, 2)}</code>
					</pre>
				</div>
			</div>
		</section>
	{/if}
</div>
