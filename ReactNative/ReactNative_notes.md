

## 1、关于样式

1. 创建样式表：

   ~~~jsx
   const MyStyle=Stylesheet.create({
       class1:{
           textAlign:"center"
       },
       class2:{
           color:"red",
           borderWidth:1
       }
   })
   ~~~

   

2. `Text`组件支持 `textAlign`，但是 `View`不支持；

3. 在 网页中，一个 div 盒子，默认 没有启用 `flexbox` 布局，所以需要手动 设置 `display: flex;`；但是， 在 RN 中，默认 每个 `View` 组件，都是启用了 `flexbox` 布局的；

4. 注意：在 网页中，默认 主轴 是 横向的（从左到右），用 `justifyContent` 来进行控制； 默认网页中，侧轴 是 纵向的（从上到下）， 用 `alignItems` 来进行控制；

   但是在 RN 中，默认主轴是纵向的，因此，``justifyContent` 控制的是纵向上的对齐方式； 默认 侧轴 是横向的，因此，`alignItems `控制 水平方向上的对其方式。



## 2、ReactNative提供的常用组件及其常用属性

- View：相当于网页中的 div 元素，主要负责布局。<span style="color:red;font-weight:750">默认没有高度。没有onPress属性</span>

- Text：相当于网页中的 span 元素，主要用来展示文本；

- TextInput：文本框组件

  1. 默认在安卓平台有默认底边框，需要使用`underlineColorAndroid="transparent"` 来隐藏底边框；
  2. 在 RN 中，为元素设置边框，不能直接使用`border`，要使用 各自 拆开的属性`borderWidth`、`borderColor`
  3. `keyBoardType` 是 `enum` 枚举类型；

- Image：用来在 RN 中显示图片；

  - 显示本地图片：

    ```jsx
    {/* 引用本地的图片资源 */}
    <Image source={require('./images/1.jpg')}/>
    ```

  - 显示网络上的图片(需要手机端自行联网加载)

    ```jsx
    {/* 引用 网络上的 图片资源 */}
    {/* 如果引用网络上的图片，除了指定 source 之外，还要通过 样式指定 宽 和 高 */}
    <Image source={{ uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3878847766,3988120331&fm=200&gp=0.jpg' }} style={{ width: 150, height: 150 }} />
    ```

- Button：按钮组件

  + onPress事件

- Touchablexxx **系列**组件，提供了响应 点击事件的能力。支持onPress事件

  - TouchableHighlight组件：效果 `activeOpacity `可以设置被点击元素的透明度；`underlayColor ` 可以设置背景色；

  - TouchableOpacity组件：只能够改变透明度

  - TouchableNativeFeedback组件：

    安卓下原生的视觉反馈。**要展示的内容要用View包裹，并为View设置宽高**

    - `background={TouchableNativeFeedback.SelectableBackground()}` 只有灰色的涟漪效果，未超出 `View` 区域；
    - `background={TouchableNativeFeedback.SelectableBackgroundBorderless()}`只有灰色的涟漪效果，且涟漪会超出 `View` 区域；
    - `background={TouchableNativeFeedback.Ripple('red', false)}` 既可以配置 涟漪颜色，又可以配置涟漪是否可以超出 `View` 区域；

- ActivityIndicator：loading效果

- ScrollView：页面的滚动组件。被 ScrollView 包裹的元素，如果超出了屏幕的高度，会自动添加滚动条。在使用 此组件的时候，最好为 `ScrollView` 添加 `style={{ flex: 1 }}`样式，使其撑满父元素。应用场景：那些不是用 `for` 循环创建出来的 `列表` 都可以使用 `ScrollView` 包裹；

  - contentContainerStyle属性

    为其中包裹的所有元素居中：contentContainerStyle={{alignItems:"center"}}

- FlatList ：使用 `FlatList ` 适合做列表渲染；

  - 最精简的用法：包含data、renderItem、keyExtractor三个属性

    ```jsx
    <FlatList
            data={this.state.mylist1} // 要渲染的数据
            // renderItem 是来渲染每一项的，指定了每一项 要被渲染成 什么样子
            renderItem={({ item, index }) => <View>
              <Text style={{ lineHeight: 150 }}>编号：{item.id} --- 姓名：{item.name} --- 年龄：{item.age}</Text>
            </View>}
            keyExtractor={(item, index) => item.id + ''} // 自定义key，匿名函数的返回值必须为一个字符串
          />
    ```

  + 其他属性：

    + onEndReachedThreshold={指定比例} 

      指定当前列表滑到什么位置时触发`onEndReached`，取值在(0,+∞)上。具体触发条件为：

     <div style="text-align:center"> 未显示的已加载内容高度  /  列表可见高度 <= 指定比例 </div>
    + onEndReached={() => 函数名} 
    
     **只会被触发一次**。当`onEndReachedThreshold`的条件满足时被触发
    
    + ListFooterComponent
    
    指定列表尾部的内容。其值通常为一个组件
    
    
    
    



## 3、关于路由

### 3.1 安装路由 

> 注意：大家目前电脑上安装的`npm`都是`5.x`的版本，在RN项目中，如果使用`5.x版本的npm`去装包，会出现丢包的情况；因此，千万不要使用`cnpm`和`npm`来装包；
>
> 推荐大家使用 `yarn add 包名 ` 来装RN中需要的包；

1. 运行`yarn add react-native-router-flux`安装路由的包；
2. 注意：`react-native-router-flux`只提供了编程式导航，并没有提供`标签式`导航；也就是，必须使用路由提供的 JS API 实现路由的导航；

   

### 3. 2 基本路由组件

`react-native-router-flux`包中，提供了三个最基本的组件：Router、Stack、

#### 	3.2.1 Router组件及其常用属性

​	`Router`表示 路由的根容器。在一个RN项目中，`Router`组件应该只出现一次，就好比React网页项目开发中的`HashRouter`。



#### 	3.2.2 Stack组件及其常用属性

​	`Stack ` 表示 路由的分组，路由规则被包裹于 `<Stack></Stack> `中即可使用

​	`Stack `包含多条并列的路由规则时，渲染第一条路由规则。



#### 3.2.3 Tabs组件及其常用属性

路由规则被包裹于 `<Tabs></Tabs> `中即可使用。其提供了一个导航栏和路由页面显示界面，当Tabs包含多条路由规则时，所有路由链接都会显示于导航栏中用于切换，且默认初始时就渲染完所有的路由规则对应的组件。下面是其常用属性：

+ `tabBarPosition`：设定导航栏的位置，值取top或者bottom
+ `lazy` : 激活后才加载该路由规则对应的组件。取值为布尔值

```jsx
// 1. 需要把 tabbar 相关的 Scene ，统一嵌套到 同一个 tabs 组件中：
<Router>
      <Tabs key="root" tabBarStyle={{ backgroundColor: 'pink' }} tabBarPosition="bottom">
        {/* 注意： 在 路由规则中，第一个路由规则，就是项目的首页 */}
        <Scene 
            key="homeview" 
            component={Home} 
            hideNavBar={true} 
            title="首页" 
            tabBarLabel="自定义Label" 
            icon={() => <Image source={require('./images/menu1.png')} style={{ width: 25, height: 25 }} />}></Scene>
        <Scene key="movieview" component={Movie} title="电影列表"></Scene>
        <Scene key="aboutview" component={About} title="关于我们"></Scene>
      </Tabs>
    </Router>
```

+ 通过 为 `Scene`提供`tabBarLabel`设置tab栏的文字；通过`icon`设置tab栏的图标；

1. 如果只想有一个在顶部显示的tab栏，并且，不期望有Icon图标，默认只显示文字，此时，大家需要显示的为tabs组件，设置`tabBarPosition="top"`属性：

   ```jsx
   <Tabs key="root" tabBarStyle={{ backgroundColor: '#50B2FF' }} tabBarPosition="top">
   </Tabs>
   ```

   

#### 	3.2.4 Scene组件及其常用属性

​	在RN项目中，每个`Scene`就表示一条路由规则。<span style="color:red;font-weight:750">在Scene中写入自定义的属性，会将这些属性作为props传递给该路由指向的组件。</span>下面是其常用属性：

- `key（必选项）`：是当前这个路由规则的唯一标识符，每个`Scene`路由规则，必须提供一个`key`属性；
- `component（必选项）`：表示当前路由规则匹配成功后，展示哪个组件页面；

+ `title`：在访问目标组件时于导航条展示的名称；
+ `hideNavBar`：隐藏路由自带的导航条，值为布尔值
+ `navigationbarstyle`：设定路由自带的导航条的样式，但不能设定文字样式。路由导航条不支持style属性。
+ `titlestyle`：设定路由导航条的文字样式。
+ `backbuttonTinkColor`：设定路由导航条的返回按钮颜色。值为字符串

**当`Scene`包裹于Tabs组件时，还专门拥有这两个属性：**

+ `icon`：值为一个Image组件，用于设定导航图片
+ `tabBarLable`：重命名导航条

 









### 3.3 路由的使用

##### 3.3.1、使用Actions以实现跳转：

~~~js
// Actions 提供了编程式跳转的能力
   import { Actions } from 'react-native-router-flux';
   
   // 从 A 页面 -> B 页面
   Actions.路由的key()
~~~

​	`react-native-router-flux`会检查本项目中所有页面文件注册的所有路由，在A页面文件中注册的路由，在B中直接使用`Actions.路由的key()`是可行的。

**小技巧：为了免于每个组件页面都要导入Actions，我们直接在根组件App的页面上将这个函数挂载到`React.Component.prototype`上：**

~~~jsx
import { Actions } from 'react-native-router-flux';
React.Component.prototype.Actions=Actions;
~~~

之后，我们在其他组件页面中直接用`this.Actions`调用该方法



##### 3.3.2、后退（访问最近一次的路由历史记录）：

~~~js
 Actions.pop()
~~~



##### 3.3.3、路由跳转并传参：

```js
// 跳转并传递 一个参数对象，注意， 参数对象中，不要使用 name, 因为 name 有特殊含义；
Actions.movieview({ username: 'zs', age: 20 })

// 在页面中，直接访问 this.props 就能够拿到路由传递的参数：
console.warn(this.props.username)
console.warn(this.props.age)
```



## 4、导航栏

因为`react-native-router-flux`自带的Tab不好用，故使用`react-native-tab-navigator`的Tab： 

（详情见NPM上的`react-native-tab-navigator`）

1. 运行`yarn add react-native-tab-navigator`安装包

2. 导入 tab 栏组件

   ```js
   import TabNavigator from 'react-native-tab-navigator'
   ```

3. 导入 tabbar 的组件页面

   ```js
   import Home from './components/tabbar/home'
   import Search from './components/tabbar/search'
   import Cart from './components/tabbar/cart'
   import Me from './components/tabbar/me'
   ```

4. 使用 TabNavigator 组件创建对应的 Tab 栏结构：

   ```jsx
   <TabNavigator>
   
         <TabNavigator.Item
           title="首页"
           selected={this.state.selectedname === 'home'}
           onPress={() => this.setState({ selectedname: 'home' })}
           // renderIcon={() => <Icon name="home" size={22} />}
           // renderSelectedIcon={() => <Icon name="home" size={22} color="#000" />}
         >
           <Home></Home>
         </TabNavigator.Item>
   
         <TabNavigator.Item
           title="搜索"
           selected={this.state.selectedname === 'search'}
           onPress={() => this.setState({ selectedname: 'search' })}
           // renderIcon={() => <Icon name="search" size={22} />}
           // renderSelectedIcon={() => <Icon name="search" size={22} color="#000" />}
         >
           <Search></Search>
         </TabNavigator.Item>
   
         <TabNavigator.Item
           title="购物车"
           badgeText={0 + ''}
           selected={this.state.selectedname === 'cart'}
           onPress={() => this.setState({ selectedname: 'cart' })}
           // renderIcon={() => <Icon name="shopping-cart" size={22} />}
           // renderSelectedIcon={() => <Icon name="shopping-cart" size={22} color="#000" />}
         >
           <Cart></Cart>
         </TabNavigator.Item>
   
         <TabNavigator.Item
           title="会员"
           selected={this.state.selectedname === 'me'}
           onPress={() => this.setState({ selectedname: 'me' })}
           selectedTitleStyle={{ color: 'red' }}
           // renderIcon={() => <Icon name="user" size={22} />}
           // renderSelectedIcon={() => <Icon name="user" size={22} color="#000" />}
         >
           <Me></Me>
         </TabNavigator.Item>
   
       </TabNavigator>
   ```

5. 需要在 state 上定义 `selectedname`来保存当前被选中的tab栏：

   ```js
   constructor() {
       super()
       this.state = {
         selectedname: 'home'
       }
     }
   ```










##  [5、在Tab栏使用字体类图标](https://github.com/oblador/react-native-vector-icons)

> 注意：使用图标，需要使用 `Android SDK Manager` 安装 `Android SDK Build-tools 26.0.1` 并接收其 license;

1. 运行`yarn add react-native-vector-icons`安装包

2. 运行`react-native link`,来快速 进行相关的配置（修改andrid原生代码）。但由于修改不全面，接下来要手动继续修改。

3. 打开`android/app/build.gradle`，定位到第`81行`，添加如下代码：

   ```java
   // 自定义项目用用到的 字体文件
   project.ext.vectoricons = [
       iconFontNames: ['Ionicons.ttf'] // Name of the font files you want to copy
   ]
   
   // 应用导入的字体文件
   apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
   ```

4. 当做完以上3步之后，我们已经手动地修改了安卓的原生代码，因此不要直接刷新代码，这样会报错；我们需要重新运行`react-native run-android`命令，进行打包编译，并重新部署到手机上，进行调试开发；

5. 字体图标已经配置好了，如何用起来呢：

   ```jsx
   // 导入 字体图标
   import Icon from 'react-native-vector-icons/Ionicons'
   
   <TabNavigator.Item
           title="首页"
           selected={this.state.selectedname === 'home'}
           onPress={() => this.setState({ selectedname: 'home' })}
      +    renderIcon={() => <Icon name="home" size={22} color="#900" />}
      		badgeText="1"
         >
           <Home></Home>
   </TabNavigator.Item>
```
   
   

