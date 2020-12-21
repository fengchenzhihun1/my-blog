---
title: spring自研框架
date: 2020-05-31
sidebar: 'auto'
categories:
 - 开发框架
tags:
 - spring
publish: true
---

![image-20200531135338671](../images/image-20200531135338671.png)

![image-20200531135414410](../images/image-20200531135414410.png)

![image-20200531135442670](../images/image-20200531135442670.png)

![image-20200531140245874](../images/image-20200531140245874.png)

![image-20200531140440464](../images/image-20200531140440464.png)

![image-20200531141449916](../images/image-20200531141449916.png)

![image-20200531165716183](../images/image-20200531165716183.png)

![image-20200531165805023](../images/image-20200531165805023.png)

![image-20200531170013991](../images/image-20200531170013991.png)

![image-20200531170113016](../images/image-20200531170113016.png)

![image-20200531170128446](../images/image-20200531170128446.png)

![image-20200531180855824](../images/image-20200531180855824.png)

![image-20200531181124334](../images/image-20200531181124334.png)

![image-20200531181325844](../images/image-20200531181325844.png)

![image-20200531185440632](../images/image-20200531185440632.png)

![image-20200531185621996](../images/image-20200531185621996.png)

![image-20200531185657813](../images/image-20200531185657813.png)

![image-20200531185707065](../images/image-20200531185707065.png)

![image-20200531185730381](../images/image-20200531185730381.png)

![image-20200531185739428](../images/image-20200531185739428.png)

![image-20200531190219519](../images/image-20200531190219519.png)

![image-20200531190321674](../images/image-20200531190321674.png)

![image-20200531190825746](../images/image-20200531190825746.png)

![image-20200531190844370](../images/image-20200531190844370.png)

![image-20200531190858611](../images/image-20200531190858611.png)

![image-20200531191514818](../images/image-20200531191514818.png)

![image-20200531192722474](../images/image-20200531192722474.png)

![image-20200531194142180](../images/image-20200531194142180.png)

![image-20200531194202694](../images/image-20200531194202694.png)

![image-20200601203742216](../images/image-20200601203742216.png)

编译器擦除泛型

![image-20200602211332145](../images/image-20200602211332145.png)

![image-20200602211340565](../images/image-20200602211340565.png)

![image-20200602212949335](../images/image-20200602212949335.png)

![image-20200602213359291](../images/image-20200602213359291.png)

![image-20200602213454899](../images/image-20200602213454899.png)

![image-20200602213535950](../images/image-20200602213535950.png)

![image-20200602213608184](../images/image-20200602213608184.png)

![image-20200602220655419](../images/image-20200602220655419.png)

![image-20200602221134734](../images/image-20200602221134734.png)

![image-20200602221213412](../images/image-20200602221213412.png)

![image-20200602221234436](../images/image-20200602221234436.png)

![image-20200602221354259](../images/image-20200602221354259.png)

![image-20200602221452551](../images/image-20200602221452551.png)

![image-20200602222146160](../images/image-20200602222146160.png)

![image-20200602222343250](../images/image-20200602222343250.png)

![image-20200602222931895](../images/image-20200602222931895.png)

![image-20200602222941636](../images/image-20200602222941636.png)

![image-20200602232545267](../images/image-20200602232545267.png)

![image-20200602232631399](../images/image-20200602232631399.png)

![image-20200602232644686](../images/image-20200602232644686.png)

![image-20200602232713693](../images/image-20200602232713693.png)

![image-20200602232729471](../images/image-20200602232729471.png)

![image-20200602232800941](../images/image-20200602232800941.png)

![image-20200602232837250](../images/image-20200602232837250.png)

![image-20200602232931090](../images/image-20200602232931090.png)

![image-20200602233004687](../images/image-20200602233004687.png)

![image-20200602233021385](../images/image-20200602233021385.png)

```java
package demo.reflect;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

/*
 * 通过Class对象可以获取某个类中的：构造方法；
 *
 * 获取构造方法：
 *         1).批量的方法：
 *             public Constructor[] getConstructors()：所有"公有的"构造方法
              public Constructor[] getDeclaredConstructors()：获取所有的构造方法(包括私有、受保护、默认、公有)
 *         2).获取单个的方法，并调用：
 *             public Constructor getConstructor(Class... parameterTypes):获取单个的"公有的"构造方法：
 *             public Constructor getDeclaredConstructor(Class... parameterTypes):获取"某个构造方法"可以是私有的，或受保护、默认、公有；
 *
 *             调用构造方法：
 *             Constructor-->newInstance(Object... initargs)
 */
public class ConstructorCollector {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Class clazz = Class.forName("demo.reflect.ReflectTarget");
        //1.获取所有的公有构造方法
        System.out.println("**********************所有公有构造方法*********************************");
        Constructor[] conArray = clazz.getConstructors();
        for(Constructor c : conArray){
            System.out.println(c);
        }
        //2.获取所有构造方法
        System.out.println("************所有的构造方法(包括：私有、受保护、默认、公有)***************");
        conArray = clazz.getDeclaredConstructors();
        for(Constructor c : conArray){
            System.out.println(c);
        }
        //3.获取单个带参数的公有方法
        System.out.println("*****************获取公有、有两个参数的构造方法*******************************");
        Constructor con = clazz.getConstructor(String.class, int.class);
        System.out.println("con = " + con);
        //4.获取单个私有的构造方法
        System.out.println("******************获取私有构造方法*******************************");
        con = clazz.getDeclaredConstructor(int.class);
        System.out.println("private con = " + con);
        System.out.println("******************调用私有构造方法创建实例*******************************");
        //暴力访问（忽略掉访问修饰符）
        con.setAccessible(true);
        ReflectTarget reflectTarget = (ReflectTarget) con.newInstance(1);
    }
}

```

```java
package demo.reflect;

/*
 * 获取成员变量并调用：
 *
 * 1.批量的
 *      1).Field[] getFields():获取所有的"公有字段"
 *      2).Field[] getDeclaredFields():获取所有字段，包括：私有、受保护、默认、公有；
 * 2.获取单个的：
 *      1).public Field getField(String fieldName):获取某个"公有的"字段；
 *      2).public Field getDeclaredField(String fieldName):获取某个字段(可以是私有的)
 *
 *   设置字段的值：
 *      Field --> public void set(Object obj,Object value):
 *                  参数说明：
 *                  1.obj:要设置的字段所在的对象；
 *                  2.value:要为字段设置的值；
 *
 */

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;

public class FieldCollector {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        //获取Class对象
        Class reflectTargetClass = Class.forName("demo.reflect.ReflectTarget");
        //1.获取所有公有的字段
        System.out.println("************获取所有公有的字段********************");
        Field[] fieldArray = reflectTargetClass.getFields();
        for (Field f : fieldArray){
            System.out.println(f);
        }
        //2.获取所有的字段
        System.out.println("************获取所有的字段(包括私有、受保护、默认的)********************");
        fieldArray = reflectTargetClass.getDeclaredFields();
        for (Field f : fieldArray){
            System.out.println(f);
        }
        //3.获取单个特定公有的field
        System.out.println("*************获取公有字段并调用***********************************");
        Field f = reflectTargetClass.getField("name");
        System.out.println("公有的field name : " + f);
        ReflectTarget reflectTarget = (ReflectTarget)reflectTargetClass.getConstructor().newInstance();
        //4.给获取到的field赋值
        f.set(reflectTarget, "待反射一号");
        //5.验证对应的值name
        System.out.println("验证name : " + reflectTarget.name);
        //6.获取单个私有的Field
        System.out.println("**************获取私有字段targetInfo并调用********************************");
        f = reflectTargetClass.getDeclaredField("targetInfo");
        System.out.println(f);
        f.setAccessible(true);
        f.set(reflectTarget, "13810592345");
        System.out.println("验证信息" + reflectTarget);
    }
}

```

```java
package demo.reflect;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/*
 * 获取成员方法并调用：
 *
 * 1.批量的：
 *      public Method[] getMethods():获取所有"公有方法"；（包含了父类的方法也包含Object类）
 *      public Method[] getDeclaredMethods():获取所有的成员方法，包括私有的(不包括继承的)
 * 2.获取单个的：
 *      public Method getMethod(String name,Class<?>... parameterTypes):
 *                  参数：
 *                      name : 方法名；
 *                      Class ... : 形参的Class类型对象
 *      public Method getDeclaredMethod(String name,Class<?>... parameterTypes)
 *
 *   调用方法：
 *      Method --> public Object invoke(Object obj,Object... args):
 *                  参数说明：
 *                  obj : 要调用方法的对象；
 *                  args:调用方式时所传递的实参；
):
 */
public class MethodCollector {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        //1、获取Class对象
        Class reflectTargetClass = Class.forName("demo.reflect.ReflectTarget");
        //2、获取所有公有方法
        System.out.println("***************获取所有的public方法，包括父类和Object*******************");
        Method[] methodArray = reflectTargetClass.getMethods();
        for(Method m : methodArray){
            System.out.println(m);
        }
        //3、获取该类的所有方法
        System.out.println("***************获取所有的方法，包括私有的*******************");
        methodArray = reflectTargetClass.getDeclaredMethods();
        for(Method m : methodArray){
            System.out.println(m);
        }
        //4、获取单个公有方法
        System.out.println("***************获取公有的show1()方法*******************");
        Method m = reflectTargetClass.getMethod("show1", String.class);
        System.out.println(m);
        //5、调用show1并执行
        ReflectTarget reflectTarget = (ReflectTarget)reflectTargetClass.getConstructor().newInstance();
        m.invoke(reflectTarget, "待反射方法一号");
        //6、获取一个私有的成员方法
        System.out.println("***************获取私有的show4()方法******************");
        m = reflectTargetClass.getDeclaredMethod("show4", int.class);
        System.out.println(m);
        m.setAccessible(true);
        String result = String.valueOf(m.invoke(reflectTarget, 20));
        System.out.println("返回值 ： " + result);
    }
}

```

```java
package demo.reflect;

public class ReflectTarget extends ReflectTargetOrigin{
    //---------构造函数-----------
    //(默认的带参数构造函数)
    ReflectTarget(String str) {
        System.out.println("(默认)的构造方法 s = " + str);
    }

    //无参构造函数
    public ReflectTarget() {
        System.out.println("调用了公有的无参构造方法 。。。");
    }

    //有一个参数的构造函数
    public ReflectTarget(char name) {
        System.out.println("调用了带有一个参数的构造方法，参数值为 " + name);
    }

    //有多个参数的构造函数
    public ReflectTarget(String name, int index) {
        System.out.println("调用了带有多个参数的构造方法，参数值为【目标名】： " + name + " 【序号】" + index);
    }
    //受保护的构造函数
    protected ReflectTarget(boolean n){
        System.out.println("受保护的构造方法 n :" + n);
    }
    //私有的构造函数
    private ReflectTarget(int index){
        System.out.println("私有的构造方法 序号：" + index);
    }

    //**************字段*******************//
    public String name;
    protected int index;
    char type;
    private String targetInfo;
    @Override
    public String toString(){
        return "ReflectTarget [name=" + name + ", index=" + index + ", type=" + type
                + ", targetInfo=" + targetInfo + "]";
    }
    //***************成员方法***************//
    public void show1(String s){
        System.out.println("调用了公有的，String参数的show1(): s = " + s);
    }
    protected void show2(){
        System.out.println("调用了受保护的，无参的show2()");
    }
    void show3(){
        System.out.println("调用了默认的，无参的show3()");
    }
    private String show4(int index){
        System.out.println("调用了私有的，并且有返回值的，int参数的show4(): index = " + index);
        return "show4result";
    }

    public static void main(String[] args) throws ClassNotFoundException {
        //第一种方式获取Class对象
        ReflectTarget reflectTarget = new ReflectTarget();
        Class reflectTargetClass1 = reflectTarget.getClass();
        System.out.println("1st : " + reflectTargetClass1.getName());
        //第二种方式获取Class对象
        Class reflectTargetClass2 = ReflectTarget.class;
        System.out.println("2nd: " + reflectTargetClass2.getName());
        //判断第一种方式获取的class对象和第二种方式获取的是否是同一个
        System.out.println(reflectTargetClass1 == reflectTargetClass2);
        //第三种方式来获取Class对象
        Class reflectTargetClass3 = Class.forName("demo.reflect.ReflectTarget");
        System.out.println("3rd: " + reflectTargetClass3.getName());
        System.out.println(reflectTargetClass2 == reflectTargetClass3);
    }
}

```

```java
package demo.reflect;

public class ReflectTargetOrigin {
    String defaultMember = "default";
    public String publicMember = "public";
    protected String protectedMember = "protected";
    private String privateMember = "private";
}

```

![image-20200603205351718](../images/image-20200603205351718.png)

![image-20200603205414548](../images/image-20200603205414548.png)

![image-20200603205441190](../images/image-20200603205441190.png)

![image-20200603205527624](../images/image-20200603205527624.png)

![image-20200603205601142](../images/image-20200603205601142.png)

![image-20200603205701736](../images/image-20200603205701736.png)

![image-20200603205725411](../images/image-20200603205725411.png)

![image-20200603205753967](../images/image-20200603205753967.png)

![image-20200603205829598](../images/image-20200603205829598.png)

```
-Djdk.proxy.ProxyGenerator.saveGeneratedFiles=true
-XX:+TranceClassLoading
```

![image-20200603212458437](../images/image-20200603212458437.png)

![image-20200603212516631](../images/image-20200603212516631.png)

![image-20200603212809296](../images/image-20200603212809296.png)

![image-20200603212903578](../images/image-20200603212903578.png)

![image-20200603220056868](../images/image-20200603220056868.png)

![image-20200603220121410](../images/image-20200603220121410.png)



![image-20200603220239443](../images/image-20200603220239443.png)



![image-20200603220204915](../images/image-20200603220204915.png)

![image-20200603220339197](../images/image-20200603220339197.png)

![image-20200603220347260](../images/image-20200603220347260.png)

![image-20200603220507770](../images/image-20200603220507770.png)

![image-20200603220543019](../images/image-20200603220543019.png)

![image-20200603220553750](../images/image-20200603220553750.png)

![image-20200603220730913](../images/image-20200603220730913.png)

![image-20200603220923463](../images/image-20200603220923463.png)

![image-20200603221037072](../images/image-20200603221037072.png)

![image-20200603221443896](../images/image-20200603221443896.png)

-![image-20200603221615404](../images/image-20200603221615404.png)

![image-20200603221811502](../images/image-20200603221811502.png)

![image-20200603223651804](../images/image-20200603223651804.png)

![image-20200603223714384](../images/image-20200603223714384.png)

![image-20200603223752938](../images/image-20200603223752938.png)

![image-20200603231033061](../images/image-20200603231033061.png)

![image-20200603231148953](../images/image-20200603231148953.png)

![image-20200605075615047](../images/image-20200605075615047.png)

```java
package org.simpleframework.core.core;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @Classname BeanContainer
 * @Description 可以抵御反射和序列化
 * @Date 2020/6/5 7:57
 * @Created by  wrsChen
 */
@Slf4j
@NoArgsConstructor(access = AccessLevel.NONE)
public class BeanContainer {
    public static BeanContainer getInstance(){
        return ContainerHolder.HOLDER.instance;
    }
    private enum ContainerHolder{
        HOLDER;
        private BeanContainer instance;
        ContainerHolder(){
            instance = new BeanContainer();
        }
    }

}

```

![image-20200605080205349](../images/image-20200605080205349.png)

![image-20200606114613842](../images/image-20200606114613842.png)

![image-20200606115000377](../images/image-20200606115000377.png)

![image-20200606181053585](../images/image-20200606181053585.png)

![image-20200606181925388](../images/image-20200606181925388.png)

![image-20200606185940134](../images/image-20200606185940134.png)

![image-20200606190047475](../images/image-20200606190047475.png)

![image-20200606190246648](../images/image-20200606190246648.png)

![image-20200606190313915](../images/image-20200606190313915.png)

![image-20200606224700141](../images/image-20200606224700141.png)

![image-20200606230054674](../images/image-20200606230054674.png)

![image-20200606230210219](../images/image-20200606230210219.png)

![image-20200606230331374](../images/image-20200606230331374.png)

![image-20200606230455428](../images/image-20200606230455428.png)

![image-20200606231004260](../images/image-20200606231004260.png)

![image-20200606234652365](../images/image-20200606234652365.png)

![image-20200606234739912](../images/image-20200606234739912.png)

![image-20200606234847374](../images/image-20200606234847374.png)

![image-20200606235550230](../images/image-20200606235550230.png)

![image-20200606235715308](../images/image-20200606235715308.png)

![image-20200607001557576](../images/image-20200607001557576.png)

![image-20200607002327373](../images/image-20200607002327373.png)

![image-20200607002412715](../images/image-20200607002412715.png)

![image-20200607002425129](../images/image-20200607002425129.png)

![image-20200607003332050](../images/image-20200607003332050.png)

Resource 与 ResourceLoad

![image-20200607003805186](../images/image-20200607003805186.png)

xmlbeandefinitionreader

![image-20200607090155077](../images/image-20200607090155077.png)

委派

![image-20200607100036978](../images/image-20200607100036978.png)

![image-20200607102646715](../images/image-20200607102646715.png)

![image-20200607102812424](../images/image-20200607102812424.png)

![image-20200607102822746](../images/image-20200607102822746.png)

![image-20200608082105282](../images/image-20200608082105282.png)

![image-20200608082143498](../images/image-20200608082143498.png)

实现自己的BeanDefinitionRegistryPostProcessor，就能将第三方或者其他矿建的实例注册到容器中![image-20200608083904348](../images/image-20200608083904348.png)



aware一种能力

![image-20200608084432919](../images/image-20200608084432919.png)

![image-20200608084807911](../images/image-20200608084807911.png)

![image-20200608092138278](../images/image-20200608092138278.png)

枚举是饿汉式，根据反编译看到的代码类在一加载时就进行了初始化

![image-20200608100921705](../images/image-20200608100921705.png)

![image-20200608101153089](../images/image-20200608101153089.png)

![image-20200608102045627](../images/image-20200608102045627.png)

![image-20200608102120261](../images/image-20200608102120261.png)

![image-20200608115153267](../images/image-20200608115153267.png)

do字开头的是最终干活的

![image-20200608115529920](../images/image-20200608115529920.png)

![image-20200608115839098](../images/image-20200608115839098.png)

singletionObjects最终的对象，一级缓存

earlySingletonObject 二级缓存

singletonFactories 三级缓存

