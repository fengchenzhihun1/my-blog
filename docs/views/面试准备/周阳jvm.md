---
title: 周阳jvm入门
date: 2020-06-17
sidebar: 'auto'
categories:
 - 性能提升
tags:
 - jvm
publish: true
---

![image-20200617213350078](../images/image-20200617213350078.png)

![image-20200617213542557](../images/image-20200617213542557.png)

![image-20200617214420375](../images/image-20200617214420375.png)

![image-20200617214603217](../images/image-20200617214603217.png)

![image-20200617220006988](../images/image-20200617220006988.png)

![image-20200618231745765](../images/image-20200618231745765.png)

![image-20200618233849396](../images/image-20200618233849396.png)

![image-20200618235350364](../images/image-20200618235350364.png)

![image-20200621122032810](../images/image-20200621122032810.png)

![image-20200621123436651](../images/image-20200621123436651.png)

6 stack

* 栈管运行
* 堆管存储

![image-20200621122252640](../images/image-20200621122252640.png)

![image-20200621175731242](../images/image-20200621175731242.png)

![image-20200621180916837](../images/image-20200621180916837.png)

![image-20200621181031667](../images/image-20200621181031667.png)

![image-20200621183908948](../images/image-20200621183908948.png)

![image-20200621183951385](../images/image-20200621183951385.png)

![image-20200621185450381](../images/image-20200621185450381.png)

![image-20200621185501590](../images/image-20200621185501590.png)

第一次gc  存活下来的到s1区

第二次gc  交换

活过十五次到养老区

![image-20200621191539723](../images/image-20200621191539723.png)

![image-20200621190902472](../images/image-20200621190902472.png)

![image-20200621191555341](../images/image-20200621191555341.png)

第一次：eden gc copy  from  清空eden

第二次：                                     复制，交换

 第三次：

![image-20200621201251829](../images/image-20200621201251829.png)

![image-20200621201425909](../images/image-20200621201425909.png)

![image-20200621201934953](../images/image-20200621201934953.png)

![image-20200621202226910](../images/image-20200621202226910.png)

![image-20200621202426007](../images/image-20200621202426007.png)

![image-20200621202714102](../images/image-20200621202714102.png)

```java
package com.chenfeng.inter.jvm;

/**
 * @Classname MemoryTest
 * @Description TODO
 * @Date 2020/6/21 20:28
 * @Created by  wrsChen
 */
public class MemoryTest {
    public static void main(String[] args) {
        int i = Runtime.getRuntime().availableProcessors();
        long l = Runtime.getRuntime().totalMemory();
        long l1 = Runtime.getRuntime().freeMemory();
        long l2 = Runtime.getRuntime().maxMemory();
        System.out.println("核心数" + i);
        System.out.println("总内存数" + l1/1024/1024);
        // 生产环境调成一样的，避免忽高忽低 内存变动，震荡
        //1/16 默认
        System.out.println("可用内存数" + l/1024/1024);
        //1/4 默认
        System.out.println("可用最大内存数" + l2/1024/1024);
        
    }
}

```

![image-20200621204800162](../images/image-20200621204800162.png)

![image-20200621204817966](../images/image-20200621204817966.png)

![image-20200621204853505](../images/image-20200621204853505.png)

![image-20200621205309721](../images/image-20200621205309721.png)

**轻GC**

![image-20200621210247325](../images/image-20200621210247325.png)

**重GC**

![image-20200621211755430](../images/image-20200621211755430.png)

![image-20200621211959238](../images/image-20200621211959238.png)

![image-20200621215427339](../images/image-20200621215427339.png)

![image-20200621215439594](../images/image-20200621215439594.png)

![image-20200621215616137](../images/image-20200621215616137.png)

怎么判断这个对象是垃圾？

怎么回收？

![image-20200621215855632](../images/image-20200621215855632.png)

![image-20200621220347262](../images/image-20200621220347262.png)首先非常感谢up,和视频的周阳老师，然后JVM 那块我补充一点点：
判断对象是否已经死亡的算法：引用计数算法，可达性分析算法；
四个垃圾收集算法：标记清除算法，复制算法，标记整理算法，分代收集算法；
七个垃圾收集器：Serial，SerialOld,ParNew,Parallel Scavenge,Parallel Old,CMS,G1.
视频中把引用技术算法归到垃圾收集算法了，以及没有提到可达性分析算法。还有就是垃圾收集器那块没有讲到。大家可以根据2,4,7这几个数字来差缺补漏。

![image-20200621220912192](../images/image-20200621220912192.png)

![image-20200621221433415](../images/image-20200621221433415.png)

![image-20200621221558948](../images/image-20200621221558948.png)

![image-20200621222038173](../images/image-20200621222038173.png)

![image-20200621222101716](../images/image-20200621222101716.png)

![image-20200621222447896](../images/image-20200621222447896.png)

![image-20200621222623327](../images/image-20200621222623327.png)

![image-20200621223041476](../images/image-20200621223041476.png)

![image-20200621223225305](../images/image-20200621223225305.png)

![image-20200621223418484](../images/image-20200621223418484.png)

![image-20200621223553705](../images/image-20200621223553705.png)

![image-20200621223743736](../images/image-20200621223743736.png)

![image-20200621223828146](../images/image-20200621223828146.png)

![image-20200621223948063](../images/image-20200621223948063.png)

![image-20200621224826098](../images/image-20200621224826098.png)

G1

![image-20200621224925371](../images/image-20200621224925371.png)

![image-20200621225029745](../images/image-20200621225029745.png)

## JMM java内存模型

* 可见性
* 原子性
* 有序性



![image-20200621230209084](../images/image-20200621230209084.png)

![image-20200621230307559](../images/image-20200621230307559.png)

[java内存模型、对象模型、内存结构](https://blog.csdn.net/robothj/article/details/89564183)

![image-20200621231234477](../images/image-20200621231234477.png)