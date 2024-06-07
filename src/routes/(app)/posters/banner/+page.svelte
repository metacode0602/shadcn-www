<script lang="ts">
	import LifeBuoy from 'lucide-svelte/icons/life-buoy';
	import Book from 'lucide-svelte/icons/book';
	import Rabbit from 'lucide-svelte/icons/rabbit';
	import Bird from 'lucide-svelte/icons/bird';
	import Turtle from 'lucide-svelte/icons/turtle';
	import { Switch } from '$lib/registry/default/ui/switch/index.js';
	import * as RadioGroup from '$lib/registry/default/ui/radio-group/index.js';
	import { listenNowAlbums } from '$lib/types/category.js';
	import { ratioRadioGroup, festivalsSelects } from '$lib/types/category.js';
	import { Button } from '$lib/registry/default/ui/button/index.js';
	import { Textarea } from '$lib/registry/default/ui/textarea/index.js';
	import { Label } from '$lib/registry/default/ui/label/index.js';
	import * as Select from '$lib/registry/default/ui/select/index.js';
	import Upload from 'lucide-svelte/icons/upload';
	import { ScrollArea } from '$lib/registry/new-york/ui/scroll-area/index.js';
	import RadioGroupImg from '$lib/components/island/radio-group-img.svelte';
</script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-5 xl:min-h-[800px] border rounded-xl">
	<div class="flex items-center justify-center py-1 col-span-3">
		<div class="flex h-full w-full flex-col p-4">
			<div
				class="border rounded-xl border-dashed border-2 border-secondary-300 hover:bg-gray-100 flex flex-col h-full items-center justify-center text-sm"
			>
				<div><Book /></div>
				<!-- 假设 Book 是一个组件 -->
				<div class="my-1">灵感创意海报</div>
				<div>在右侧输入你的灵感创意即可生成创意海报</div>
			</div>
		</div>
	</div>

	<div class="hidden lg:block col-span-2 py-5 pr-4">
		<ScrollArea>
			<form class="grid w-full items-start">
				<fieldset class="grid gap-6 rounded-lg border p-4">
					<div class="grid gap-3">
						<Label for="content">创意描述（3-20）字</Label>
						<Textarea id="content" placeholder="输入3-20个字表达你的创意" class="min-h-[5.5rem]" />
					</div>
					<div class="grid gap-3">
						<Label for="model">选择商品类型</Label>
						<Select.Root>
							<Select.Trigger id="model" class="items-start [&_[data-description]]:hidden">
								<Select.Value placeholder="选择商品类型" />
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="genesis">
									<div class="flex items-start gap-3 text-muted-foreground">
										<Rabbit class="size-5" />
										<div class="grid gap-0.5">
											<p>
												Neural
												<span class="font-medium text-foreground"> Genesis </span>
											</p>
											<p class="text-xs" data-description>Our fastest model for general use cases.</p>
										</div>
									</div>
								</Select.Item>
								<Select.Item value="explorer">
									<div class="flex items-start gap-3 text-muted-foreground">
										<Bird class="size-5" />
										<div class="grid gap-0.5">
											<p>
												Neural
												<span class="font-medium text-foreground"> Explorer </span>
											</p>
											<p class="text-xs" data-description>Performance and speed for efficiency.</p>
										</div>
									</div>
								</Select.Item>
								<Select.Item value="quantum">
									<div class="flex items-start gap-3 text-muted-foreground">
										<Turtle class="size-5" />
										<div class="grid gap-0.5">
											<p>
												Neural
												<span class="font-medium text-foreground"> Quantum </span>
											</p>
											<p class="text-xs" data-description>The most powerful model for complex computations.</p>
										</div>
									</div>
								</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
					<div class="grid gap-3">
						<Label for="festival">选择节日</Label>
						<Select.Root>
							<Select.Trigger id="festival" class="items-start [&_[data-description]]:hidden">
								<Select.Value placeholder="选择节日" />
							</Select.Trigger>
							<Select.Content>
								{#each festivalsSelects as item}
									<Select.Item value={item.id}>
										<div class="flex items-start gap-3 text-muted-foreground">
											<svelte:component this={item.icon} class="size-5" aria-hidden="true" />
											<div class="grid gap-0.5">
												<p>
													{item.title}
													<span class="font-medium text-foreground"> {item.name} </span>
												</p>
												<p class="text-xs" data-description>
													{item.note}
												</p>
											</div>
										</div>
									</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
					</div>
					<div class="grid gap-3">
						<Label for="temperature">海报风格</Label>
						<RadioGroupImg albums={listenNowAlbums} width={60} height={60} />
					</div>
					<div class="grid gap-3">
						<Label for="temperature">上传参考图</Label>
						<div class="grid grid-cols-3 gap-2">
							<button>
								<img
									alt="Product"
									class="aspect-square w-full rounded-md object-cover"
									height="72"
									src="/images/placeholder.svg"
									width="72"
								/>
							</button>
							<button>
								<img
									alt="Product"
									class="aspect-square w-full rounded-md object-cover"
									height="72"
									src="/images/placeholder.svg"
									width="72"
								/>
							</button>
							<button class="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
								<Upload class="h-4 w-4 text-muted-foreground" />
								<span class="sr-only">Upload</span>
							</button>
						</div>
					</div>
					<div class="grid gap-3">
						<Label for="temperature">比例</Label>

						<RadioGroup.Root value="card" class="grid grid-cols-5 gap-2">
							{#each ratioRadioGroup as ratio}
								<Label
									for={ratio.id}
									class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
								>
									<RadioGroup.Item value={ratio.id} id={ratio.id} class="sr-only" aria-label={ratio.name} />
									{ratio.name}
								</Label>
							{/each}
						</RadioGroup.Root>
					</div>
					<div class="flex justify-between items-center">
						<Label for="necessary" class="flex flex-row items-center ">
							<LifeBuoy class="mx-1" /><span>高清画质</span>
						</Label>
						<Switch id="necessary" checked aria-label="Necessary" />
					</div>

					<div class="flex justify-between items-center">
						<Button type="submit" class="w-2/3">开始生成创意</Button>
						<Button variant="outline" class="">购买积分</Button>
					</div>
					<div class=" text-left text-sm">普通创意生成每张需要消耗 10 积分；高清创意模式需要消耗 50 积分</div>
				</fieldset>
			</form>
		</ScrollArea>
	</div>
</div>
