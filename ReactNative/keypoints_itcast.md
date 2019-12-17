### i5ting_toc 

一个把markdown转换为网页的工具





### 基本开发环境配置

#### 1. 安装最新版本的java jdk

1. 修改环境变量，新增`JAVA_HOME`的系统环境变量，值为`C:\Program Files (x86)\Java\jdk1.8.0_112`，也就是安装JDK的根目录
2. 修改系统环境变量`Path`，在`Path`之后新增`;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin`
3. 新建**系统环境变量**`CLASSPATH`，值为`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`
4. 保存所有的系统环境变量，同时退出系统环境变量配置窗口，然后运行cmd命令行工具，输入`javac`，如果能出现javac的命令选项，就表示配置成功！

#### 2. 安装Node.js环境

注意：需要安装最新的长期稳定版本，不要实验版本；安装完毕之后的node.js会自动配置到全局系统环境变量中
安装完毕后，可以输入`node -v`查看node版本号；

#### 3. 安装C++环境

**注意：大多数情况下操作系统自带C\++环境，不需要手动安装C\++环境；**
如果运行报错，则需要手动安装visual studio中的C\++环境；

#### 4. 安装Git环境

Git安装完毕后，会自动配置到系统环境变量中；
可以通过运行`git --version`来检查是否正确安装和配置了Git的环境变量；

#### 5. 安装Yarn包管理工具

> 什么是yarn：和 npm 性质差不多，都是前端的包管理工具；**它依赖于nodejs平台**
>
> 注意：在 React Native 开发过程中，推荐直接使用 yarn 来安装依赖包；
>
> 注意：在 RN 学习中，不要使用 npm 和 cnpm ，因为它们装的包，路径有问题，或者会出现丢包的情况；

在下发给各位同学的安装包中，找到`Yarn`的安装文件，双击直接安装即可；

#### 6. 安装Python环境

1. 注意：安装Python时候，只能**安装2.×的版本**，注意勾选安装界面上的`Add Python to path`，这样才能自动将Python安装到系统环境变量中；
2. 安装完毕之后，可以在命令行中运行`python`，检查是否成功安装了python。

> 以管理员权限运行一个非exe程序：开始=>cmd=>以管理员身份运行cmd=>用cd切换到目标程序目录=>键入文件名以运行该程序

#### 7. 配置安卓环境

1. 安装`installer_r24.3.4-windows.exe`，最好手动选择安装到C盘下的android目录
2. 打开安装的目录，将`android-23`、`android-24`、`android-25`、`android-26`右键 `x` 解压后，放到`platforms`文件夹下
3. 右键 `x` 解压`platform-tools`，将解压得到的文件夹，放到和`SDK Manager.exe`平级的目录中
4. 在安装目录中新建文件夹`build-tools`，右键 `x` 解压 `build-tools_r23.0.1-windows.zip(react-native必须依赖这个)`、`build-tools_r26.0.0-windows.rar(weex必须依赖这个)`，并将解压出来的文件夹，拷贝到`build-tools`文件夹下
5. 在安装目录中，新建`extras`文件夹，在`extras`文件夹下新建`android`文件夹；右键 `x` 解压`m2responsitory`文件夹和`support`文件夹，放到新建的`extras -> android`文件夹下
6. 配置安装环境变量：在系统环境变量中新建`ANDROID_HOME`，值为android SDK Manager的安装路径`C:\Users\liulongbin\AppData\Local\Android\android-sdk`，紧接着，在Path中新增`;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`





### yarn使用说明

> yarn 作用和 npm 完全一样，但是从体验上来说，yarn 更胜一筹； 而且 ， RN 中只能使用 yarn 装包，千万不要用 `cnpm` 或 `npm`;

1. 装包运行 `yarn add jquery`，这里不需要指定 `--save` 或 `-S` ，因为 yarn 默认就是安装到了 `dependencies` 节点下；
2. 运行 `yarn add webpack -D`， 这里的 `-D` ，就表示，把对应的包，安装到 `devDependencies` 节点下；
3. 运行 `yarn remove 包名` 就可以卸载包，同时，会自动 把 `package.json`中记录的包信息删除；
4. `yarn init -y`表示快速初始化一个 包管理配置文件，如果在项目中，不初始化就装包，也会出现 安装到 用户目录下的问题；
5. 运行 `yarn` 可以安装所有在 `package.json` 中记录的包；



### React Native开发环境配置

Yarn 和 React Native的命令行工具（react-native-cli）

+ Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。
+ React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

> npm install -g react-native-cli

+ 安装完yarn后要设置镜像源：

> yarn config set registry https://registry.npm.taobao.org --global

> yarn config set disturl https://npm.taobao.org/dist --global







### 创建一个名称为 AwesomeProject 的项目并打包到手机上

1. 运行`react-native init AwesomeProject`  创建React-Native项目。

   > 注意：RN项目，必须放在纯英的目录下，否则 运行会报错！

2. 运行`cd AwesomeProject`切换到项目根目录中，运行`adb devices`来确保有设备连接到了电脑上。如果无法检查到设备列表，请先确保手机开启了`开发者模式`，同时要电脑上要安装手机的驱动程序

3. 运行`react-native run-android`打包编译安卓项目，并部署到模拟器或开发机中

   > **注意：**
   >
   > + 如果该手机系统为MIUI，记得到开发者模式中关闭MIUI优化
   >
   > + 首次打包时候，会联网下载`gradle`相关的文件，需要等待很长时间，大家可以直接从`http://www.androiddevtools.cn/`手动下载对应版本的`gradle`文件，并手动拷贝解压到`C:\Users\自己的用户名\.gradle\wrapper\dists`目录下；
   > + 接下来，如果是第一次打包，会从`https://jcenter.bintray.com`下载好多的依赖项，此时需要耐心等待，如果中间出现了长时间卡顿，大家需要`Ctrl+C`停止打包，并重新运行`react-native run-android`
   > + 当项目已经安装到手机上后，可在项目的根目录中，通过 终端 运行 `react-native start` 可以快速启动 `packager server`，而无需运行`react-native run-andriod`

4. 关于packager server

   4.1什么是packager server：为终端调试机实时传输应用数据的服务器

   ![关于 packager server 的作用](mynote_images\关于 packager server 的作用.bmp)

   4.2连接不上packager server如何配置：

   ![关于如何配置Packager Server 的步骤说明](mynote_images\关于如何配置Packager Server 的步骤说明.png)

   

5. 关于RN项目中每个文件的作用:

   参考博客：[react-native之项目结构分析](http://blog.csdn.net/dachaoxuexi/article/details/78676291)

   ![关于RN项目中每个文件的作用](mynote_images\关于RN项目中每个文件的作用.png)
   
   
   
   
   
   ### 解决应用界面空白的问题：
   
   1.在android/app/src/main目录下手动创建一个名为assets的文件夹
   
   2.cmd中，在项目根目录运行如下命令，从而手动生成index.android.bundle：
   
   `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`
   
   （1）--platform：平台
   
   （2） --dev：开发模式
   
   （3） --entry-file：条目文件
   
   （4）--bundle-output：bundle文件生成的目录
   
   （5）--assets-dest：资源文件生成的目录
   
   这样我们的‘index.android.bundle’就生成完毕了，下面我们再来运行一下。
   
   





















