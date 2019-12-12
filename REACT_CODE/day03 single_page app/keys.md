### 组件的props中收到的路由参数

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

- `push(path, [state])` - (function) Pushes a new entry onto the history stack

  在访问记录中增加一条记录。文绉绉的，其实也就是访问指定的页面。路径输相对路径或绝对路径都可

- `replace(path, [state])` - (function) Replaces the current entry on the history stack

- `go(n)` - (function) Moves the pointer in the history stack by `n`entries

- `goBack()` - (function) Equivalent to `go(-1)`

- `goForward()` - (function) Equivalent to `go(1)`

- `block(prompt)` - (function) Prevents navigation (see [the history docs](https://github.com/ReactTraining/history#blocking-transitions))

