(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1137:function(n,t,e){"use strict";e.r(t);var a=e(0),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"第一部分编写一个程序：helloworld"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一部分编写一个程序：helloworld"}},[n._v("#")]),n._v(" 第一部分编写一个程序：helloWorld")]),n._v(" "),e("ul",[e("li",[n._v("第1步：需要正确的配置环境变量")]),n._v(" "),e("li",[n._v("第2步：修改隐藏文件扩展名选项，将其改为显示扩展名。")]),n._v(" "),e("li",[n._v("第3步：编写java代码：java源文件是一个文本文件，要求该文件的扩展名为 XXX.java")]),n._v(" "),e("li",[n._v("第4步：编写代码")]),n._v(" "),e("li",[n._v("第5步：编译代码，生成XXX.class文件. >javac XXX.java")]),n._v(" "),e("li",[n._v("第6步：运行class文件 >java XXX")])]),n._v(" "),e("h2",{attrs:{id:"第二部分helloworld的语法介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二部分helloworld的语法介绍"}},[n._v("#")]),n._v(" 第二部分HelloWorld的语法介绍")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("(标识符介绍)：")])]),n._v(" "),e("li",[e("p",[n._v("1.关键字 public class static void （别急会将）")])]),n._v(" "),e("li",[e("p",[n._v("2.标识符(其实就是自定义的一个名称而已。)")]),n._v(" "),e("ul",[e("li",[n._v("定义标识符要求：\n"),e("ul",[e("li",[n._v("1，可以有字母，数字，_,$")]),n._v(" "),e("li",[n._v("2, 不能以数字开头")]),n._v(" "),e("li",[n._v("3，不能含有空格,")]),n._v(" "),e("li",[n._v("4，不能含有特殊符号。")]),n._v(" "),e("li",[n._v("5，不能使用java语言中的关键字来定义标识符定义表示符的规则：驼峰命名规则要求：\n"),e("ul",[e("li",[n._v("1.在定义类名时要求每个首字母大写。")]),n._v(" "),e("li",[n._v("2.在定义方法名时要求第一个首字母小写，其他单词的首字母大写。动词在前，名词在后。")]),n._v(" "),e("li",[n._v("3.在定义变量名称时：和方法命名规则是一样的。")]),n._v(" "),e("li",[n._v("4.在定义常量名称时：所有的字母都要大写，并且单词与单词之间需要用_来连接")])])])])])])]),n._v(" "),e("li",[e("p",[n._v("3.java语言中是严格区分大小写的。")])]),n._v(" "),e("li",[e("p",[n._v("类的概念：是一个虚拟的。抽象对 对象的的描述 并不是真实存在的。创建对象之前的对象的模板")])]),n._v(" "),e("li",[e("p",[n._v("类可以含有两个部分。来描述这个对象的特点")])]),n._v(" "),e("li",[e("p",[n._v("1，属性(成员变量：直接在类的根下生命的变量就是成员变量，在这个类下所有的方法中都可以使用)")])]),n._v(" "),e("li",[e("p",[n._v("2  行为（方法：定义对象的动作部分）创建对象：类型 标识符 = new 类名();对象：是又类实例化而来的。是真实存在的。可以使用的。类的语法：1.访问控制符：(1)类，(2)方法 。(3)成员变量 ,(4)常量访问控制符的种类：public:公共的。在任何情况加都可以访问的。private:私有的。只能在本类下访问(成员变量或者方法)。protected:被保护的。需要有继承关系，或者是同一个包下。default（如果没有指定访问控制符，那么默认的就是这个。）同一个包下\n类中的方法：\n1.普通方法\n2.构造方法：调用点。是在虚拟机执行创建对象时，由虚拟机来调用构造方法。我们自己是不能调用构造方法的。\n构造方法的语法：1.构造方法与普通方法在编写上是有却别\n（1）构造方法由访问控制符+方法名+参数列表构成。既没有返回值也不是void的。\n(2)构造方法的方法名，必须要和类名相同。\n(3)构造方法是由虚拟机来调用，在创建对象时最先被调用。且只调用一次（在创建对象时）\n(4)在定义一个类时如果没有添加构造方法，那么编译器会为我们生产一个默认的构造方法  默认的构造方法的格式是：公共的且无参的。  如果我们自己在类中添加了构造方法，那么默认的那个无参的 就不在给你了。")])]),n._v(" "),e("li",[e("p",[n._v("类就是为了完成，在虚拟世界中，描述现实世界中的事 或者 物体。描述的是有共性的事物。\n描述事物的：\n属性\n行为")])]),n._v(" "),e("li",[e("p",[n._v("功能：对对象的属性进行初始化（赋值）")])]),n._v(" "),e("li",[e("p",[n._v("特征：")]),n._v(" "),e("ul",[e("li",[n._v("方法名必须和类名相同")]),n._v(" "),e("li",[n._v("没有任何返回值")]),n._v(" "),e("li",[n._v("用new关键字调用")]),n._v(" "),e("li",[n._v("每个类都存在一个默认的无参数构造函数。如果自定义了带参数构造函数，必须将无参数构造函数显式定义。\n构造方法之间存在着，方法重载：方法名一样，参数列表不同（类型，个数，顺序）\n"),e("strong",[n._v("2.1 关键字private")]),n._v("\nPrivate ：私有的在程序中可以修饰：\n属性：该属性只能在该类中使用。（只有特殊的情况下为public的）\n方法：该方法只能在该类中调用，（只有特殊的情况下定义为private的）\n降低了成员的访问权限。不能在该类的外部实现私有的成员。\n"),e("strong",[n._v("2.1 关键字private")]),n._v("\nPrivate ：私有的在程序中可以修饰：\n属性：该属性只能在该类中使用。（只有特殊的情况下为public的）\n方法：该方法只能在该类中调用，（只有特殊的情况下定义为private的）\n降低了成员的访问权限。不能在该类的外部实现私有的成员。\n静态方法对非静态成员的访问：\n在一个类中，对于非静态成员的访问默认省略的是this\n对于静态成员的访问，默认省略的是类名\n静态的方法，不能直接访问非静态的成员（属性和方法 ？原因）\n非静态可以直接访问静态(静态也是可以用对象访问，而非静态本身就用对象访问\n作用：\n理解setXxx和构造方法的共同点， 再理解setXxx和构造方法在执行的过程中，的时机。\n"),e("strong",[n._v("1.2 this 关键字")]),n._v("\n本质：一个对象在内存中的地址（引用），出现在每一个方法中（this），引用的是调用当前方法的对象\n作用：\n在同一个类中，调用类中的方法（this.methodName()）\nThis区分同名的成员变量和局部变量\n调用构造方法（this(),this(args…..)）,而且必须放在构造方法的第一行\n"),e("strong",[n._v("1.3 static关键字")]),n._v("\nStatic : 静态的 Static修饰属性：所有对象共享的属性，使用static修饰\n实现该属性值的共享，提高内存的使用率。\nStatic�?����\n��̬���Ե�ֵ\n方法区：\nMethod()\nStatic区，共享区\n静态属性的值\n代码中的体现：被static修饰的属性多了一种访问形式\n类名.静态属性\n对象.静态属性\nStatic修饰方法：静态的方法,简化对方法的调用，直接通过类名调用             类名.methodName()\nStatic所修饰的方法特征：\n该方法只访问所有对象共享的属性\n该方法没有访问任何属性\nPublic static void methodName(){\n}\nStatic方法和非静态成员的访问规律：\nStatic方法不能直接访问非static的成员（静态方法在执行的时候，内存中不一定存在对象）")])])])]),n._v(" "),e("p",[e("strong",[n._v("2.1 继承的概述")]),n._v("\n继承有量方面（继承者，被继承者），生活中继承者是可以获得被继承者拥有的资源\n程序中的继承（继承者，被继承者），描述类和类之间的关系\n继承者：类 --- 子类\n被继承者：类--- 父类（基类，超类）\n程序中继承的体现：关键字\n子类 extends 父类，这时候子类就可以获得父类中非private的资源\n还可以有自己特有的资源。\nExten"),e("em",[n._v("ds:关键字 ： 扩展")]),n._v(" "),e("strong",[n._v("2.3 继承后父类和子类构造方法的特征")]),n._v("\n子类构造方法会默认的调用父类中的无参数构造方法  :  super()而且必须放入子类构造方法的第一行。\n继承之后子类和父类的初始化顺序：先初始化父类，再初始化子类。\n"),e("strong",[n._v("2.3 继承后父类和子类构造方法的特征")]),n._v("\n子类构造方法会默认的调用父类中的无参数构造方法  :  super()而且必须放入子类构造方法的第一行。\n继承之后子类和父类的初始化顺序：先初始化父类，再初始化子类。\n"),e("strong",[n._v("2.6 super关键字")]),n._v("\nThis: 表示某个类对象的引用。Super：表示父类的标识（不是引用：因为不是所有的父类都可以被实例化）\nSuper:作用\n在子类的构造方法中，调用父类的构造方法（如果无参：super() ,\n带参数super(args……)\n在子类的方法中，调用父类中的实例方法：super.methodName();\n"),e("strong",[n._v("2.8 继承其他细节")]),n._v("\nJava继承必须单根的。 A extends B (正确)  A extends B,C (错误)Java中的继承可以是多重继承。\nA extends B\nC extends A\nD extends C ,形参一个继承体系，如果需要知道整个继承体系中的功能看最父类，使用的时候使用最子类\njava中的继承满足is----a原则（狗是一个动物）。\n继承的好处：\n提高代码的复用性。\n还可以对父类中已有功能进行升级\n/"),e("em",[e("strong",[n._v("定义King描述国王")])]),n._v("/public class King{    //3 定义一个属性   private static King k;    //属性   private String uname;\n//1 构造方法被私有化，外部是不能创建King的对象   private King(String uname){      this.uname=uname;   }")]),n._v(" "),e("p",[n._v("​    //2 自己创建自己的对象")]),n._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[n._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("static")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("King")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("getInstance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n​      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("k"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("==")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("           k"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("King")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[n._v('"奥巴马"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("return")]),n._v(" k"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v('//批阅文件   public void readFile(){       System.out.println(this.uname+"------批阅文件------");')]),n._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[e("strong",[n._v("面向对象的特征-继承")]),n._v("继承描述的类和类之间的关系，通过建立类和类之间的继承关系，子类可以获得父类中非private的资源。\n程序中的具体体现：\n​    定义父类：抽取所有相关子类的共性，进行封装（类是对象属性和方法的封装）\n​    定义子类 ： extends 建立和父类的继承关系\n​            子类更具体，父类更抽象\n​           创 建子类对象：访问继承子父类中的成员，通过是访问自己特有的资源。")]),n._v(" "),e("p",[e("strong",[n._v("继承后父子类构造方法的特征")]),n._v("\n子类的构造方法中，在第一行通过super关键字，调用父类中默认的无参数的构造方法。\n如果调用父类中自定义的带参数的构造方法：super(args……..)\n创建子类的对象的时候，首先调用父类的构造方法，初始化父类中的属性，然后再初始化自己的属性。")]),n._v(" "),e("p",[e("strong",[n._v("继承后父子类中实例方法的特征")])]),n._v(" "),e("p",[n._v("方法的重写：子类中存在和父类有相同的方法声明，不同的方法体。\n在使用子类对象调用某个方法的时候，如果子类中重写该方法，那就调用子类中的方法，如果没有重写调用父类中的方法。\n方法重写的前提：必须存在继承关系。\n重写的好处：对系统中原有的功能进行扩展，升级\n子类调用父类中的实例方法：super.methodName(args……)"),e("strong",[n._v("java继承的细节")]),n._v("\njava中的继承是单根继承。\nJava支持多重继承（形成一个继承体系）\n如果需要直到整个继承体系中的功能，看最父类\n使用的时候，使用最子类。\n继承原则：is----a"),e("strong",[n._v("final关键字")])]),n._v(" "),e("p",[n._v("final 修饰变量：将变量变为常 常量的命名规则：全部字母大写，多个单词用下划线隔开。\nPublic static final …….\nFinal修饰类：该类不能被继承\nFinal修饰方法：该方法不能被重"),e("strong",[n._v("总结super用法")]),n._v("This 表示的是对象的引用\nSuper:父类的标识\n用法：\n子类的构造方法，调用父类的构造方法\n子类的实例方法，调用父类的实例方法\nFu：method()\nZi:method(){\nSuper.Method();\n}")]),n._v(" "),e("p",[e("strong",[n._v("静态属性：随着类的加载而加载，随着类的消失而消失")]),n._v(" "),e("strong",[n._v("非静态属性：创建对象的时候，进入内容，如果对不再被引用由jvm回收消失")]),n._v(" "),e("strong",[n._v("局部代码块：限定变量的作用域")]),n._v(" "),e("strong",[n._v("静态代码块，构造代码块，构造方法：")]),n._v(" "),e("strong",[n._v("首执行一次静态代码块，")]),n._v(" "),e("strong",[n._v("再执行构造代码块，随着对象创建执行")]),n._v(" "),e("strong",[n._v("再执行构造方法")]),n._v(" "),e("strong",[n._v("同时存在多个静态代码块和构造代码块，安装由上到下的顺序执行。")]),n._v(" "),e("strong",[n._v("1.6 接口的细节")]),n._v("\n接口自身的继承：多继承接口自身的继承：多重继承\n类和接口的关系：实现关系\n接口的实现类 单继承 多实现")]),n._v(" "),e("p",[e("strong",[n._v("2.1 多态实现对程序的扩展性")]),n._v("\n提高了程序可扩展性和可维护下：Fu fu = new Zi(); 使用父类的变量，引用子类的对象。（多态）\n当父类类型的变量，引用不同类型的子类对象，表现的行为不一样。\n---多态就是同一个方法，具备表示不同行为的能力。（有传入参数确定）\n多态的动态绑定：\nPublic void method(Fu fu){\nFu.methodName();  //编译的时候看父类，运行的时候执行子类\n}\n传入的实参是子类的对象\nMethod(new Zi());\nMethod(new Zi1());\nMethod(new Zi2());\nfu：根据传入实参的不同，自动绑定不同的子类对象上。\n接口实现在程序开发过程中定义的标准。便于团队开发，缩短项目的开发周期。\n是系统可以是项目完成模块化开发，分层开发。\n接口是：系统对外提供的交互的功能")]),n._v(" "),e("p",[n._v("表示字符串常量。给一个String类型的变量赋值，只是改变引用地址，没有 等号右边的对象。\nString str=”abc”;\nString str2 = new String(“abc”);\n常用方法：\nConcat() 连接\nSubstring() 截取子字符串\nTrim() 去掉前后空格\ntoUpperCase(),toLowerCase() 大小写转化\nequals() 重写后的\nequalsIgnoreCase() 忽略大小写比较\ncharAt() 指定下标，返回字符\nindexOf() 指定字符，获得下标\nlastIndexOf()\nlength()\nreplace() 替换\nsplit() 分割，返回值为String[]\nstartsWith() ,endsWith()\nString.valueOf() 将任意类型转化为字符串"),e("strong",[n._v("StringBuffer类")]),n._v("是一个可变字符串序列(字符串变量，是可以改变该类对象中内容的)，而且是线程安全。\n对象的获得：\nStringBuffer sb = new StringBuffer()\nAppend() 追加\nInsert()  插入\nDelete() 删除"),e("strong",[n._v("StringBuilder 类")]),n._v("安全性：StringBuffer 安全性，StringBuilder安全性低（线程不同步）\n效率 ：StringBuffer效率低，StringBuilder效率高。")]),n._v(" "),e("p",[e("strong",[n._v("System类")]),n._v("Exit(1)\ncurrentTimeMillis() 获得当前时间到1970.1.1的毫秒数。\n设计模式：\n模板方法设计模式：\n在实现某个功能的时候：有确定的部分，未知的部分\n确定的部分定义在父类，不确定的部分延迟到子类（重写）")]),n._v(" "),e("p",[e("strong",[n._v("Date类")]),n._v("获得系统的当前日期。\nDate date = new Date(); 默认获得系统的当前日期\nDate date = new Date(long ms); //指定特定日期\nAfter()  before()\n"),e("a",{attrs:{href:"mk:MSITStore:C:%5CUsers%5CAdministrator%5CDesktop%5CJDK_API_1_6_zh_CN.CHM::/java/util/Date.html%20%5Co%20java.util%20%D6%D0%B5%C4%C0%E0"}},[n._v("java.util.Date")]),n._v(" "),e("strong",[n._v("java.sql.Date")]),n._v(" "),e("strong",[n._v("1.6 SimpleDateFormat 类")])]),n._v(" "),e("p",[n._v("日期的格式化: 特定保留字\ny 年 M月 d 日期  HH 小时 mm 分钟 ss 秒 SSS毫秒\n创建对象：指定日期的格式\nSimpleDateFormat simple＝　new SimpleDateFormat(“yyyy-MM-dd HH:mm:ss:SSS”)；\nSimple.format(date);\n"),e("strong",[n._v("1.7")]),n._v(" "),e("strong",[n._v("Calendar****类")]),n._v("\n描述日期的组成部分(年，月，日，时，分，秒)Calendar c = Calendar.getInstance();\nc.get(int x);\n"),e("strong",[n._v("1.2集合框架的继承体系")]),n._v("\nCollection 集合的顶层接口    |---List(允许重复元素，是一个有序的集合)\n|----Vector(是一个长度可变的数组，底层为数组实现，而且线程同步，\n效率低)\n|----ArrayList(是一个长度可变的数组，底层为数组实现，而且线程不同\n步，效率高)\n|---LinkedList(?)\n|---Set (不允许重复的元素出现)\n|---TreeSet\n|---HashSet")]),n._v(" "),e("p",[n._v("Map 保存映射关系（键值对）\n|---HashMap\n|---HashTable\n"),e("strong",[n._v("1.3 Vector集合")]),n._v("常见操作以及对应的方法创建容器对象Vector vector = new Vector();添加元素Vector.add(Object o)获得元素Vector.get(int index)获得元素的个数Vector.size()遍历For(int x=0;x<size;x++){Object obj = vector.get(x);\n//向下转型\nType type=（Type）obj；\n//访问type中的方法\n}高级forO 变量的类型和集合中获得元素的类型一致For(Object o : vector){\nSystem.out.println(o);\n}Iterator 迭代器进行遍历（java提供的对集合通用的遍历方式）获得迭代器对象Iterator it=vector.iterator();遍历While(it.hasNext()){\nObject o=it.next();\n}其他方法判断集合中是否包含某个元素Contains() //注意equals方法的重写toArray() 集合转化为数组Object[] arr=vector.toArray()isEmpty() 判断集合是否为空Boolean flag=vector.isEmpty()Remove(int index) 删除元素toString() 集合中转化为字符串clear() 清除集合中的元素")]),n._v(" "),e("p",[e("strong",[n._v("1.4 ArrayList 集合")]),n._v("\n底层为数组实现，线程不同步，效率高。    其他操作基本一致。")]),n._v(" "),e("p",[e("strong",[n._v("LinkedList 集合")]),n._v("底层实现：为链表（铁链）,线程不安全\n应用场景：对保存的数据进行频繁插入，删除操作，选择LinkedList\n常用方法：addFirst，addLast,getFirst,getLast,removeFirst,removeLast\nPush(),pop()\n在开发中使用LinkedList： 实现队列，栈结构\n"),e("strong",[n._v("1.2 TreeSet集合")]),n._v("\n底层实现：二叉树特点：不能包含重复元素，对元素进行排序，线程不同步\n应用场景：如果重复元素进行过滤，并且对元素排序\nTreeSet排序的实现：添加的元素需要实现Comparable接口，重写compareTo()方法，自然排序自定义比较器，自定义类实现Comparator接口，重写compare()方法，在创建TreeSet集合对象的时候，指定比较器。常用方法：\nadd()\n通过遍历集合（迭代）\niterator()\nsize()\nconstains() 判断元素是否存在和元素重写的compareTo方法有关\nremove() 删除元素\nfirst() 获得集合中第一个元素，last()\nisEmpty()\n将List中重复的元素，快速过滤掉？\n"),e("strong",[n._v("1.3 HashSet 集合")]),n._v("\n底层实现：HashMap实现，通过保存的元素的hashCode的值，将元素分布到n个桶中。同时保证每个桶中元素不重复，通过重写equals方法实现。\n在使用HashSet的时候，保存的元素需要重写两个方法hashCode(),equals()\n首先调用hashCode，将元素分布到某个桶中，然后在equals保证每个桶中元素不重复(只有在元素的hashCode值一样的时候，才调用equals)\nhashCode和equals值的对应：\n如果两个对象hashCode值一样，equals不一定一样\n如果两个对象equals值一样，hashCode一定一样。\n常用方法：\nadd()\n通过遍历集合（迭代）\niterator()\nsize()\nconstains() 判断元素是否存在和元素重写的hashCode和equals方法有关\nremove() 删除元素\nfirst() 获得集合中第一个元素，last()\nisEmpty()")])])}),[],!1,null,null,null);t.default=s.exports}}]);