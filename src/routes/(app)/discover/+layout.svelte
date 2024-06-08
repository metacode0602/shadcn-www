<script lang="ts">
	import { Sidebar } from './(components)/index.js';
	import type { LayoutData } from './$types.js';
	import { page } from '$app/stores';
	export let data: LayoutData;
	$: sidebarNav = data.sidebarNav;
</script>

<!-- 这是/discover/11-12格式 -->
{#if $page.url.pathname.split('/').length == 3}
	<div class="container relative pb-10">
		<div class="border-t">
			<div class="bg-background">
				<div class="grid lg:grid-cols-5">
					<Sidebar {sidebarNav} class="hidden lg:block" />
					<div class="col-span-3 lg:col-span-4 lg:border-l">
						<slot />
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<slot />
{/if}
