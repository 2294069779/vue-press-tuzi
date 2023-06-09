---
title: gitlab-cicd🔥
date: 2023-1-1
categories:
  - Git
tags:
  - Git
  - 工具类
sticky: 1
---

# gitlab-ci

##### gitlab-ci

- gitlab 内置工具

##### gitlab-ci.yml

- 根目录下的文件，定义了 job 如何执行

##### gitlabRunner

- 执行工具

##### ppeline 管道

-
- stages:
  - build
  - test
  - deploy
- stage:阶段
  - Job：作业（任务）

```text
Job被定义为顶级元素，并且至少包括一条script语句，如果一个 Job 没有显式地关联某个 Stage，则会被默认关联到 test Stage
```

##### gitlab-ci 参数

stages：定义全局阶段（按顺序执行），如果多个 job 关联的 stage 名相同下并行执行

stage：关联的 Job

```text
如果文件中没有定义 stages，那么则默认包含 build、test 和 deploy 三个 stage
```

image and services

```text
指定任务运行时所需的自定义的docker镜像和服务
```

before_script and after_script

```text
before_script:用于定义一些在所有任务执行前所需执行的命令，包括部署工作（单个/全部）
after_script:用于定义所有job执行过后需要执行的命令
```

only and except

```text
only:定义了job需要执行的所在分支或标签
except：定义了job不会执行的所在分支或标签
only和except如果都存在在一个job声明中，则所需引用将会被only和except所定义的分支过滤
only和except允许使用正则
only和except允许使用指定仓库地址，但是不forks仓库
```

![1677651726520](C:\Users\wangqin\AppData\Roaming\Typora\typora-user-images\1677651726520.png)

所以我们一般先本地构建好，然后提交`.gitlab-ci.yaml`

number= id

describe\*\*=

=parentId

**creatorNumber**=**creatorId**

**organizationNumber**=

**organizationName**=

=**permission.\*\***open\*\*

=permission.\*\*\*\*historyLabel

=**permission.\*\***memberManager\*\*
