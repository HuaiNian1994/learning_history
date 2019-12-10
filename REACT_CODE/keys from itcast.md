### 展开语法

语法 ...variable

含义：将这个变量的键值对/元素 一一展开

应用：

~~~jsx
//map 对一个元素为对象的数组的内容进行包装
const htmlForm=commentArr.map(item=><Mycomponent {...item} key="item.id"></Mycomponent>)
//数组的克隆
const newArr=[...oldArr]
//对象的克隆
const newObj=[...oldObj]
~~~



###  **剩余参数**

语法：

```js
function(a, b, ...theArgs) {
  // ...
}
```

含义：在函数的形参接收区，将一个不定数量的参数表示为一个数组。 







### 一个类的方法挂在于该类的原型对象上

~~~js
class A{
    constructor(){

    }
    xixi(){
        return;
    }
}
const B=new A;
console.log(B.xixi==A.prototype.xixi)//true
~~~



### setState

+ 不会覆盖那些未设置的属性

+ 它是异步的。若想在设置完成后立刻取到state的值，请调用callback来取：

  ~~~js
  setState({something},callback)
  ~~~

  



### VSCode提供的代码片段定义：

crg+Tab，使得任意的代码片段的折叠成为可能。这些片段可以是多行注释



### 对于一个组件，其e.target==this.refs["标签ref属性的属性值"]

他们都指向了当前元素的原生DOM

~~~js
const C = React.createElement;
class Com1 extends React.Component{
    constructor(props){
        super(props)
    }
    onClickHandler(e){
        console.log(e.target==this.refs.hiahia)//true!!!!!!!!!!!
        console.log(this.refs["hiahia"]==document.getElementById("xixi"));//true
    }
    render(){
        return C('button',{ onClick:(e)=>this.onClickHandler(e) ,ref:"hiahia"}, '哥哥点我');
    }
}
ReactDOM.render(C(Com1),document.getElementById("root1"))
~~~



## 8. 组件的生命周期

- 生命周期的概念：每个组件的实例，从 创建、到运行、直到销毁，在这个过程中，会出发一些列 事件，这些事件就叫做组件的生命周期函数；

- React组件生命周期分为三部分：

  - **组件创建阶段**：特点：一辈子只执行一次

  > - constructor()
  > - componentWillMount()
  > - render()
> - componentDidMount()

- **组件运行阶段**：按需，根据 props 属性 或 state 状态的改变，有选择性的 执行 0 到多次
  
  > - componentWillReceiveProps(nextProps)
  > - shouldComponentUpdate(nextProps, nextState)
  > - componentWillUpdate(nextProps, nextState)
  > - render()
> - componentDidUpdate(prevProps, prevState)

- **组件销毁阶段**：一辈子只执行一次
  
  > componentWillUnmount()

[vue中的生命周期图](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)
[React Native 中组件的生命周期!](http://www.race604.com/react-native-component-lifecycle/)

![React中组件的生命周期](/LifeCycle.png)



### 类型校验

限定props所接收的属性的值的类型，传入与限定不一致时报错。

详情见：https://reactjs.org/docs/typechecking-with-proptypes.html

React v15.5.后，其依赖于一个单独的包：`npm i prop-types`

~~~jsx
import Types from 'prop-types'
class A extends React.Component{
    static propTypes={
        xixi:PropTypes.array,//将this.props.xixi的值限定为数组
        haha:PropTypes.func.isRequired//将this.props.haha的值限定为函数,且必须有该值
        //....
    }
	constructor(props){
        super(props)
        //...
    }
	render(){
        //...
    }
}
~~~



### 利用shouldComponentUpdate函数实现按需求更新

手动地返回true和false，从而控制一个组件是否更新。

注意：shouldComponentUpdate()中的this.props、this.state之值是上一次组件更新时的值，要获取最新值应使用其形参获取：

~~~js
shouldComponentUpdate(nextProps, nextState)
~~~





### 使用Axios发起Ajax请求

`npm i axios`

注意： 

+ 在Ajax发起 Post 请求的时候，如果没有 指定 Content-Type， 则默认 为  text/plain; charset=utf-8
+  一般情况下，服务认为 客户端 Ajax 发送的数据类型是 application/x-www-form-urlencoded
+ form 表单元素，默认有 属性  enctype="application/x-www-form-urlencoded"

~~~js
import axios from 'axios'

// class 关键字 底层 也是由 普通 function 构造函数来实现的，因此 class 只是个语法糖
// 在每个 用 class 关键字 创建的 组件，都可以直接调用`this.$http`来发起Ajax请求
React.Component.prototype.$http = axios

// 全局配置请求的URL根路径
axios.defaults.baseURL = 'http://39.106.32.91:3000';//这只是举例



~~~





#### 使用ES7 的await 和 async 优化promise的调用

正如static是变量的修饰符，async是function的修饰符，await是promise对象的修饰符。

此外，await只能用于被async修饰的函数中，被await修饰的promise对象会返回其内部操作的最终结果

~~~js
//ES6实现向测试地址发起get请求
//这段代码放于一个类中
getInfo=()=>{
    this.$http("http://39.106.32.91:3000/api/getdata").then(result=>{
        console.log(result.data)
    })
}
~~~

```js
//ES7实现向测试地址发起get请求
//这段代码放于一个类中
getInfo=async(){
    //左边使用了ES6的解构赋值
    const {data}=await this.$http("http://39.106.32.91:3000/api/getdata")
    console.log(data)   
}
```



#### Axios发起post请求

法一：

~~~js
//这段代码放于一个类中
postInfo=()=>{
// 如果要发起Post请求，同时给服务器提交参数，则提交给服务器的数据不能写成对象，需要自己拼接成查询字符串
    this.$http.post('http://39.106.32.91:3000/api/post','name=zs&age=22').then(res => 		{
      	console.log(res)
      }) 
}
~~~

法二：，全局配置一下 transformRequest ，从而在post请求时发送对象

~~~js
//下列代码放在React.Component.prototype.$http = axios之前
//发起 Post 请求之前，会先调用transformRequest 对要发送给服务器的数据做一层包装转换
//至于怎么包装怎么转换，看我们自己
axios.defaults.transformRequest = [function (data, headers) { 
  // 在这里，我们要想办法，把 data 从 对象  { name: zs, age: 22 } ，转成 查询字符串   name=zs&age=22

  const arr = []
  for (let key in data) {
    arr.push(key + '=' + data[key])
  }
  return arr.join('&')
}]
~~~

```JS
//这段代码放于一个类中
postInfo=()=>{
    //直接发送对象
    this.$http.post('http://39.106.32.91:3000/api/post',{
        name:zs,
        age:22
    }).then(res =>{
      	console.log(res)
      }) 
}
```





### 在React.Component.prototype上挂载全局组件都可用的方法

~~~js
React.Component.prototype.xixi=function(){
    //函数体
}
~~~





### ES6模板字符串

我们用普通引号 `''`  和 `""`标识一个字符串：

用反引号``标识一个模板字符串。该字符串可接收变量。形式为${变量名}

~~~js
//例子：给react组件全局挂载一个日期转换函数
React.Component.prototype.dateFormat=function (){
    const now=new Date()
    const y=now.getFullYear()
    const m=(now.getMonth()+1).toString().padStart(2,"0")
    const d=now.getDate().toString().padStart(2,"0")
    const hh=now.getHours().toString().padStart(2,"0")
    const mm=now.getMinutes().toString().padStart(2,"0")
    const ss=now.getSeconds().toString().padStart(2,"0")
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
~~~

