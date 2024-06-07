<script lang="ts">
	import { Icons } from '../icons/index.js';
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site.js';
	import { cn } from '$lib/utils.js';
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<Icons.logo class="h-6 w-6" />
		<span class="hidden font-bold sm:inline-block">
			{siteConfig.name}
		</span>
	</a>
	{#if $page.url.pathname != '/'}
		<nav class="flex items-center gap-6">
			<a
				href="/"
				class={cn(
					'transition-colors hover:text-foreground/80',
					$page.url.pathname.startsWith('/examples') ? 'text-foreground' : 'text-foreground/60'
				)}
			>
				首页
			</a>
			<a
				href="/home"
				class={cn(
					'transition-colors hover:text-foreground/80',
					$page.url.pathname.startsWith('/home') ||
						$page.url.pathname.startsWith('/discover') ||
						$page.url.pathname.startsWith('/tool')
						? 'text-foreground'
						: 'text-foreground/60'
				)}
			>
				产品库
			</a>
			<a
				href="/projects"
				class={cn(
					'transition-colors hover:text-foreground/80',
					$page.url.pathname.startsWith('/projects') ? 'text-foreground' : 'text-foreground/60'
				)}
			>
				开源项目
			</a>
			<a
				href="/posters"
				class={cn(
					'transition-colors hover:text-foreground/80',
					$page.url.pathname.startsWith('/posters') ? 'text-foreground' : 'text-foreground/60'
				)}
			>
				创意海报
			</a>

			<a
				href="/knowledges"
				class={cn(
					'transition-colors hover:text-foreground/80',
					$page.url.pathname.startsWith('/knowledges') ? 'text-foreground' : 'text-foreground/60'
				)}
			>
				知识库
			</a>
			<a
				href="/submit"
				rel="noopener noreferrer"
				class={cn(
					'transition-colors hover:text-foreground/80',
					$page.url.pathname.startsWith('/submit') ? 'text-foreground' : 'text-foreground/60'
				)}
			>
				提交
			</a>
		</nav>
	{/if}
</div>
