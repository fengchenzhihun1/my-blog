---
title: 16年java学习笔记
date: 2016-12-20
sidebar: 'auto'
categories:
 - JavaSE
tags:
 - java基础
publish: true
---

## 第一部分编写一个程序：helloWorld

* 第1步：需要正确的配置环境变量
* 第2步：修改隐藏文件扩展名选项，将其改为显示扩展名。
* 第3步：编写java代码：java源文件是一个文本文件，要求该文件的扩展名为 XXX.java
* 第4步：编写代码
* 第5步：编译代码，生成XXX.class文件. >javac XXX.java
* 第6步：运行class文件 >java XXX

## 第二部分HelloWorld的语法介绍

* (标识符介绍)：
 * 1.关键字 public class static void （别急会将）
 * 2.标识符(其实就是自定义的一个名称而已。) 
   * 定义标识符要求：
     * 1，可以有字母，数字，_,$         
     * 2, 不能以数字开头     
     * 3，不能含有空格,     
     * 4，不能含有特殊符号。     
     * 5，不能使用java语言中的关键字来定义标识符定义表示符的规则：驼峰命名规则要求：         
       * 1.在定义类名时要求每个首字母大写。     
       * 2.在定义方法名时要求第一个首字母小写，其他单词的首字母大写。动词在前，名词在后。     
       * 3.在定义变量名称时：和方法命名规则是一样的。     
       * 4.在定义常量名称时：所有的字母都要大写，并且单词与单词之间需要用_来连接
 * 3.java语言中是严格区分大小写的。

* 类的概念：是一个虚拟的。抽象对 对象的的描述 并不是真实存在的。创建对象之前的对象的模板
 * 类可以含有两个部分。来描述这个对象的特点
  * 1，属性(成员变量：直接在类的根下生命的变量就是成员变量，在这个类下所有的方法中都可以使用)
  * 2  行为（方法：定义对象的动作部分）创建对象：类型 标识符 = new 类名();对象：是又类实例化而来的。是真实存在的。可以使用的。类的语法：1.访问控制符：(1)类，(2)方法 。(3)成员变量 ,(4)常量访问控制符的种类：public:公共的。在任何情况加都可以访问的。private:私有的。只能在本类下访问(成员变量或者方法)。protected:被保护的。需要有继承关系，或者是同一个包下。default（如果没有指定访问控制符，那么默认的就是这个。）同一个包下
    类中的方法：
     1.普通方法
     2.构造方法：调用点。是在虚拟机执行创建对象时，由虚拟机来调用构造方法。我们自己是不能调用构造方法的。
    构造方法的语法：1.构造方法与普通方法在编写上是有却别
    （1）构造方法由访问控制符+方法名+参数列表构成。既没有返回值也不是void的。 
     (2)构造方法的方法名，必须要和类名相同。 
     (3)构造方法是由虚拟机来调用，在创建对象时最先被调用。且只调用一次（在创建对象时） 
     (4)在定义一个类时如果没有添加构造方法，那么编译器会为我们生产一个默认的构造方法  默认的构造方法的格式是：公共的且无参的。  如果我们自己在类中添加了构造方法，那么默认的那个无参的 就不在给你了。
 * 类就是为了完成，在虚拟世界中，描述现实世界中的事 或者 物体。描述的是有共性的事物。
    描述事物的：
    属性
    行为 
 * 功能：对对象的属性进行初始化（赋值）
 * 特征：
    * 方法名必须和类名相同
    * 没有任何返回值
    * 用new关键字调用
    * 每个类都存在一个默认的无参数构造函数。如果自定义了带参数构造函数，必须将无参数构造函数显式定义。
     构造方法之间存在着，方法重载：方法名一样，参数列表不同（类型，个数，顺序）
**2.1 关键字private**
Private ：私有的在程序中可以修饰：
    属性：该属性只能在该类中使用。（只有特殊的情况下为public的）
     方法：该方法只能在该类中调用，（只有特殊的情况下定义为private的）
     降低了成员的访问权限。不能在该类的外部实现私有的成员。
**2.1 关键字private**
Private ：私有的在程序中可以修饰：
    属性：该属性只能在该类中使用。（只有特殊的情况下为public的）
     方法：该方法只能在该类中调用，（只有特殊的情况下定义为private的）
     降低了成员的访问权限。不能在该类的外部实现私有的成员。
静态方法对非静态成员的访问：
    在一个类中，对于非静态成员的访问默认省略的是this
               对于静态成员的访问，默认省略的是类名
     静态的方法，不能直接访问非静态的成员（属性和方法 ？原因）
     非静态可以直接访问静态(静态也是可以用对象访问，而非静态本身就用对象访问
作用：
理解setXxx和构造方法的共同点， 再理解setXxx和构造方法在执行的过程中，的时机。
**1.2 this 关键字**
本质：一个对象在内存中的地址（引用），出现在每一个方法中（this），引用的是调用当前方法的对象
作用：
     在同一个类中，调用类中的方法（this.methodName()）
    This区分同名的成员变量和局部变量
     调用构造方法（this(),this(args…..)）,而且必须放在构造方法的第一行
**1.3 static关键字**
 Static : 静态的 Static修饰属性：所有对象共享的属性，使用static修饰
    实现该属性值的共享，提高内存的使用率。
Static�?����
��̬���Ե�ֵ
方法区：
Method()
Static区，共享区
静态属性的值
    代码中的体现：被static修饰的属性多了一种访问形式
    类名.静态属性
    对象.静态属性
Static修饰方法：静态的方法,简化对方法的调用，直接通过类名调用             类名.methodName()
 Static所修饰的方法特征：
    该方法只访问所有对象共享的属性
    该方法没有访问任何属性
 Public static void methodName(){
}
Static方法和非静态成员的访问规律：
Static方法不能直接访问非static的成员（静态方法在执行的时候，内存中不一定存在对象）

**2.1 继承的概述**
继承有量方面（继承者，被继承者），生活中继承者是可以获得被继承者拥有的资源
程序中的继承（继承者，被继承者），描述类和类之间的关系
    继承者：类 --- 子类
     被继承者：类--- 父类（基类，超类）
程序中继承的体现：关键字
     子类 extends 父类，这时候子类就可以获得父类中非private的资源
     还可以有自己特有的资源。
    Exten*ds:关键字 ： 扩展*
**2.3 继承后父类和子类构造方法的特征**
子类构造方法会默认的调用父类中的无参数构造方法  :  super()而且必须放入子类构造方法的第一行。
继承之后子类和父类的初始化顺序：先初始化父类，再初始化子类。
**2.3 继承后父类和子类构造方法的特征**
子类构造方法会默认的调用父类中的无参数构造方法  :  super()而且必须放入子类构造方法的第一行。
继承之后子类和父类的初始化顺序：先初始化父类，再初始化子类。
**2.6 super关键字**
This: 表示某个类对象的引用。Super：表示父类的标识（不是引用：因为不是所有的父类都可以被实例化）
Super:作用
    在子类的构造方法中，调用父类的构造方法（如果无参：super() ,
带参数super(args……)
     在子类的方法中，调用父类中的实例方法：super.methodName();
**2.8 继承其他细节**
Java继承必须单根的。 A extends B (正确)  A extends B,C (错误)Java中的继承可以是多重继承。
  A extends B
C extends A
D extends C ,形参一个继承体系，如果需要知道整个继承体系中的功能看最父类，使用的时候使用最子类
java中的继承满足is----a原则（狗是一个动物）。
继承的好处：
    提高代码的复用性。
      还可以对父类中已有功能进行升级
/***定义King描述国王***/public class King{    //3 定义一个属性   private static King k;    //属性   private String uname;
    //1 构造方法被私有化，外部是不能创建King的对象   private King(String uname){      this.uname=uname;   }

​    //2 自己创建自己的对象 

```java
 public static King getInstance(){
​      if(k==null){           k= new King("奥巴马");      }      return k;   }    //批阅文件   public void readFile(){       System.out.println(this.uname+"------批阅文件------");
   }}
```

 

**面向对象的特征-继承**继承描述的类和类之间的关系，通过建立类和类之间的继承关系，子类可以获得父类中非private的资源。
程序中的具体体现：
​    定义父类：抽取所有相关子类的共性，进行封装（类是对象属性和方法的封装）
​    定义子类 ： extends 建立和父类的继承关系
​            子类更具体，父类更抽象
​           创 建子类对象：访问继承子父类中的成员，通过是访问自己特有的资源。

**继承后父子类构造方法的特征**
子类的构造方法中，在第一行通过super关键字，调用父类中默认的无参数的构造方法。
如果调用父类中自定义的带参数的构造方法：super(args……..)
创建子类的对象的时候，首先调用父类的构造方法，初始化父类中的属性，然后再初始化自己的属性。

**继承后父子类中实例方法的特征**

方法的重写：子类中存在和父类有相同的方法声明，不同的方法体。
在使用子类对象调用某个方法的时候，如果子类中重写该方法，那就调用子类中的方法，如果没有重写调用父类中的方法。
方法重写的前提：必须存在继承关系。
重写的好处：对系统中原有的功能进行扩展，升级
子类调用父类中的实例方法：super.methodName(args……)**java继承的细节**
java中的继承是单根继承。
Java支持多重继承（形成一个继承体系）
        如果需要直到整个继承体系中的功能，看最父类
        使用的时候，使用最子类。
     继承原则：is----a**final关键字**

final 修饰变量：将变量变为常 常量的命名规则：全部字母大写，多个单词用下划线隔开。
Public static final …….
Final修饰类：该类不能被继承
Final修饰方法：该方法不能被重**总结super用法**This 表示的是对象的引用
Super:父类的标识
用法：
子类的构造方法，调用父类的构造方法
子类的实例方法，调用父类的实例方法
Fu：method()
Zi:method(){
 Super.Method();
}

**静态属性：随着类的加载而加载，随着类的消失而消失**
**非静态属性：创建对象的时候，进入内容，如果对不再被引用由jvm回收消失**
**局部代码块：限定变量的作用域**
**静态代码块，构造代码块，构造方法：**
**首执行一次静态代码块，**
**再执行构造代码块，随着对象创建执行**
**再执行构造方法**
**同时存在多个静态代码块和构造代码块，安装由上到下的顺序执行。**
**1.6 接口的细节**
接口自身的继承：多继承接口自身的继承：多重继承
类和接口的关系：实现关系
接口的实现类 单继承 多实现

**2.1 多态实现对程序的扩展性**
提高了程序可扩展性和可维护下：Fu fu = new Zi(); 使用父类的变量，引用子类的对象。（多态）
当父类类型的变量，引用不同类型的子类对象，表现的行为不一样。
---多态就是同一个方法，具备表示不同行为的能力。（有传入参数确定）
多态的动态绑定：
Public void method(Fu fu){
  Fu.methodName();  //编译的时候看父类，运行的时候执行子类
}
传入的实参是子类的对象
Method(new Zi());
Method(new Zi1());
Method(new Zi2());
fu：根据传入实参的不同，自动绑定不同的子类对象上。
接口实现在程序开发过程中定义的标准。便于团队开发，缩短项目的开发周期。
是系统可以是项目完成模块化开发，分层开发。
接口是：系统对外提供的交互的功能

表示字符串常量。给一个String类型的变量赋值，只是改变引用地址，没有 等号右边的对象。
String str=”abc”;
String str2 = new String(“abc”);
常用方法：
Concat() 连接
Substring() 截取子字符串
Trim() 去掉前后空格
toUpperCase(),toLowerCase() 大小写转化
equals() 重写后的
equalsIgnoreCase() 忽略大小写比较
charAt() 指定下标，返回字符
indexOf() 指定字符，获得下标
lastIndexOf()
length()
replace() 替换
split() 分割，返回值为String[]
startsWith() ,endsWith()
String.valueOf() 将任意类型转化为字符串**StringBuffer类**是一个可变字符串序列(字符串变量，是可以改变该类对象中内容的)，而且是线程安全。
对象的获得：
StringBuffer sb = new StringBuffer()
Append() 追加
Insert()  插入
Delete() 删除**StringBuilder 类**安全性：StringBuffer 安全性，StringBuilder安全性低（线程不同步）
效率 ：StringBuffer效率低，StringBuilder效率高。

**System类**Exit(1)
currentTimeMillis() 获得当前时间到1970.1.1的毫秒数。
设计模式：
模板方法设计模式：
 在实现某个功能的时候：有确定的部分，未知的部分
      确定的部分定义在父类，不确定的部分延迟到子类（重写）

**Date类**获得系统的当前日期。
Date date = new Date(); 默认获得系统的当前日期
Date date = new Date(long ms); //指定特定日期
After()  before()
[java.util.Date](mk:@MSITStore:C:%5CUsers%5CAdministrator%5CDesktop%5CJDK_API_1_6_zh_CN.CHM::/java/util/Date.html%20%5Co%20java.util%20%D6%D0%B5%C4%C0%E0)   **java.sql.Date**
**1.6 SimpleDateFormat 类**

日期的格式化: 特定保留字
y 年 M月 d 日期  HH 小时 mm 分钟 ss 秒 SSS毫秒
创建对象：指定日期的格式
SimpleDateFormat simple＝　new SimpleDateFormat(“yyyy-MM-dd HH:mm:ss:SSS”)；
Simple.format(date);
**1.7** **Calendar****类**
描述日期的组成部分(年，月，日，时，分，秒)Calendar c = Calendar.getInstance();
c.get(int x);
**1.2集合框架的继承体系**
Collection 集合的顶层接口    |---List(允许重复元素，是一个有序的集合)
|----Vector(是一个长度可变的数组，底层为数组实现，而且线程同步，
效率低)
|----ArrayList(是一个长度可变的数组，底层为数组实现，而且线程不同
步，效率高)
           |---LinkedList(?)
    |---Set (不允许重复的元素出现)
       |---TreeSet
       |---HashSet

Map 保存映射关系（键值对）
    |---HashMap
    |---HashTable
**1.3 Vector集合**常见操作以及对应的方法创建容器对象Vector vector = new Vector();添加元素Vector.add(Object o)获得元素Vector.get(int index)获得元素的个数Vector.size()遍历For(int x=0;x<size;x++){Object obj = vector.get(x);
//向下转型
Type type=（Type）obj；
//访问type中的方法
}高级forO 变量的类型和集合中获得元素的类型一致For(Object o : vector){
     System.out.println(o);
}Iterator 迭代器进行遍历（java提供的对集合通用的遍历方式）获得迭代器对象Iterator it=vector.iterator();遍历While(it.hasNext()){
       Object o=it.next();
}其他方法判断集合中是否包含某个元素Contains() //注意equals方法的重写toArray() 集合转化为数组Object[] arr=vector.toArray()isEmpty() 判断集合是否为空Boolean flag=vector.isEmpty()Remove(int index) 删除元素toString() 集合中转化为字符串clear() 清除集合中的元素

**1.4 ArrayList 集合**
    底层为数组实现，线程不同步，效率高。    其他操作基本一致。

**LinkedList 集合**底层实现：为链表（铁链）,线程不安全
应用场景：对保存的数据进行频繁插入，删除操作，选择LinkedList
常用方法：addFirst，addLast,getFirst,getLast,removeFirst,removeLast
        Push(),pop()
在开发中使用LinkedList： 实现队列，栈结构
**1.2 TreeSet集合**
底层实现：二叉树特点：不能包含重复元素，对元素进行排序，线程不同步
应用场景：如果重复元素进行过滤，并且对元素排序
TreeSet排序的实现：添加的元素需要实现Comparable接口，重写compareTo()方法，自然排序自定义比较器，自定义类实现Comparator接口，重写compare()方法，在创建TreeSet集合对象的时候，指定比较器。常用方法：
    add()
     通过遍历集合（迭代）
     iterator()
    size()
    constains() 判断元素是否存在和元素重写的compareTo方法有关
    remove() 删除元素
    first() 获得集合中第一个元素，last()
isEmpty()
将List中重复的元素，快速过滤掉？
**1.3 HashSet 集合**
底层实现：HashMap实现，通过保存的元素的hashCode的值，将元素分布到n个桶中。同时保证每个桶中元素不重复，通过重写equals方法实现。
在使用HashSet的时候，保存的元素需要重写两个方法hashCode(),equals()
首先调用hashCode，将元素分布到某个桶中，然后在equals保证每个桶中元素不重复(只有在元素的hashCode值一样的时候，才调用equals)
hashCode和equals值的对应：
         如果两个对象hashCode值一样，equals不一定一样
        如果两个对象equals值一样，hashCode一定一样。
常用方法：
    add()
     通过遍历集合（迭代）
     iterator()
    size()
    constains() 判断元素是否存在和元素重写的hashCode和equals方法有关
    remove() 删除元素
    first() 获得集合中第一个元素，last()
isEmpty()