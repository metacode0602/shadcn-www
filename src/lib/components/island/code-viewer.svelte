<script lang="ts">
	import * as Dialog from '$lib/registry/new-york/ui/dialog/index.js';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	export let markdown: string = '';
</script>

<Dialog.Root>
	<Dialog.Trigger asChild let:builder>
		<Button variant="secondary" builders={[builder]}>View code</Button>
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[625px]">
		<Dialog.Header>
			<Dialog.Title>View code</Dialog.Title>
			<Dialog.Description>
				You can use the following code to start integrating your current prompt and settings into your application.
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4">
			<div class="rounded-md bg-black p-6">
				<pre>
					<code class="grid gap-1 text-sm text-muted-foreground [&_span]:h-4">
						{markdown}
					</code>
				</pre>
			</div>
			<div>
				<p class="text-sm text-muted-foreground">
					Your API Key can be found here. You should use environment variables or a secret management tool to expose
					your key to your applications.
				</p>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
