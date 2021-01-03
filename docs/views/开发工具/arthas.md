---
title: arthas
date: 2020-04-20
sidebar: 'auto'
categories:
 - 开发工具
tags:
 - 编辑工具
publish: true
---
## 

### 1 Arthas基础

#### 1.1 启动arthas

```shell
java -jar arthas-boot
```

#### 1.2 查看试试面板

```shell
dashboard
```

#### 1.3 打印栈信息

```shell
## 打印线程id1的栈
thread 1 
## 查找main class
thread 1 | grep 'main('
```

#### 1.4 查看JVM装载的类

```shell
sc -d *MathGame
```

#### 1.5 反编译代码

```java
jad demo.MathGame
```

#### 1.6 查看函数的参数/返回值/异常信息

```shell
watch demo.MathGame primeFactors returnObj
## 输入Q或者ctrl + c 退出
```

#### 1.7 退出arthas

```shell
Exit/Stop
退出Arthas
用 exit 或者 quit 命令可以退出Arthas。

退出Arthas之后，还可以再次用 java -jar arthas-boot.jar 来连接。

彻底退出Arthas
exit/quit命令只是退出当前session，arthas server还在目标进程中运行。

想完全退出Arthas，可以执行 stop 命令
```

