---
title: LookOnceToHear
path: yuyinchuli/lookoncetohear
description: >-
  LookOnceToHear 是一种创新的智能耳机交互系统，允许用户通过简单的视觉识别来选择想要听到的目标说话者。这项技术在 CHI 2024
  上获得了最佳论文荣誉提名。它通过合成音频混合、头相关传输函数(HRTFs)和双耳房间脉冲响应(BRIRs)来实现实时语音提取，为用户提供了一种新颖的交互方式。
source: 'https://github.com/vb000/LookOnceToHear'
cover: /cover/20240610/6/10/20240610_e46302b5.jpg
logo: /logo/20240610/6/10/20240610_35493a70.jpg
label: 实时语音提取智能耳机交互系统
component: false
procattr: 5
procattrname: 编程
procform: 5
procformname: 模型
proctype: 1
proctypename: 普通产品
tags:
  - 语音识别
  - 实时处理
  - 智能耳机
  - 交互系统
createTime: '2024-05-28 09:54:30'
updateTime: '2024-05-28 09:54:30'
lang: en
isicp: 2
isqian: 2
iswx: 2
isqq: 2
iscom: 2
price: 免费
catname: 编程
sort: 30755
---



### 需求人群
该产品适合需要在嘈杂环境中进行语音识别和提取的研究人员和开发者。例如，它可以帮助听力障碍者在嘈杂环境中更好地理解对话，或者在多声源环境中进行语音分析和处理。

### 产品特色
* 用户通过看向目标说话者几秒钟来选择想要听到的声音
* 使用 Scaper 工具包合成生成音频混合
* 提供自包含的数据集和训练用的 .jams 规范文件
* 支持实时语音提取和目标语音听力模型的评估
* 提供了模型的检查点，方便用户进行训练和评估
* 适用于嘈杂环境下的语音识别和提取

### 使用场景示例
* 在会议中，通过 LookOnceToHear 选择听取特定发言人的声音
* 在嘈杂的公共场所，帮助听力障碍者集中听取对话
* 在音频分析研究中，用于区分和提取多个声源

### 使用教程
* 下载并解压提供的 .zip 文件到 data/ 目录
* 运行命令以开始训练过程
* 使用 Scaper 的 generate_from_jams 函数在 .jams 规范文件上生成音频混合
* 下载并加载目标语音听力模型的检查点进行评估
* 根据需要调整模型参数以优化性能
* 在实际应用中，用户只需看向目标说话者即可开始语音提取

  
