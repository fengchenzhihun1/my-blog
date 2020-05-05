---
title: 数据库问题
date: 2019-12-20
sidebar: 'auto'
categories:
 - 数据库
tags:
 - 问题
publish: true
---
# 数据库

## mysql

## oracle

 1. 去除前后逗号，以及中间多余的逗号，正则表达式写法

     ```sql
    regexp_replace(regexp_repalce(字段,'[，]+',‘,’),'(^[,])|([,]$)','')
    ```

    

 2. 将一个字段安装某种规则拆分成数组

     util_spit是一个自定义函数

     ```sql
     select 'a' , colum_value  from table（select util_spit(字段,',') from table）
     ```

     

 3. 审计

     

 4. 

## sqlserver 

1.  中文乱码问题

   中文字符前面需要加N

2. 

## redis

