<script lang="ts">
  import Triangle from "lucide-svelte/icons/triangle";
  import Bot from "lucide-svelte/icons/bot";
  import SquareTerminal from "lucide-svelte/icons/square-terminal";
  import CodeXML from "lucide-svelte/icons/code-xml";
  import Settings2 from "lucide-svelte/icons/settings-2";
  import LifeBuoy from "lucide-svelte/icons/life-buoy";
  import Book from "lucide-svelte/icons/book";
  import SquareUser from "lucide-svelte/icons/square-user";
  import Settings from "lucide-svelte/icons/settings";
  import Rabbit from "lucide-svelte/icons/rabbit";
  import Bird from "lucide-svelte/icons/bird";
  import Turtle from "lucide-svelte/icons/turtle";
  import Share from "lucide-svelte/icons/share";
  import Paperclip from "lucide-svelte/icons/paperclip";
  import Mic from "lucide-svelte/icons/mic";
  import CornerDownLeft from "lucide-svelte/icons/corner-down-left";
  import { Switch } from "$lib/registry/default/ui/switch/index.js";
  import * as RadioGroup from "$lib/registry/default/ui/radio-group/index.js";
  import { listenNowAlbums } from "$lib/types/category.js";
  import { Badge } from "$lib/registry/default/ui/badge/index.js";
  import { Button } from "$lib/registry/default/ui/button/index.js";
  import * as Tooltip from "$lib/registry/default/ui/tooltip/index.js";
  import { Textarea } from "$lib/registry/default/ui/textarea/index.js";
  import { Input } from "$lib/registry/default/ui/input/index.js";

  import { Label } from "$lib/registry/default/ui/label/index.js";
  import * as Select from "$lib/registry/default/ui/select/index.js";
  import RadioGroupImg from "$lib/components/island/radio-group-img.svelte";
</script>

<div class="w-full">
  <div class="grid gap-3 m-4">
    <Label for="url" class="text-xl flex flex-row items-center"><Badge variant="default" class="rounded mr-1">1</Badge>提取笔记文案</Label>
    <Input
      id="url"
      placeholder="输入文案笔记链接，例如：https://www.julian.top/"
    />
  </div>
</div>
<div class="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[600px] gap-4 pb-10">
  <div class="flex items-center justify-center py-1 border rounded-lg">
    <div class="flex h-full w-full flex-col p-4">
      <div class="grid gap-3">
        <Label for="content" class="text-xl flex flex-row items-center"><Badge variant="default" class="rounded mr-1">2</Badge>获取文案</Label>
        <Textarea
          id="content"
          placeholder="获取的文案内容"
          class="min-h-[30rem] "
        />
      </div>
	  <div class="flex justify-between items-center mt-6">
		<Button type="submit" class="w-4/5">小红书文案生成</Button>
		<Button variant="outline" class="">购买积分</Button>
	  </div>
	  <div class=" text-left text-sm mt-4">
		普通笔记每次生成需要消耗 1 积分；爆款笔记模式需要消耗 20 积分
	  </div>
    </div>
  </div>

  <div class="flex items-center justify-center py-1 border rounded-lg">
	<div class="flex h-full w-full flex-col p-4">
		<div class="grid gap-3">
		<Label for="generated" class="text-xl flex flex-row items-center"><Badge variant="default" class="rounded mr-1">3</Badge>生成笔记文案</Label>
		<Textarea
			id="content"
			placeholder="生成的新笔记文案"
			class="min-h-[30rem]"
		/>
		</div>
		<div class="flex justify-center items-center mt-6">
		<Button type="submit" variant="outline" class="w-3/4">复制笔记内容</Button>
		</div>
	</div>
  </div>
</div>
