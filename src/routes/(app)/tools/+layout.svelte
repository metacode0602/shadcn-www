<script lang="ts">
</script>
这里是tools的layot
<div class="border-b">
	<div
		class="container flex-1 items-start lg:gap-10"
	>
		<!-- <aside
			class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block"
		>
			<ScrollArea class="h-full py-6 pr-6 lg:py-8">
				<DocsSidebarNav items={docsConfig.sidebarNav} />
			</ScrollArea>
		</aside> -->
		<slot />
	</div>
</div>
