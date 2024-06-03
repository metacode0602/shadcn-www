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
  
    import { Badge } from "$lib/registry/new-york/ui/badge/index.js";
    import { Button } from "$lib/registry/new-york/ui/button/index.js";
    import * as Tooltip from "$lib/registry/new-york/ui/tooltip/index.js";
    import * as Drawer from "$lib/registry/new-york/ui/drawer/index.js";
    import { Input } from "$lib/registry/new-york/ui/input/index.js";
    import { Textarea } from "$lib/registry/new-york/ui/textarea/index.js";
    import { Label } from "$lib/registry/new-york/ui/label/index.js";
    import * as Select from "$lib/registry/new-york/ui/select/index.js";
  </script>


<form class="w-full flex flex-row relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
  <!-- <Label for="message" class="sr-only">Message</Label> -->
  <Textarea
    id="message"
    placeholder="输入任意内容，使用AI搜索。例如：文生海报。"
    class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
  />
  <div class="flex items-center p-3">
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <Button variant="ghost" size="icon" builders={[builder]}>
          <Mic class="size-4" />
          <span class="sr-only">语音输入</span>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="top">语音输入</Tooltip.Content>
    </Tooltip.Root>
    <Button type="submit" size="sm" class="ml-auto gap-1.5">问问<CornerDownLeft class="size-3.5" />
    </Button>
  </div>
</form>
