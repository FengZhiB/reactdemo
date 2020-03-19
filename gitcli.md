### git操作
```bash
# 用户设置 每台电脑只需要执行一次
$ git config --global user.name "Zhang san"
$ git config --global user.email "zhangsan@163.com"
```

```bash
# 初始化仓库
$ git init

# 查看状态
$ git status

# 添加文件管理
$ git add filename  #添加指定文件
$ git add .         #添加所有文件
$ git add path/     #添加文件夹

# 提交到本地仓库
$ git commit -m 'msg'

# 查看提交日志
$ git log

# 恢复版本
$ git reset --hard hash(前6位)

# 忽略列表
# 在项目根目录创建一个名为  .gitignore 的文件
# 该文件是git仓库的忽略文件
# 该文件每一行忽略一个内容 可以是文件名或目录

```

```bash
# 远程仓库操作
# 设置远程仓库源
$ git remote add origin https://github.com/jxsrzj0325/mi.com.git
# 将本地仓库推送到远程仓库
$ git push -u origin master
# 从远程仓库拉取项目
$ git pull origin master
# 从远程仓库复制项目
$ git clone https://github.com/jxsrzj0325/mi.com.git
```

### 分支操作
```bash
# 新建分支
$ git branch 分支名  

# 查看分支
$ git branch

# 切换分支
$ git checkout 分支名

# 合并分支
$ git merge 分支名
```

## 代码存储仓库
1. github
2. 码云
3. gitlab
4. xxx

## 码云
1. 每一个联系创建组织-》仓库-》本地同步远程代码
2. 小组来完成  
   1. 一个创建
   2. 邀请其他成员

3. 注意： 
   - 电脑中gitee.com账号
     - 控制面板-> 用户账号-> windows凭证-> gitee.com账号-> 改成自己的

3. 使用git来做项目管理

## git团队操作

1. 什么是git
   - git是一个分布式的版本控制管理工具
     - 分布式：分布式计算是计算机科学中一个研究方向，它研究如何把一个需要非常巨大的计算能力才能解决的问题分成许多小的部分，然后把这些部分分配给许多计算机进行处理，最后把这些计算结果综合起来得到最终的结果 
       
     - 版本
       - git可以存储多个项目版本，为了将来的版本切换
         - 1.0
         - 2.0
         - 3.0
         - 4.0
   
2. git的安装
   - 安装的gitbash.exe
3. git概念
   - 本地git仓库
   - 远程git仓库
     
   
4. git 基础
   - git初始化 -》 在我们的工程（项目中）创建一个git仓库，这个仓库用一个.git的文件夹表示的
$ git init
   - 将本地文件提交到暂存区
$ git add. 将工程（项目）中所有的都存放到暂存区
$ git add ./index.js 将工程（项目）中指定的放在暂存区
   - 将在暂存区的文件提交的仓库存储区
$ git commit -m ' 对当前提交的文件说明 '
   - 查看提交日志
$ git log
   - 查看简洁版提交日志
$ git log --oneline
   - 版本回退
- git reset  -- hard HEAD   当前的版本​
- git reset --hard HEAD^  上一个版本
- git reset --hard HEAD^^  上上一个版本
- git reset --hard HEAD~100  往上100个版本
   - 进行文件修改的撤销
$ git checkout -- 文件路径
5. git 分支管理
   - git分支创建
$ git branch 分支名
   - git分支的切换
$ git checkout 分支名
   - 发现在分支中也可以看到主分支的提交记录
   - 连接远程
$ git push 远程仓库地址 分支名称
   - 注意： 如果两个人同时操作了一个文件，这个时候就会有冲突，我们应该怎么办？
   - 解决： 先git pull , 然后在手动处理，然后在去提交
   - 为了解决每次都要书写远程url，我们可以给远程url写一个别名
$ git remote add -m 别名 url
$ git push origin 分支名称
   - 分支合并
$ git merge 分支名称

git 总结：

0.  问题： 老大给了你一个git的连接，告诉你： 去拉取一下代码
   1. 回复： 请老大给我拉我一下权限
   2. 确保你自己的电脑上的gitee.com账号时你自己的
   3. 拉取的是哪一个分支的代码

1. git流程
   - 工作区 -> 本地仓库 -> 远程仓库
2. 分支
   - 先创建本地分支 -> 切换本地分支 -> 工作区操作 -> 远程分支
3. 主管改了主分支东西，你要重新更新 
4. 分支的合并
5. git 冲突解决
   - 先git pull 然后 手动选择 然后上传 
6. git 版本回退
7. 上传式不能是空目录

问题： 本地同步远程

1. git remote add origin url
2. git pull origin 分支名  --allow-unrelated-histories
3. 手动解决冲突问题