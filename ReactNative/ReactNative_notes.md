

## 关于样式

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



## ReactNative提供的常用组件及其常用属性

- View：相当于网页中的 div 元素，主要负责布局。

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

- Touchablexxx **系列**组件，提供了响应 点击事件的能力：

  - TouchableHighlight组件：效果 `activeOpacity `可以设置被点击元素的透明度；`underlayColor ` 可以设置背景色；

  - TouchableOpacity组件：只能够改变透明度

  - TouchableNativeFeedback组件：
    
    安卓下原生的视觉反馈。**要展示的内容要用View包裹，并为View设置宽高**
    
    - `background={TouchableNativeFeedback.SelectableBackground()}` 只有灰色的涟漪效果，未超出 `View` 区域；
    - `background={TouchableNativeFeedback.SelectableBackgroundBorderless()}`只有灰色的涟漪效果，且涟漪会超出 `View` 区域；
    - `background={TouchableNativeFeedback.Ripple('red', false)}` 既可以配置 涟漪颜色，又可以配置涟漪是否可以超出 `View` 区域；

- ActivityIndicator：loading效果

- ScrollView：页面的滚动组件，不能被View包裹；被 ScrollView 包裹的元素，如果超出了屏幕的高度，会自动添加滚动条。在使用 此组件的时候，最好为 `ScrollView` 添加 `style={{ flex: 1 }}`样式，使其撑满父元素。应用场景：那些不是用 `for` 循环创建出来的 `列表` 都可以使用 `ScrollView` 包裹；

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





