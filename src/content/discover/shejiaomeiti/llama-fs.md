---
title: llama-fs
path: shejiaomeiti/llama-fs
description: >-
  LlamaFS是一个自组织文件管理器，它基于文件内容和已知约定（例如时间）自动重命名和组织文件。支持多种文件类型，包括通过Moondream处理的图片和通过Whisper处理的音频文件。它有两种运行模式：批量处理（批处理模式）和交互式守护进程（监视模式）。在监视模式下，LlamaFS启动守护进程监视目录，拦截所有文件系统操作，使用最近的编辑上下文主动学习和预测您如何重命名文件。此外，它还具有“隐身模式”的切换功能，允许通过Ollama而不是Groq路由每个请求，以确保隐私。
source: 'https://github.com/iyaja/llama-fs'
cover: /cover/20240609/6/10/20240609_eddde8b2.jpg
logo: /logo/20240609/6/10/20240609_0849c52f.jpg
label: 自组织文件系统，智能管理文件
component: false
procattr: 1
procattrname: 生产力
procform: 4
procformname: 桌面客户端
proctype: 1
proctypename: 普通产品
tags:
  - 文件管理
  - 自动化
  - 隐私保护
  - 多媒体支持
createTime: '2024-05-27 11:37:26'
updateTime: '2024-05-27 11:37:26'
lang: en
isicp: 2
isqian: 2
iswx: 2
isqq: 2
iscom: 2
price: 免费
sort: 30733
---



### 需求人群
LlamaFS适合需要高效管理和组织大量文件的用户，尤其是那些经常处理多媒体文件和需要保护隐私的用户。它通过自动化和智能化的方式，减少了用户在文件管理上的时间消耗，提高了工作效率。

### 产品特色
* 自动重命名和组织文件
* 支持多种文件类型，包括图片和音频
* 两种运行模式：批处理模式和监视模式
* 监视模式下可拦截文件系统操作并预测用户操作
* 隐身模式保护用户隐私
* 使用Electron构建的友好用户界面
* 快速处理文件操作，大多数文件操作在监视模式下小于500毫秒

### 使用场景示例
* 用户A使用LlamaFS自动整理桌面上的杂乱文件。
* 用户B通过监视模式，让LlamaFS自动管理下载文件夹中的新文件。
* 用户C开启隐身模式，保护其文件操作不被第三方API提供商记录。

### 使用教程
* 克隆仓库：git clone https://github.com/iyaja/llama-fs.git
* 进入项目目录：cd llama-fs
* 安装依赖：pip install -r requirements.txt
* 使用FastAPI本地启动应用程序：运行指定命令，服务器默认在8000端口运行
* 通过curl命令查询API，传递文件路径作为参数，例如对下载文件夹的操作

  
