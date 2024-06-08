<script lang="ts">
	import Activity from 'lucide-svelte/icons/activity';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import Download from 'lucide-svelte/icons/download';
	import Users from 'lucide-svelte/icons/users';
	import FormInput from './(components)/form-input.svelte';
	import { Button } from '$lib/registry/new-york/ui/button/index.js';
	import * as Card from '$lib/registry/new-york/ui/card/index.js';
	import * as Tabs from '$lib/registry/new-york/ui/tabs/index.js';
	import * as PageHeader from '$lib/components/docs/page-header/index.js';
	import DatePickerWithRange from '$lib/registry/new-york/example/date-picker-with-range.svelte';
</script>

<div class="container relative pb-10">
	<div class="hidden flex-col md:flex">
		<PageHeader.Root>
			<PageHeader.Heading class="hidden md:block">AI极客岛推广工具</PageHeader.Heading>
			<PageHeader.Description balanced={false}>
				为您的 AI 产品服务添加推广，您可以获得最直接的品牌曝光、网站流量和用户点击
			</PageHeader.Description>
		</PageHeader.Root>
	</div>
	<section>
		<div class="flex-1 space-y-4 p-8">
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card.Root>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-sm font-medium">月度访问量</Card.Title>
						<DollarSign class="h-4 w-4 text-muted-foreground" />
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">+12545</div>
						<p class="text-xs text-muted-foreground">+20.1%比上月增长</p>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-sm font-medium">月度访客</Card.Title>
						<Users class="h-4 w-4 text-muted-foreground" />
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">+2350</div>
						<p class="text-xs text-muted-foreground">+180.1%较上月增长</p>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-sm font-medium">每日浏览量</Card.Title>
						<CreditCard class="h-4 w-4 text-muted-foreground" />
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">+12,234</div>
						<p class="text-xs text-muted-foreground">+19%比昨天增长</p>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-sm font-medium">今日访问量</Card.Title>
						<Activity class="h-4 w-4 text-muted-foreground" />
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">+573</div>
						<p class="text-xs text-muted-foreground">+201比昨天增长</p>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="border border-radius">
				<FormInput />
			</div>
		</div>
	</section>
</div>
