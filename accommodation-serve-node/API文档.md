> `Baseurl`： http://127.0.0.1:3000
>
> |      | 管理员 |   学生    |
> | :--: | :----: | :-------: |
> | 账号 |  1001  | 172017001 |
> | 密码 |  1001  |  123456   |



## 一、GET

#### 1、获取学生基本信息

**URL：** `/api/stu/getinfo`

**Method：** `GET`

🚩 需权限验证 Authorization

| data    | type   |      |
| ------- | ------ | ---- |
| user_id | Number |      |

注：⭐ 表示该参数为必传参数

**Return：**

<span style="color:green;font-weight:bold">success</span>：

```json
{
    code:200,
    token:'添加成功'
}
```

<span style="color:red;font-weight:bold">error</span>：

```json
{
    code:400,
    msg:'该用户信息已存在'
}
```

#### 2、删除学生信息

**URL：** `/api/admin/deleteInfo`

**Method：**`GET`

🚩 需权限验证 Authorization

| data    | type   |      |
| ------- | ------ | ---- |
| user_id | Number | ⭐    |

注：⭐ 表示该参数为必传参数

**Return**

<span style="color:green;font-weight:bold">success</span>：

```json
{
    code:200,
    msg:'删除成功'
}
```

<span style="color:red;font-weight:bold">error</span>：

```json
{
    code:400,
    msg:'删除失败'
}
```



#### 3、获取宿舍信息

**URL：** `/api/user/getDormInfo`

**Method：** `GET`

🚩 需权限验证 Authorization

| data     | Type   |      |
| -------- | ------ | ---- |
| user_id  | String |      |
| truename | String |      |
| towerNum | String |      |
| roomNum  | String |      |
| bedNum   | String |      |

 注：⭐ 表示该参数为必传参数 

**Return**

<span style="color:green;font-weight:bold">success</span>：

```json
{
    code:200,
    data
}
```

<span style="color:red;font-weight:bold">error</span>：

```json
{
    code:400,
    msg:'查询失败'
}
```



## 二、POST

#### 1、登录

**URL：** `/api/user/login`

**Method：** `POST`

| data     | Type   |      |
| -------- | ------ | ---- |
| user_id  | String | ⭐    |
| password | String | ⭐    |
| role     | Number | ⭐    |

> role： 
>
> 1： 管理员； 
>
> 0 ： 学生 ；

**Return**

<span style="color:green;font-weight:bold">success</span>：

```json
{
    code:200,
    token:'skdljhalsjkdahsldkag'
}
```

<span style="color:red;font-weight:bold">error</span>：

```json
{
    code:400,
    msg:'用户不存在'
}
```



#### 2、添加学生登录信息

**URL：** `/api/admin/register`

**Method：** `POST`

🚩 需权限验证 Authorization

| data     | type   |
| -------- | ------ |
| user_id  | String |
| password | String |

**Return：**

<span style="color:green;font-weight:bold">success</span>：

```json
{
    code:200,
    token:'添加成功'
}
```

<span style="color:red;font-weight:bold">error</span>：

```json
{
    code:400,
    msg:'用户已存在'
}
```



#### 3、添加学生基础信息

**URL：** `/api/admin/insert`

**Method：** `POST`

🚩 需权限验证 Authorization

| data        | type   |      |
| ----------- | ------ | ---- |
| user_id     | Number | ⭐    |
| truename    | String | ⭐    |
| nickname    | String |      |
| gender      | String | ⭐    |
| class       | String | ⭐    |
| telphone    | String | ⭐    |
| institution | String | ⭐    |
| profession  | String | ⭐    |
| grade       | String | ⭐    |

注：⭐ 表示该参数为必传参数

**Return：**

<span style="color:green;font-weight:bold">success</span>：

```json
{
    code:200,
    token:'添加成功'
}
```

<span style="color:red;font-weight:bold">error</span>：

```json
{
    code:400,
    msg:'该用户信息已存在'
}
```



#### 4、修改学生信息

**URL：** `/api/admin/update`

**Method：** `post`

🚩 需权限验证 Authorization

| data        | type   |      |
| ----------- | ------ | ---- |
| user_id     | Number | ⭐    |
| truename    | String |      |
| nickname    | String |      |
| gender      | String |      |
| class       | String |      |
| telphone    | String |      |
| institution | String |      |
| profession  | String |      |
| grade       | String |      |

**Return：**

<span style="color:green;font-weight:bold">success</span>：

```json
{
    code:200,
    token:'修改成功'
}
```

<span style="color:red;font-weight:bold">error</span>：

```json
{
    code:400,
    msg:'该用户信息已存在'
}
```



#### 5、图片上传

**URL：** `/api/user/upload`

**Method：** `post`

🚩 需权限验证 Authorization

| data | type      |      |
| ---- | --------- | ---- |
| file | form-data | ⭐    |

**Return：**

<span style="color:green;font-weight:bold">success</span>：

```json
{
    code:200,
    msg:'上传成功'
    path:'uploados/uplodas_......'
}
```

<span style="color:red;font-weight:bold">error</span>：

```json
{
    code:400,
    msg:'上传失败'
}
```
