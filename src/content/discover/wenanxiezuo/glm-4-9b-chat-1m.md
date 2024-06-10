---
title: GLM-4-9B-Chat-1M
path: wenanxiezuo/glm-4-9b-chat-1m
description: >-
  GLM-4-9B-Chat-1M 是智谱 AI 推出的新一代预训练模型，属于 GLM-4
  系列的开源版本。它在语义、数学、推理、代码和知识等多方面的数据集测评中展现出较高的性能。该模型不仅支持多轮对话，还具备网页浏览、代码执行、自定义工具调用和长文本推理等高级功能。支持包括日语、韩语、德语在内的26种语言，并特别推出了支持1M上下文长度的模型版本，适合需要处理大量数据和多语言环境的开发者和研究人员使用。
source: ''
cover: /cover/20240609/6/10/20240609_3c2387ff.jpg
logo: /logo/20240609/6/10/20240609_578a1068.jpg
label: 新一代开源预训练模型，支持多轮对话和多语言。
component: false
procattr: 5
procattrname: 编程
procform: 5
procformname: 模型
proctype: 2
proctypename: 优质新品
tags:
  - 预训练模型
  - 多轮对话
  - 多语言支持
  - 长文本处理
createTime: '2024-06-05 15:55:39'
updateTime: '2024-06-05 15:55:39'
lang: zh
isicp: 2
isqian: 1
iswx: 2
isqq: 2
iscom: 2
price: 免费
sort: 30911
---



### 需求人群
"目标受众主要是开发者、数据科学家和研究人员，他们需要处理复杂的数据集，进行多语言交互，或者需要模型具备高级的推理和执行能力。此模型能够帮助他们提高工作效率，处理大规模数据，以及在多语言环境下进行有效的沟通和信息处理。"

### 产品特色
* 多轮对话能力，能够进行连贯的交互。
* 网页浏览功能，可以获取和理解网页内容。
* 代码执行能力，能够运行和理解代码。
* 自定义工具调用，可以接入和使用自定义工具或API。
* 长文本推理，支持最大128K上下文，适合处理大量数据。
* 多语言支持，包括日语、韩语、德语等26种语言。
* 1M上下文长度支持，约200万中文字符，适合长文本处理。

### 使用场景示例
* 开发者使用该模型进行多语言的聊天机器人开发。
* 数据科学家利用模型的长文本推理能力进行大规模数据分析。
* 研究人员通过模型的代码执行功能进行算法验证和测试。

### 使用教程
* 步骤一：导入必要的库，如torch和transformers。
* 步骤二：使用AutoTokenizer.from_pretrained()方法加载模型的tokenizer。
* 步骤三：准备输入数据，使用tokenizer.apply_chat_template()方法格式化输入。
* 步骤四：将输入数据转换为模型需要的格式，如使用to(device)方法将其转换为PyTorch张量。
* 步骤五：加载模型，使用AutoModelForCausalLM.from_pretrained()方法。
* 步骤六：设置生成参数，如max_length和do_sample。
* 步骤七：调用model.generate()方法生成输出。
* 步骤八：使用tokenizer.decode()方法将输出解码为可读文本。

  
