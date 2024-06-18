---
title: ComfyUI Ollama
path: kaifazhegongju/comfyui-ollama
description: >-
  ComfyUI Ollama是为ComfyUI工作流设计的自定义节点，它使用ollama
  Python客户端，允许用户轻松地将大型语言模型（LLM）集成到他们的工作流程中，或者仅仅是进行GPT实验。这个插件的主要优点在于它提供了与Ollama服务器交互的能力，使得用户可以执行图像查询、通过给定的提示查询LLM，以及使用精细调整参数进行LLM查询，同时保持生成链的上下文。
source: 'https://github.com/stavsap/comfyui-ollama'
cover: /cover/20240612/6/12/20240612_becb3ef1.jpg
logo: /logo/20240612/6/12/20240612_f978569e.jpg
label: 使用ollama Python客户端与ComfyUI工作流集成的大型语言模型（LLM）
component: false
procattr: 5
procattrname: 编程
procform: 3
procformname: 插件
proctype: 1
proctypename: 普通产品
tags:
  - 人工智能
  - 自然语言处理
  - 图像识别
  - 集成开发
createTime: '2024-05-06 08:53:57'
updateTime: '2024-05-06 08:53:57'
lang: en
isicp: 2
isqian: 2
iswx: 2
isqq: 2
iscom: 2
price: 免费
catname: 编程
sort: 30111
---



### 需求人群
[开发者：可以利用ComfyUI Ollama插件快速集成LLM到他们的开发项目中。,研究人员：可以使用该插件进行语言模型的实验和研究。,数据科学家：可以利用图像查询和文本处理功能来增强他们的数据分析工作。]

### 产品特色
- OllamaVision：提供查询输入图像的能力。
- OllamaGenerate：通过给定的提示查询LLM。
- OllamaGenerateAdvance：通过给定的提示查询LLM，并允许微调参数和保持生成链的上下文。
- 与Ollama服务器的集成：需要一个可从运行ComfyUI的主机访问的运行中的Ollama服务器。
- 自定义节点安装：支持通过Git URL安装或直接克隆到custom_nodes文件夹。
- 参数详细信息：提供对Ollama API文档中参数的访问，以获取更多信息。
- 使用示例：提供了如何将图像视觉与LLM文本处理结合使用的示例。

### 使用场景示例
- 使用OllamaVision节点对输入图像进行视觉分析。
- 通过OllamaGenerate节点根据特定提示生成文本。
- 结合OllamaGenerateAdvance节点进行更复杂的文本生成任务，如保持上下文的生成链。

### 使用教程
- 步骤1：确保有一个可访问的Ollama服务器。
- 步骤2：安装ComfyUI，并克隆或下载ComfyUI Ollama插件到custom_nodes文件夹。
- 步骤3：重启ComfyUI以加载新插件。
- 步骤4：在ComfyUI中选择并配置所需的Ollama节点。
- 步骤5：根据需要设置节点参数，如模型名称和提示。
- 步骤6：执行工作流，查看Ollama节点的输出结果。
- 步骤7：根据输出调整参数，优化工作流性能。

  
