---
title: VastGaussian
path: xiaoshouguanli/vastgaussian
description: >-
  VastGaussian是一个3D场景重建的开源项目，它通过使用3D高斯来模拟大型场景的几何和外观信息。这个项目是作者从零开始实现的，可能存在一些错误，但为3D场景重建领域提供了一种新的尝试。项目的主要优点包括对大型数据集的处理能力，以及对原始3DGS项目的改进，使其更易于理解和使用。
source: 'https://github.com/kangpeilun/VastGaussian'
cover: /cover/20240610/6/10/20240610_cf6c62de.jpg
logo: /logo/20240610/6/10/20240610_cc8728cf.jpg
label: Vast 3D Gaussians for Large Scene Reconstruction的非官方实现
component: false
procattr: 2
procattrname: 图像
procform: 5
procformname: 模型
proctype: 1
proctypename: 普通产品
tags:
  - 3D场景重建
  - 计算机视觉
  - 图形学
  - 开源项目
createTime: '2024-05-23 09:09:06'
updateTime: '2024-05-23 09:09:06'
lang: en
isicp: 2
isqian: 2
iswx: 2
isqq: 2
iscom: 2
price: 免费
catname: 图像
sort: 30655
---



### 需求人群
"目标受众为3D场景重建、计算机视觉和图形学领域的研究人员和开发者。VastGaussian适合他们，因为它提供了一种新的3D场景重建方法，可以处理大规模数据集，并且对原始3DGS项目进行了改进，使其更易于理解和使用。"

### 产品特色
* Camera-position-based region division 实现了基于相机位置的区域划分
* Position-based data selection 实现了基于位置的数据选择
* Visibility-based camera selection 实现了基于可见性的相机选择
* Coverage-based point selection 实现了基于覆盖的点选择
* Decoupled Appearance Modeling 实现了外观解耦建模
* Seamless Merging 实现了无缝合并
* Parallel training of m√ón regions on a single GPU 实现了单GPU上多个区域的并行训练

### 使用场景示例
* UrbanScene3D 数据集上的应用
* Mill-19 数据集上的应用
* tandt_db 数据集上的应用

### 使用教程
* 克隆或下载 VastGaussian 项目到本地
* 根据项目文档设置环境，包括安装必要的依赖库
* 调整 arguments/parameters.py 文件中的参数以适应你的数据集和需求
* 使用 train_vast.py 文件开始训练 VastGaussian 模型
* 使用提供的脚本或命令行工具进行模型的评估和使用

  
