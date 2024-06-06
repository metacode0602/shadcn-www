<script lang="ts">
	import { Announcement, ExamplesNav } from "$lib/components/docs/index.js";
	import * as PageHeader from "$lib/components/docs/page-header/index.js";
	import { Button } from "$lib/registry/default/ui/button/index.js";
	import Search from "$lib/components/island/search.svelte";
</script>

<div class="container relative pb-10">
	<section class="my-10">
		<div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
			<slot />
		</div>
	</section>
</div>
