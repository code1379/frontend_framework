import React, { Component } from 'react';

// 函数组件 则没有state
class StateDemo extends Component {
  constructor(props) {
    super(props)
    // 第一 state 要在构造函数中定义
    this.state = {
      count: 0
    }
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.increment}>累加</button>
      </div>
    );
  }

  increment = () => {
    // 第二 ，不要直接修改 state，使用不可值
    // this.state.count++  // 错误
    // this.setState({
    //   count: this.state.count + 1
    // })

    // 操作数组，对象的常用形式 => 在最下面 不能直接对其进行操作（不可变值原则）

    // ========================================================================================

    // 第三，setState 可能是异步更新（也有可能是同步更新）
    // this.setState({
    //   count: this.state.count + 1
    // }, () => { // 回调函数 类似 vue $nextTick
    //   console.log("count by callback", this.state.count)
    // })
    // console.log("count", this.state.count) // 异步的，拿不到最新值

    // setTimeout 中 setState 是同步的
    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log('count in setTimeout', this.state.count)
    // }, 0)

    // 自己定义的 DOM 事件， setState 是同步的，在 componentDidMount 中 => 下面的 componentDidMount

    // 第四，state 异步更新的话，更新前会被合并

    // 传入对象，会被合并，执行结果只一次 +1
    // 因为setState 本身是一个 异步，执行完第一个会等后面的执行完，里面所有的 this.state.count 都是 0
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // // 类似于 object.assign({a: 1}, {a: 1})
    // console.log("setstate with obj", this.state.count)


    // 传入函数，不会被合并，执行结果是 +3
    this.setState((preState, props) => {
      return {
        count: preState.count + 1
      }
    })
    this.setState((preState, props) => {
      return {
        count: preState.count + 1
      }
    })
    this.setState((preState, props) => {
      return {
        count: preState.count + 1
      }
    })

  }
  // 
  bodyClickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log("count in body event", this.state.count)
  }
  componentDidMount() {
    // 自己定义的 DOM 事件， setState 是同步的
    // document.body.addEventListener('click', this.bodyClickHandler)

    // 为什么不用下面的写法，是因为我们在销毁的时候需要解绑
    // document.body.addEventListener('click', () => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log("count in body event", this.state.count)
    // })
  }
  componentWillUnmount() {
    // 及时销毁 自定义 DOM 事件
    // document.body.removeEventListener('click', this.bodyClickHandler)
    // clearTimeout
  }
}

export default StateDemo;

// ================================ 我是分割线 ================================
/* 不可变值 => 不能提前对state里面的值进行修改，而是什么时候改的时候，什么时候去设置，
              而且设置的时候，不能影响到 state 里面的值
  不可变值 =>函数式编程，纯函数
*/
// 不可变值 - 数组 
// const list5copy = this.state.list5.slice() // 在生成的副本中进行操作
// list5copy.splice(2, 0, 'a') // 中间插入/删除

// this.state.list1.push(100) // 这样会有问题, shouldComponentUpdate
// this.setState({
//   list1: this.state.list1.concat(100), // 追加
//   list2: [...this.state.list2, 100], // 追加
//   list3: this.state.list3.slice(0, 3), // 截取
//   list4: this.state.list4.filter(item => item > 100), //筛选
//   list5: list5Copy // 其他操作
// })
// 注意：不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值
// const list = [1,2,3,4]
// const res = list.concat(100) // => list: [1,2,3,4] res: [1,2,3,4,100]
// const res1 = list.push(100) // => list:[1,2,3,4,100] res1: [1,2,3,4,100]



// 不可变值 - 对象
// this.setState({
//   obj1: Object.assign({}, this.state.obj1, { a: 100 }),
//   obj2: { ...this.state.obj2, a: 100 }
// })
// 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值
