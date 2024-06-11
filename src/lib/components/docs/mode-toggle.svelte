<script lang="ts">
	import Moon from 'svelte-radix/Moon.svelte';
	import Sun from 'svelte-radix/Sun.svelte';
	import Laptop from 'svelte-radix/Laptop.svelte';
	import { resetMode, setMode } from 'mode-watcher';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	import * as DropdownMenu from '$lib/registry/new-york/ui/dropdown-menu/index.js';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" class="w-9 px-0">
			<Sun class="dark:-roate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
			<Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span class="sr-only">切换主题</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => setMode('light')}><Sun class="mr-2 h-4 w-4" />浅色</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode('dark')}><Moon class="mr-2 h-4 w-4" />深色</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => resetMode()}><Laptop class="mr-2 h-4 w-4" />系统</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
