---
title: oracle基础
date: 2019-12-20
sidebar: 'auto'
categories:
 - 数据库
tags:
 - oracle
publish: true
---

## oracle基础知识

### 用户

| 用户   | 作用                                                         |
| ------ | ------------------------------------------------------------ |
| sys    | 超级用户 --具有最高权限，有sysdba角色，有创建数据库的权限，如果没有设置密码默认为change_on_install |
| sys    | 具有管理的权限，具有sysoper的角色，没有创建数据库的权限，如果没有设置默认密码为manager |
| system | （管理员） scott（普通用户） 默认密码为tiger                 |

### 简单命令

1. **连接**

   | 命名       | 操作或解释                            |
   | ---------- | ------------------------------------- |
   | connect    | 用户名/密码 as sysdba /as syspoer     |
   | disconnect | 断开连接                              |
   | password   | 用于修改用户的密码                    |
   | show  user | 显示当前用户                          |
   | exit       | 该命令会与数据库断开连接 退出sql/plus |

   

2. **文件操作**

   - start和@
     - sql>start c:/a.sql
     - .>@c:/a.sql

3. **交互式命令**

   1. **&**    可以替代变量，而在该变量执行时，需要输入用户

   ```sql
   select * from emp where job='&job'
   ```

   2. **edit** ---该命令可以编辑指定的sql脚本

      ```sql
       sql>edit d:/q.sql
      ```

      

   3. **spool**   该命令可以将sql*plus屏幕上的内容输入到指定文件中去

      ```sql
        sql>spool d:/b.sql  并输入 sql>spool  off 
      ```

### 用户管理

1. **管理对象的权限(授予权限，回收权限)**

   - grant select on scott.tmp to scott(用户）--授予权限
   - revoke select on scott.emp from scott（普通用户） --回收权限

2. **预定义角色**

   - connect角色

     在建立数据库时，由脚本自动建立。它授予用户最基本的权限

   - resource角色

     建立数据库用户后，一般情况下只给用户授予connect和resource角色

   - DBA角色    

     DBA角色具有所有系统权限和with admin option

3. **删除用户**

   - drop user 用户名
   - drop user 用户名 cascade	

   

4. **权限管理--是指执行特定类型的sql语句或访问其他模式对象的权利**

   - oracle的的权限可以分成两大类：系统权限和对象权限
     - 系统权限是指执行特定类型的sql语句的权利。它用于控制用户可以执行的一个或一组数据库操作
     - 对象权限是指对象级控制数据库的存取和使用的机制，即访问其他用户对象的权利

### 系统权限授予

  授予权限是由DBA完成的，如果要是以其他用户的身份授予系统权限，则要求该用户必须具有grant any privilege的系统权限，或者相应的系统权限具有 with admin option的权限

1.**显示系统权限**
   oracle 提供查看数据库中的各种权限信息的视图

| 命令                 | 解释                                 |
| -------------------- | ------------------------------------ |
| dba_sys_privs        | 包含数据库管理员的所有权限信息       |
| session_privs        | 包含当前数据库用户可以使用的权限信息 |
| system_privilete_map | 包含系统中所有的系统权限信息         |

2. **收回系统权限**

   ```sql
    revoke create session
   ```

   ```sql
   create table from ibm
   ```

   ```sql
   revoke create view from ibm 
   ```

### 数据字典

记录了数据库的系统信息，它由只读表和视图组成，数据字典上的所有者是sys,

oracle 中的所有用户只能查看数据字典，都不可以修改其中的内容，数据字典由oracle自己来维护  数据字典包含数据字典表和数据字典视图。其中基于表存储数据库的基本信息，普通用户不能访问数据字典的基表。数据字典视图是基于数据字典基表建立的视图，普通用户可以查询数据字典视图。

 **针对表的操作**

1. 查询当前用户拥有哪些表user_tables

   ```sql
    select  * from user_tables
   ```

2. 查询当前用户可以访问哪些表all_tables

   ```sql	
   select * from all_tables
   ```

3. 查询所有方案的表dba_tables

   ```sql    
    select * from dba_tables	 
   ```

4. 查询数据库中所有所有dba_users

   ```sql
   select * from dba_users
   ```

5. 查询该用户所具有的系统权限：dba_sys_privs(查询出xm的系统权限）

   ```sql
   select * from dba_sys_privs where grantee='xm';
   ```

6. 查询用户所具有的对象权限dba_tab_privs

   ```
   select * from dba_tab_privs where grantee='xm' 
   ```

7. 查询一个角色包含哪些系统权限（dba_sys_privs）

8. 查询一个角色包含哪些对象权限（dba_tab_privs） 

9. 查询oracle中有哪些角色(dba_roles) 

   ```sql
   select * from dba_roles；
   ```

10. 查询数据库名称 select * from global_name;----V_$（动态性能视图）

### 动态性能视图（了解）

  动态性能视图用于记录当前本次数据库例程的活动信息，当启动oracle服务时，系统自动建立动态性能视图。当停止oracle服务时，系统自动删除动态性能视图。
  oracle 中的动态性能视图是V_$开头的

```sql
select * from Vfixed_table  where name like 'V%';
```

### 表管理（概念）

  表是最常见的一种组织数据的方式，一张表一般具有多个列，或称为字段。
  每个字段都具有特殊的属性，包含字段名，字段的数据类型，字段长度，约束，默认值

 Oracle 5种内置字段的数据类型

1. 字符数据类型
    	   char数据类型：有固定的长度和最大长度的字符串。长度定 义在1-2000字节之间
    	   varchar2 数据类型：可变长的，有最大长度的字母数字型数据 varchar2 类型的字段长度可以到达4000字
2. 数值数据类型
   数值数据类型的字段用于存储带符号的整数或浮点数。
   ORACLE 中的number数据类型具有精确度precision和范围scale 
3. 日期时间数据类型
   date数据类型：用于存储日期的世纪，年，月，日，分和秒
   timestamp 数据类型：用于存储日期的年，月，日，以及时间的小时，分和秒
4. LOB数据类型（“大对象”数据类型）
   clob :存储大量字符数据，是内部LOB	
   BLOB:存储较大的二进制对象
   BFILE：存储二进制文件，是外部LOB	
   ROWID数据类型:被称为“伪劣类型”，是base 64编码的字符串，用于唯一的标识一条记录
    rownum---伪劣类型

### 表管理（创建，修改，删除）   

**创建表**

1. create table 表名 （column_name datatype,column_name datatype.....);
2. 增加和删除字段

?	todo

3. 用查询的结果创建一张表

?	todo

4. 有表结构有内容

   ```sql
   create table newtable as select * from  existtablename where 1=1;
   ```

5. 有表结构无内容

   ```sql
   create table  newtable as select * from  existtablename where 1=2;
   ```

**修改表**

1. 更该现有列的数据类型和字段宽度

   ```sql
   alter table 表名 modify (column datatype)
   ```

?          eg：修改remark的列宽为200字节

```sql
  alter table 表名 modify(remark varchar(200））；
```

2. 更改列名

   ```sql
   alter table tablename rename column 老名字 to 新的名字
   ```

3. 删除表中现有的列alter table 表名 drop column 列名

   ```sql
   alter table 表名 drop column 列名
   ```

**删除表**

```sql
drop table 表名
```

**重新命名表**

```sql
rename 老名 to 新名
```

**非空约束（非空约束就是限制必须为某个列提供值）**

```sql
alter table 表名 modify 列名 not null
```

**主键约束**

?	用于唯一的标识表中的每一行数据。在一个表中，最多只能有一个主键约束。主键约束可以有一个列组成，也可以由两个或两个以上的列组成。对于表中的每一换行数据，主键约束列都是不同的

1. 将某列定义为主键约束、

   ```sql
   alter table 表名 add constriant pk_name key(empno)
   ```

2. 将某一列定义为唯一键约束

   ```sql
   alter table talbename add constriant  keyname unique (columnname)
   ```

3. 在某一列中插入数据

   ```sql
   insert into 表名 values （column，datatype）
   ```

   

**外键约束**

```sql
alter table tablename add constraint keyname foregin key （columnname) references ref_table(ref_columnname) on delete cascade;

alter table emp1 add constraint fk_dept1 froeign key(deptno) references dept1 (deptno)

```

**约束关系** 

1. 禁止约束关系

   ```sql
    alter table table_name disable constraint _name
   ```

2. 激活约束的语句

```sql
alter table table_name enable novalidate |validate constraint constriant_name
```

**novalidate**: 在激活约束条件下不验证表中已经存在的数据是否满足约束条件

**validate**:在激活约束时系统将验证表中的数据是否满足约束的定义

3. 删除主键或者唯一键约束

```sql
alter table tableaname drop constraint keyname;

 eg: alter table emp1 drop constraint pk_emp1

eg：alter table emp1 drop constraint un_emp1
```

3. 删除表间的参照关系

```sql
alter table tablename drop constraint  keyname
```

eg：删除对emp1.deptno字段定义的fk_dept1外键约束

```sql
alter table emp1 drop constriant fk_dept1
```

### 表查询

**了解emp表 dept表**  

**emp 表** 



| 字段名   | 含义     |
| -------- | -------- |
| empno    | 雇员编号 |
| ename    | 員工姓名 |
| mgr      | 上级编号 |
| hiredate | 入职时间 |
| salary   | 薪水     |
| job      | 工作岗位 |
| comm     | 奖金     |
| deptno   | 部门编号 |

clerk 普通员工salesman 销售  manager 经理 analyst 分析师  president 总裁

**dept 表**

|            |            |
| ---------- | ---------- |
| deptno     | 部门编号   |
| dname      | 部门名称 l |
| oc         | 部门地址   |
| accounting | 财务部     |
| sales      | 销售部     |
| operations | 运营部     |

检索单表数据(是从单个表中检索数据)

以scott/tiger 身份连接数据库 

1. 检索emp表中的所有数据

   ```sql
   select * from emp
   
   ```

2. 检索empno ename job sal deptno

```sql
select empno，ename,job,sal,deptno from emp

```

3. 为列指定别名

   ```sql
   select empno as 员工编号，ename 员工姓名，job,sal，deptno from emp
   
   ```

   

4. 使用dual 表

   ```sql
   select sysdate from dual;
   
   ```

**过滤数据**

在select 语句中 可以使用where语句进行过滤数据

1. 比较操作符

   = <> ,!= ,<,>,=,any（任一），all(全部)

  2 .  字符串和日期类型必须使用单引号标识

3. 字符串区分大小写

4. 日期默认格式为dd-mon-yy

5. 模糊查询,逻辑查询符

   between...and... not between...and...

    in  not  in

   like not like

   (注意：在like 的模式下，_代表任意一个字符，%代表任一数量的字符)

   is null  is not null

如果检索的数据中本身包含_或者\,可以使用escape eg:like '%\_%'

使用**逻辑操作符**

如何查询工资高于500或者职位是manager ，并且员工的首字母是J开头的

（注意：这里面的=主要是针对字段具体的值)

 select * from emp where (sal> 500 or job !='mamnger') and ename like '%J'

掌握逻辑运算符，order by排序  group by分组查询

and 

or 

not  在使用多个逻辑运算符连接多个条件时，需要注意运算符的优先级。由高到低not and or 括号内地优先级高于括号外的优先级

**使用order by 字句对数据排序 asc 升序 desc 降序**

**按照工资的升序进行排序**

```sql
select *from emp order by sal asc;

```

**按照工资降序，部门号的升序进行排列**

```sql
select * from emp order by sal desc，deptno asc；

```

**使用列的别名**

```sql
select * from ename,sal*12 “年薪” from emp order by “年薪” asc；

```

**分组查询 group by （重点）**

如何显示每个部门的平均工资和最高工资

```sql
select * from avg（sal),max（sal),deptno from emp group by deptno;

```

**having 子句的使用，主要是对分组后条件的限制**

如何显示每个部门的平均工资 ，并且平均工资低于2000的部门信息

```
select avg（sal) ,deptno from emp group by deptno and having avg(sal）< 2000;

```

在查询的时候需要group by，having，order by

注意：在分组中出现的字段，必须出现在查询显示的字段中

表查询（分页查询 分页查询排序，分页查询的分组）

查询数据库中的某几条数据--rownm(伪列)

oracle中给查询结果添加伪列--查询emp表中的第6-10条

```sql
select ename from emp;/select * from emp

```

2 将查询的结构集的伪列添加进去  查询<=10条数据

```sql
 select rownum rn，e1.* from(select ename from rmp)e1 where rownum<=10

```

3 将第二次查询的结果当做一张表，取出>=6 的数据

```sql
select * from (select rownum rn,e1.* from (select * from emp order by HIREDATE desc) e1 where rownum <=10) e2 where e2.rn>=6; 

```

**oracle 连接查询**

 多表查询是基于两个及两个以上的表或者视图的查询，在实际应用中单个表查询可能不能满足条件，就需要用到多表连接查询

  什么是连接查询

?     将来自不同表的数据在关系的基础上连接到一起

- 交叉连接（在实际应用中很少使用）

  不带连接谓词的连接，即两个表的笛卡尔积是两表中元组的交叉乘积

  ```sql
  select * from emp，dept;
  
  ```

  

- 内连接 外连接 自连接

  外链接的概念：外连接用来连接一个表中不匹配的行。一个表最多只能和一个表进行外部联接。 

  外链接的分类：（左外连接 全外连接 右外链接)

  左外连接：

  ```sql
  left outer join    left join
  
  ```

  右外连接:

  ```sql
  right outer join    right join
  
  ```

  全外连接  （左右两表都不加限制）

  ```sql
   full outer join 或者 full join
  
  ```

  内连接：以等号运算符为基础的连接

   自然连接：是内连接的一种情况，就是取消没有关联的数据

  例子: 通过连接查询全部记录：查询每个员工的所在部门的信息

  ```sql
  select * from emp,dept where emp.deptno=dept.deptno；
  
  ```

  自然连接：

  ```sql
  select emp.*,dept,dname,dept.loc from emp，dept where 
  
  emp.deptno=deptno.deptno;
  
  ```

  ### SQL中的函数

**单行函数**

单行函数也称为标量函数，对于从表中查询的每一行，该函数都会返回一个值

单行函数：通用函数，字符函数，数字函数，日期函数，转换函数

字符函数：大小写处理函数 lower upper initcap

?    字符处理函数



| 函数       | 含义     |
| ---------- | -------- |
| substr     | 截取     |
| lenght     | 长度     |
| instr      | 查找     |
| lpad\|rpad | 补全填充 |
| trim       | 去除     |
| replace    | 替换     |
|            |          |

1. 大小写处理函数

   |                     |            |
   | ------------------- | ---------- |
   | lower(SQL Course)   | sql course |
   | upper(SQL Course)   | SQL COURSE |
   | initcap(SQL Course) | Sql Course |

   

?        

?     





2. 字符处理函数

   |                              |            |
   | ---------------------------- | ---------- |
   | concat('Hello','World')      | HELLO WORD |
   | substr('HelloWord',1,5)      | Hello      |
   | length('HelloWord')          | 10         |
   | instr('HelloWorld','W')      | 6          |
   | lpad(salary,10,*)            | ***6666666 |
   | rpa·                         | 25000000** |
   | trim（'H' from 'HelloWorld') | elloWorld  |

   

3. 数学函数

round :四舍五入

round(45.926,2)                   45.93

trunc:截断

trunc(45.926,2)                      45.92

mod 取余数

mod(10,3)                                 1

- 日期函数

  1 months_between函数返回两个指定日期之间的月数

    格式：months_between（d1，d2）

  ```sql
    select months_between（sysdate,'29-5月-2007 ') from            dual；
  
  ```

  2 add_months函数返回给指定的日期加上指定的月数后的日期值    

  格式：add_months(d，n)

  ```sql
  select add_months(sysdate,2) from dual;
  
  ```

  3 next_day 函数返回指定日期下一个星期几的日期 

    格式：next_day（d,day）

  ```sql
  select sysdate，next_day（sysdate,'星期二'） from dual;
  
  select sysdate,next_day（sysdate,'星期三'） from dual;
  
  ```

  

- 转换函数



- 聚合函授                                                                                                                                                                                                       ````