<script lang="ts">
	import * as Card from "$lib/registry/new-york/ui/card/index.js";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import { Icons } from "$lib/components/docs/icons/index.js";
	import { Label } from "$lib/registry/new-york/ui/label/index.js";
	import { Input } from "$lib/registry/new-york/ui/input/index.js";
	import * as RadioGroup from "$lib/registry/new-york/ui/radio-group/index.js";
	import * as Select from "$lib/registry/new-york/ui/select/index.js";

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>选择套餐</Card.Title>
		<Card.Description>请填写您要推广的产品</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<RadioGroup.Root value="card" class="grid grid-cols-3 gap-4">
			<Label
				for="card"
				class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
			>
				<RadioGroup.Item value="card" id="card" class="sr-only" aria-label="Card" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="mb-3 h-6 w-6"
				>
					<rect width="20" height="14" x="2" y="5" rx="2" />
					<path d="M2 10h20" />
				</svg>
				基础套餐
			</Label>
			<Label
				for="paypal"
				class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
			>
				<RadioGroup.Item value="paypal" id="paypal" class="sr-only" aria-label="Paypal" />
				<Icons.paypal class="mb-3 h-6 w-6" />
				超值套餐
			</Label>
			<Label
				for="apple"
				class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
			>
				<RadioGroup.Item value="apple" id="apple" class="sr-only" aria-label="Apple" />
				<Icons.apple class="mb-3 h-6 w-6" />
				超级VIP套餐
			</Label>
		</RadioGroup.Root>
		<div class="grid gap-2">
			<Label for="name">产品名称</Label>
			<Input id="name" placeholder="请输入产品名称" />
		</div>
		<div class="grid gap-2">
			<Label for="number">产品官网或其AI极客岛页面链接： </Label>
			<Input id="number" placeholder="请输入标准的url地址，如https://www.julian.top" />
		</div>
	</Card.Content>
	<Card.Footer>
        <div class="w-full text-center">
            <Button class="w-2/3">立即推广</Button>
        </div>
	</Card.Footer>
</Card.Root>
