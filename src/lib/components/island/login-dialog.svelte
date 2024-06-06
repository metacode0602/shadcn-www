<script lang="ts">
  import * as Dialog from "$lib/registry/new-york/ui/dialog/index.js";
  import { Button } from "$lib/registry/new-york/ui/button/index.js";
  import * as Card from "$lib/registry/default/ui/card/index.js";
  import { Input } from "$lib/registry/default/ui/input/index.js";
  import { Label } from "$lib/registry/default/ui/label/index.js";

  export let showDialog = false;
</script>

<Dialog.Root bind:open={showDialog}>
  <Dialog.Content class="mx-auto flex flex-col items-center">
    <Dialog.Header class="pt-4">
      <Dialog.Title>手机验证码登录注册</Dialog.Title>
    </Dialog.Header>
    <div class="w-2/3">
      <div class="grid gap-4 my-10">
        <div class="grid gap-2">
          <Label for="mobile">手机号</Label>
          <Input
            id="mobile"
            type="mobile"
            placeholder="请输入手机号"
            required
          />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="code">验证码</Label>
            <a href="##" class="ml-auto inline-block text-sm underline">
              发送验证码
            </a>
          </div>
          <Input id="code" type="code" placeholder="请输入验证码" required />
        </div>
        <Button type="submit" class="w-full">登录</Button>
        <Button variant="outline" class="w-full">微信登录</Button>
      </div>
      <div class="mt-4 text-center text-sm">
        登录即代表同意
        <a href="##" class="underline">《隐私政策》</a>和<a href="##" class="underline">《服务协议》</a>
      </div>
    </div>
  </Dialog.Content>
</Dialog.Root>
