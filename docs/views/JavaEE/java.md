





## 递归

![image-20200612233626117](../images/image-20200612233626117.png)

![image-20200612233844085](../images/image-20200612233844085.png)

![image-20200612233954991](../images/image-20200612233954991.png)

![image-20200612234014695](../images/image-20200612234014695.png)

![image-20200612234220751](../images/image-20200612234220751.png)

上课传卷子

![image-20200612234445091](../images/image-20200612234445091.png)

![image-20200612234603890](../images/image-20200612234603890.png)

![image-20200612235421874](../images/image-20200612235421874.png)

![image-20200613213301013](../images/image-20200613213301013.png)

![image-20200613213325190](../images/image-20200613213325190.png)

![image-20200613213424086](../images/image-20200613213424086.png)

![image-20200613215357449](../images/image-20200613215357449.png)

![image-20200613215449032](../images/image-20200613215449032.png)

![image-20200613215728992](../images/image-20200613215728992.png)

![image-20200614184030972](../images/image-20200614184030972.png)

![image-20200614184459619](../images/image-20200614184459619.png)

![](../images/image-20200614184046105.png)



![image-20200614184057270](../images/image-20200614184057270.png)

![image-20200614190830993](../images/image-20200614190830993.png)

![image-20200614190940684](../images/image-20200614190940684.png)

![image-20200614203000113](../images/image-20200614203000113.png)

![image-20200614203033636](../images/image-20200614203033636.png)

![image-20200614203344346](../images/image-20200614203344346.png)

![image-20200614203405618](../images/image-20200614203405618.png)

![image-20200614204029561](../images/image-20200614204029561.png)

原子 隔离  一致性  持久性

![image-20200614205112036](../images/image-20200614205112036.png)

![image-20200614205253265](../images/image-20200614205253265.png)

![image-20200614205315362](../images/image-20200614205315362.png)

![image-20200614205631164](../images/image-20200614205631164.png)

```tex
更新丢失：最后的更新覆盖了其他事务之前的更新，而事务之间并不知道，发生更新丢失。更新丢失，可以完全避免，应用对访问的数据加锁即可。 　　

脏读(针对未提交的数据)：一个事务在更新一条记录，未提交前，第二个事务读到了第一个事务更新后的记录，那么第二个事务就读到了脏数据，会产生对第一个未提交 数据的依赖。一旦第一个事务回滚，那么第二个事务读到的数据，将是错误的脏数据。 　　

不可重复读（读取数据本身的对比）：一个事务在读取某些数据后的一段时间后，再次读取这个数据，发现其读取出来的数据内容已经发生了改变，就是不可重复读。 　　

幻读（读取结果集条数的对比）：一个事务按相同的查询条件查询之前检索过的数据，确发现检索出来的结果集条数变多或者减少（由其他事务插入、删除的），类似产生幻觉。
```

![image-20200615224745626](../images/image-20200615224745626.png)

cnblogs.com/-mrl/p/13056433.html

![image-20200615225323370](../images/image-20200615225323370.png)

![image-20200615225401049](../images/image-20200615225401049.png)

![image-20200615225444728](../images/image-20200615225444728.png)

![image-20200616222644984](../images/image-20200616222644984.png)

![image-20200616222722945](../images/image-20200616222722945.png)

![image-20200616222731170](../images/image-20200616222731170.png)

![image-20200616223018304](../images/image-20200616223018304.png)

![image-20200616224405256](../images/image-20200616224405256.png)

![image-20200616224850495](../images/image-20200616224850495.png)

![image-20200616225526651](../images/image-20200616225526651.png)

![image-20200616225646865](../images/image-20200616225646865.png)

off关

![image-20200616225835151](../images/image-20200616225835151.png)

![image-20200616230244856](../images/image-20200616230244856.png)

![image-20200616230734841](../images/image-20200616230734841.png)

![image-20200616230914407](../images/image-20200616230914407.png)

![image-20200616230940446](../images/image-20200616230940446.png)

![image-20200616230948191](../images/image-20200616230948191.png)

![image-20200616231009890](../images/image-20200616231009890.png)

![image-20200616231147968](../images/image-20200616231147968.png)

![image-20200616231221458](../images/image-20200616231221458.png)

![image-20200616231558051](../images/image-20200616231558051.png)

![image-20200616231609720](../images/image-20200616231609720.png)

![image-20200616232134731](../images/image-20200616232134731.png)

![image-20200616232502414](../images/image-20200616232502414.png)

![image-20200616232530756](../images/image-20200616232530756.png)

复制算法

![image-20200616232633149](../images/image-20200616232633149.png)

![image-20200616232659275](../images/image-20200616232659275.png)

![image-20200616232805761](../images/image-20200616232805761.png)

![image-20200616232833344](../images/image-20200616232833344.png)

![image-20200616232856858](../images/image-20200616232856858.png)

concurrent 高并发

并行： 同一时刻

并发：同一时间间隔

## 三个包

1. java.util.concurrent
2. java.util.atomic
3. java.util.concurrent.locks

WWH

1. whate 是什么
2. why 为什么
3. how 有什么好处

main：主线程，一切程序的入口

如何编写企业级的多线程代码？

固定的套路+模板是什么？

1. 在高内聚低耦合的前提下， 线程  操作 资源类

   1.1 一言不合，先创建一个资源类（干啥事先new出来，自身封装好方法，对外暴露接口，高内聚低耦合）自己动手丰衣足食，不依赖于别人；内聚方法和变量

   1.2  

2. ReentranLock

   可重入锁

3. 

 



