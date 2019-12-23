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

   4.2连接不上packager server如何配置：（新版本的RN支持不联网，直接通过USB获取更新数据）

   ![关于如何配置Packager Server 的步骤说明](mynote_images\关于如何配置Packager Server 的步骤说明.png)

   

5. 关于RN项目中每个文件的作用:

   参考博客：[react-native之项目结构分析](http://blog.csdn.net/dachaoxuexi/article/details/78676291)

   ![关于RN项目中每个文件的作用](mynote_images\关于RN项目中每个文件的作用.png)
   
   
   
   ### [解决运行'react-native start'时的报错 error Invalid regular expression: ](https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start)
   
     `node v12.11.0` 之后会有这个bug。于项目找到 \node_modules\metro-config\src\defaults\blacklist.js 文件
   
   之后把
   
   ~~~js
   var sharedBlacklist = [
     /node_modules[/\\]react[/\\]dist[/\\].*/,
     /website\/node_modules\/.*/,
     /heapCapture\/bundle\.js/,
     /.*\/__tests__\/.*/
   ];
   ~~~
   
   改为：
   
   ~~~js
   var sharedBlacklist = [
     /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
     /website\/node_modules\/.*/,
     /heapCapture\/bundle\.js/,
     /.*\/__tests__\/.*/
   ];
   ~~~
   
   
   
   
   
   ### 解决安装应用后其界面空白的问题：
   
   1.在android/app/src/main目录下手动创建一个名为assets的文件夹
   
   2.cmd中，在项目根目录运行如下命令，从而手动生成index.android.bundle：
   
   `react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`
   
   （1）--platform：平台
   
   （2） --dev：开发模式
   
   （3） --entry-file：条目文件
   
   （4）--bundle-output：bundle文件生成的目录
   
   （5）--assets-dest：资源文件生成的目录
   
   这样我们的‘index.android.bundle’就生成完毕了，下面我们再来运行一下。
   
   
   
   
   
   
   
   ### vscode ——open Command Palette
   
   ctrl+P
   
   
   
   









### 	轮播图组件

1. 轮播图官网：`https://github.com/leecade/react-native-swiper`
2. 运行`yarn add react-native-swiper`安装轮播图组件
3. 导入轮播图组件`import Swiper from 'react-native-swiper';`
4. 其中，在Swiper身上，`showsPagination={false}`是用来控制页码的；`showsButtons={false}`是用来控制左右箭头显示与隐藏；`height={160}`是用来控制轮播图区域的高度的！
5. 设置轮播图的样式：

```
var styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    image:{
        width:'100%',
        height:'100%'
    }
})
```

6. 将组件的代码结构引入到页面上：

```jsx
// 注意： 在 Swiper 的外面，一定要包裹一个 View， 并给这个 View 设置高度；否则无法看到轮播图
<View style={{ height: 200 }}>
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  </View>
```

#### 





### 六宫格

~~~css
/* 设定父元素 */
myGrid{
    flex:1,
    flexWrap:"wrap",
    flexDriction:"row"   
}
/* 设定子元素 */
myGridItem{
    width:33.3%,
    alignItems:"center"
}
~~~





### 移动端APP不存在跨域问题。因为它不是浏览器。



###  调用摄像头拍照

[react-native-image-picker的github官网](https://github.com/marcshilling/react-native-image-picker)
[react native 之 react-native-image-picke的详细使用图解](http://www.cnblogs.com/shaoting/p/6148085.html)

1.  运行`npm install react-native-image-picker@latest --save`安装到项目运行依赖，此时调试**可能会报错**，如果报错，需要使用下面的步骤解决：
    + 先删除`node_modules`文件夹
    + 运行`npm i`
    + 运行`npm start --reset-cache`
2.  运行`react-native link`自动注册相关的组件到原生配置中
3.  打开项目中的`android`->`app`->`src`->`main`->`AndroidManifest.xml`文件，在第8行添加如下配置：

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

4. 打开项目中的`android`->`app`->`src`->`main`->`java`->`com`->`当前项目名称文件夹`->`MainActivity.java`文件，修改配置如下：

   ```java
   package com.native_camera;
   import com.facebook.react.ReactActivity;
   
   // 1. 添加以下两行：
   import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
   import com.facebook.react.modules.core.PermissionListener; // <- add this import
   
   public class MainActivity extends ReactActivity {
       // 2. 添加如下一行：
       private PermissionListener listener; // <- add this attribute
   
       /**
        * Returns the name of the main component registered from JavaScript.
        * This is used to schedule rendering of the component.
        */
       @Override
       protected String getMainComponentName() {
           return "你的项目名称";
       }
   }
   ```

5. 上面就配置完成插件环境了。现在开始使用拍照功能。新建一个JS文件，添加如下代码：

   ```jsx
   // 第1步：
   import {View, Button, Image} from 'react-native'
   import ImagePicker from 'react-native-image-picker'
   var photoOptions = {
     //点击后的弹出框选项
     title: '请选择',
     cancelButtonTitle: '取消', 
     takePhotoButtonTitle: '拍照',
     chooseFromLibraryButtonTitle: '选择相册',
     quality: 0.75,
     allowsEditing: true,//拍完可编辑
     noData: false,//false时，允许将照片转为base64格式的图片，转换时用户需要等待，降低用户体验
     storageOptions: {//拍的照片存永久还是临时目录
       skipBackup: true,  	
       path: 'images'
     }
   }
   
   // 第2步：创建一个组件Xixi
   class Xixi extends React.Component{
   constructor(props) {
   super(props);
       this.state = {
         imgURL: ''//拍了一张照后，该照的路径会挂载于此
       }
     }
       
   cameraAction = () => {//调用原生拍照弹出框的方法
   ImagePicker.showImagePicker(photoOptions, (response) => {
       //上面两个参数分别代表拍照参数信息、拍照完成后的回调函数
     console.log('response' + response);
     if (response.didCancel) {//用户取消拍照了吗
       return
     }
     this.setState({
       imgURL: response.uri//获取用户拍的照的路径
     });
   })
   }
   render(){
       return(
       	<View>
               {/*照片效果预览*/}
           	<Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200 }}></Image>
               {/*拍照按钮*/}
   			<Button title="拍照" onPress={this.cameraAction}></Button>
           </View>
       )
   }
   }
   
   ```

6. **一定要退出之前调试的App**，并重新运行`react-native run-android`进行打包部署；这次打包期间会下载一些jar的包，需要耐心等待！



### 修改应用图标和名称

1. `android/app/src/main/res/values/strings.xml`修改应用名称
2. `android\app\src\main\res\mipmap-xxxxxx`修改图标

小技巧：可以利用HBuilder来自动调整出我们需要大小的图标：创建移动app=>创建空项目=>打开manifest.json=>图标配置=>自动生成所有图标并替换=>浏览生成图标所在目录 



### 签名打包发布Release版本的apk安装包

+ 请参考以下两篇文章：

 - [ReactNative之Android打包APK方法（趟坑过程）](http://www.jianshu.com/p/1380d4c8b596)
 - [React Native发布APP之签名打包APK](http://blog.csdn.net/fengyuzhengfan/article/details/51958848)



### 如何发布一个apk

1. 先保证自己正确配置了所有的 RN 环境
2. 在 cmd 命令行中，运行这一句话`keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`

 + 其中： `my-release-key.keystore` 表示你一会儿要生成的那个 签名文件的 名称【很重要，要找个小本本记下来】
 + `-alias` 后面的东西，也很重要，需要找个小本本记下来，这个名称可以根据自己的需求改动`my-key-alias`
 + 当运行找个命令的时候，需要输入一系列的参数，找个口令的密码，【一定要找个小本本记下来】

3. 当生成了签名之后，这个签名，默认保存到了自己的用户目录下`C:\Users\liulongbin\my-release-key.keystore`
4. 将你的签名证书copy到 android/app目录下。
5. 编辑 `android` -> `gradle.properties`文件，在最后，添加如下代码：

```
MYAPP_RELEASE_STORE_FILE=your keystore filename #签名文件的名称my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=your keystore alias
MYAPP_RELEASE_STORE_PASSWORD=***** #之前签名时设定的密码
MYAPP_RELEASE_KEY_PASSWORD=*****
```

6. 编辑 android/app/build.gradle文件添加如下代码（加号后跟的代码）：

```
...
android {
    ...
    defaultConfig { ... }
    + signingConfigs {
    +    release {
    +        storeFile file(MYAPP_RELEASE_STORE_FILE)
    +        storePassword MYAPP_RELEASE_STORE_PASSWORD
    +        keyAlias MYAPP_RELEASE_KEY_ALIAS
    +        keyPassword MYAPP_RELEASE_KEY_PASSWORD
    +    }
    +}
    buildTypes {
        release {
            ...
    +        signingConfig signingConfigs.release
        }
    }
}
...
```

7. 进入项目根目录下的`android`文件夹，打开终端，然后输入`./gradlew assembleRelease`开始打包APK的Release版。若打包报错可以多试几次
8. 当发行完毕后，进入自己项目的`android\app\build\outputs\apk`目录中，找到`app-release.apk`，这就是我们发布完毕之后的完整安装包；就可以上传到各大应用商店供用户使用啦；

>注意：请记得妥善地保管好你的密钥库文件，不要上传到版本库或者其它的地方。

## 相关文章

+ [React Native 小米（红米）手机安装失败、白屏 Failed to establish session 解决方案](http://blog.csdn.net/u011240877/article/details/51983262)
+ [React Native Android 初次试用遇到的各种坑](http://lib.csdn.net/article/reactnative/48721)
+ [Redux 中文文档](http://www.redux.org.cn/)
+ [react-native 在使用require加载本地图片时报Unexcepted character](http://blog.csdn.net/u014038534/article/details/53943862)
+ [React Native for Android 发布独立的安装包](http://blog.csdn.net/u013531824/article/details/51003775)

