<script lang="ts">
	import Triangle from 'lucide-svelte/icons/triangle';
	import Bot from 'lucide-svelte/icons/bot';
	import SquareTerminal from 'lucide-svelte/icons/square-terminal';
	import CodeXML from 'lucide-svelte/icons/code-xml';
	import Settings2 from 'lucide-svelte/icons/settings-2';
	import LifeBuoy from 'lucide-svelte/icons/life-buoy';
	import Book from 'lucide-svelte/icons/book';
	import SquareUser from 'lucide-svelte/icons/square-user';
	import Settings from 'lucide-svelte/icons/settings';
	import Rabbit from 'lucide-svelte/icons/rabbit';
	import Bird from 'lucide-svelte/icons/bird';
	import Turtle from 'lucide-svelte/icons/turtle';
	import Share from 'lucide-svelte/icons/share';
	import Paperclip from 'lucide-svelte/icons/paperclip';
	import Mic from 'lucide-svelte/icons/mic';
	import CornerDownLeft from 'lucide-svelte/icons/corner-down-left';
	import { Switch } from '$lib/registry/default/ui/switch/index.js';
	import * as RadioGroup from '$lib/registry/default/ui/radio-group/index.js';
	import { listenNowAlbums } from '$lib/types/category.js';
	import { Badge } from '$lib/registry/default/ui/badge/index.js';
	import { Button } from '$lib/registry/default/ui/button/index.js';
	import * as Tooltip from '$lib/registry/default/ui/tooltip/index.js';
	import { Textarea } from '$lib/registry/default/ui/textarea/index.js';
	import { Label } from '$lib/registry/default/ui/label/index.js';
	import * as Select from '$lib/registry/default/ui/select/index.js';
	import RadioGroupImg from '$lib/components/island/radio-group-img.svelte';
</script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-5 xl:min-h-[800px] border rounded-xl">
	<div class="flex items-center justify-center py-1 col-span-3">
		<div class="flex h-full w-full flex-col p-4">
			<div
				class="rounded-xl border-dashed border-2 border-secondary-300 hover:bg-gray-100 flex flex-col h-full items-center p-10 justify-center text-sm"
			>
				<div class=""><Book /></div>
				<div class="my-1">点击上传或拖放文件</div>
				<div>支持PNG、JPEG、JPG，最大10MB，最小尺寸500像素X500像素</div>
			</div>
		</div>
	</div>

	<div class=" lg:block col-span-2 py-5 pr-4">
		<form class="grid w-full items-start">
			<fieldset class="grid gap-6 rounded-lg border p-4">
				<div class="grid gap-3">
					<Label for="content">你的文案关键想法（3-20）字</Label>
					<Textarea id="content" placeholder="输入文案关键词" class="min-h-[5.5rem]" />
				</div>
				<div class="grid gap-3">
					<Label for="model">选择文案风格</Label>
					<Select.Root>
						<Select.Trigger id="model" class="items-start [&_[data-description]]:hidden">
							<Select.Value placeholder="AI智能识别文案" />
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
					<Label for="temperature">文案关联场景</Label>
					<RadioGroupImg albums={listenNowAlbums} width={60} height={60} />
				</div>
				<div class="grid gap-4">
					<Label for="temperature">文案字数</Label>

					<RadioGroup.Root value="card" class="grid grid-cols-4 gap-2">
						<Label
							for="card"
							class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
						>
							<RadioGroup.Item value="50" id="card" class="sr-only" aria-label="Card" />
							50
						</Label>
						<Label
							for="paypal"
							class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
						>
							<RadioGroup.Item value="100" id="paypal" class="sr-only" aria-label="Paypal" />
							100
						</Label>
						<Label
							for="apple"
							class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
						>
							<RadioGroup.Item value="200" id="apple" class="sr-only" aria-label="Apple" />
							200
						</Label>
						<Label
							for="google"
							class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
						>
							<RadioGroup.Item value="300" id="google" class="sr-only" aria-label="Google" />
							300
						</Label>
					</RadioGroup.Root>
				</div>
				<div class="flex justify-between items-center">
					<Label for="necessary" class="flex flex-row items-center ">
						<LifeBuoy class="mx-1" /><span>爆款笔记</span>
					</Label>
					<Switch id="necessary" checked aria-label="Necessary" />
				</div>
				<div class="flex justify-between items-center">
					<Button type="submit" class="w-2/3">小红书文案生成</Button>
					<Button variant="outline" class="">购买积分</Button>
				</div>
				<div class=" text-left text-sm">普通笔记每次生成需要消耗 1 积分；爆款笔记模式需要消耗 20 积分</div>
			</fieldset>
		</form>
	</div>
</div>
