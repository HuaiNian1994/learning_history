### 组件的props收到的路由参数

- #### [this.props.match](https://reacttraining.com/react-router/web/api/match)



- #### [this.props.location](https://reacttraining.com/react-router/web/api/location)

- #### [this.props.history](https://reacttraining.com/react-router/web/api/history)

> history stack：特指浏览器的页面访问历史记录列表。
>
> Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack
>
> 这意味着连续访问同一个网址，只有最初的那次访问记录被放到了history stack中。也就是说history stack中相邻两条记录的URL一定不同。

- `length` - (number) The number of entries in the history stack

  浏览器历史记录的数目。每访问一次与上次不同的链接就增加一条。

- `action` - (string) The current action (`PUSH`, `REPLACE`, or `POP`)

- `location`- (object) The current location. May have the following properties:

  > 注意：this.props.history.location===this.props.location

  - `pathname` - (string) The path of the URL
  - `search` - (string) The URL query string
  - `hash` - (string) The URL hash fragment
  - `state` - (object) location-specific state that was provided to e.g. `push(path, state)` when this location was pushed onto the stack. Only available in browser and memory history.

- **`push(path, [state])` - (function) Pushes a new entry onto the history stack**

  **在访问记录中增加一条记录。文绉绉的，其实也就是访问指定的页面。路径输相对路径或绝对路径都可**

- `replace(path, [state])` - (function) Replaces the current entry on the history stack

- **`go(n)` - (function) Moves the pointer in the history stack by `n`entries**

- **`goBack()` - (function) Equivalent to `go(-1)`**

- **`goForward()` - (function) Equivalent to `go(1)`**

- `block(prompt)` - (function) Prevents navigation (see [the history docs](https://github.com/ReactTraining/history#blocking-transitions))





### [\<Redirect\>](https://reacttraining.com/react-router/web/api/Redirect)

Rendering a `<Redirect>` will navigate to a new location. The new location will **override** the current location in the history stack, like server-side redirects (HTTP 3xx) do.

哪里渲染了Redirect标签，哪里就立刻被重定向到\<Redirect\>指定的页面

常见用法：

1、直接渲染

~~~jsx
<Redirect to="somewhere/else"></Redirect>
~~~

2、根据路由规则指定哪个path要重定向，同时\<Route\>的占位表明了重定向的页面渲染在何处

~~~jsx
<Route exact path="oldPath" render={()=><Redirect to="newPath"></Redirect>}></Route>
~~~





### 企业级后台产品：也就是用于网站后台的更新维护的产品





### 用于取代XHR 的、基于Promise的JS原生 API：fetch

> 详情见https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

1. 作用：fetch 这个API，是专门用来发起Ajax请求的；

2. fetch 是由原生 JS 提供的 API ，专门用来取代 XHR 这个对象的；

   ```js
   fetch('请求的url地址').then(response => res.json()).then(data= > console.log(data))
   // 注意： 第一个.then 中获取到的不是最终的数据，而是一个中间的数据流对象；
   // 注意： 第一个 .then 中获取到的数据，是 一个 Response 类型的对象；
   // 第二个 .then 中，获取到的才是真正的 数据；
   ```

3. 发起 Get 请求：

   ```js
   // 默认 fetch('url') 的话，发起的是 Get 请求
     fetch('http://39.106.32.91:3000/api/getlunbo')
       .then(response => {
         // 这个 response 就是 服务器返回的可读数据流，内部存储的是二进制数据；
         // .json() 的作用，就是 读取 response 这个二进制数据流，并把 读取到的数据，转为 JSON 格式的 Promise对象
         return response.json()
       })
       .then(data => {
         // 这里，第二个.then 中，拿到的 data，就是最终的数据
         console.log(data)
       })
   ```

   

4. 发起 Post 请求：

   ```js
   // 这是 查询参数   name=zs&age=20
     var sendData = new URLSearchParams()
     sendData.append('name', 'ls')
     sendData.append('age', 30)
   
     fetch('http://39.106.32.91:3000/api/post', {
       method: 'POST',
       body: sendData // 要发送给服务器的数据
     })
       .then(response => response.json())
       .then(data => console.log(data))
   ```

5. 注意： fetch 无法 发起 JSONP 请求



### fetch-jsonp的使用

1. `fetch-jsonp`最基本的用法：

   先安装：`npm i fetch-jsonp`

   再导入：import fetchJSONP from "fetch-jsonp"

   挂载到全局(可选)：React.Component.proptotype.$http=fetchJSONP

   ```js
   fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
     .then(function (response) {
       // response.json()   当我们为 response 对象调用了它的 .json() 方法以后，返回的是新的 promise 实例对象
       return response.json()
     })
     .then(function (result) {
       console.log(result)
     })
   ```

2. 注意事项：

   1. 在调用 fetchJsonp 的时候，小括号中写的就是 你请求的 API 地址
   2. 当调用 fetchJsonp  以后，得到的是一个 Promise  实例对象，需要为 这个 Promise 实例对象，通过`.then`指定成功的回调函数，在第一个 `.then()`中无法拿到最终的数据，拿到的是一个 `Response` 类型的对象；
   3. 在 第一个 `.then`中，需要`return response.json()`从而返回一个新的Promise 实例；
   4. 为 第一个 `.then()`中返回的promise实例，再次通过.then指定成功回调，拿到的才是最终的数据；

   > 总结: 第一个.then拿到的是中间数据;  第二个.then中拿到的才是最终的数据;





### height:100% =>flex:1

占满剩余区域