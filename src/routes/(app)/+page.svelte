<script lang="ts">
  import * as PageHeader from "$lib/components/docs/page-header/index.js";
  import { Icons } from "$lib/components/docs/icons/index.js";
  import { buttonVariants } from "$lib/registry/new-york/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import { LinkedCard } from "$lib/components/docs/index.js";
</script>

<div class="container relative">
  <PageHeader.Root class="pb-8">
    <PageHeader.Heading>探索AI无限可能，创意与技术完美融合</PageHeader.Heading>
    <PageHeader.Description class="text-muted-foreground">
      创新灵感，AI助力，让每一个创意都成为现实。AI极客岛，您的AIGC之旅起点。
    </PageHeader.Description>
    <div
      class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10"
    >
      <a href="/home" class={cn(buttonVariants())}> 开启AI赋能之旅 </a>
    </div>
  </PageHeader.Root>

  <section class="md:block">
		<div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
			<LinkedCard href="/home">
				<p class="font-medium text-2xl">产品库</p>
			</LinkedCard>
			<LinkedCard href="/knowledges">
				<p class="font-medium text-2xl">知识库</p>
			</LinkedCard>
			<LinkedCard href="/projects">
				<p class="font-medium text-2xl">开源项目</p>
			</LinkedCard>
			<LinkedCard href="/posters">
				<p class="font-medium text-2xl">创意海报</p>
			</LinkedCard>
		</div>
  </section>
</div>
