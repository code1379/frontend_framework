import React, { Component } from 'react';

class EventDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张三',
      list: [
        { id: 'id-1', title: '标题1' },
        { id: 'id-2', title: '标题2' },
        { id: 'id-3', title: '标题3' }
      ]
    }
    // 修改方法的 this 指向
    this.clickHandler1 = this.clickHandler1.bind(this)
  }
  render() {
    // eslint-disable-next-line
    const { name } = this.state
    // this - 使用 bind
    // return <div onClick={this.clickHandler1}>
    //   {name}
    // </div>

    // this - 使用静态方法
    // return <div onClick={this.clickHandler2}>
    //   clickHandler2 {name}
    // </div>

    // event
    // return <a href="https://imooc.com" onClick={this.clickHandler3}>click me </a>

    // 传递参数 - 用bind(this, a, b)
    return <ul>
      {this.state.list.map((item, index) => {
        // 静态方法 不知道怎么传递 event 对象
        // return <li key={item.id} onClick={() => this.clickHandler4(item.id, item.title)}>index: {index}  title: {item.title}</li>
        return <li key={item.id} onClick={this.clickHandler4.bind(this, item.id, item.title)}>index: {index}  title: {item.title}</li>
      })}
    </ul>
  }
  // --------------------------------------------------------------------------------------
  clickHandler1() {
    // 如果不 bind this 的话， 函数里面的this 是undefined
    // this 默认是 undefined
    console.log("this => ", this)
    this.setState({
      name: '李四'
    })
  }

  // 静态方法，this指向当前实例
  clickHandler2 = () => {
    this.setState({
      name: '李四'
    })
  }

  // 获取 event
  clickHandler3 = (event) => {
    event.preventDefault(); // 阻止默认行为
    event.stopPropagation(); // 阻止冒泡
    console.log("target", event.target) // 指向当前元素，即当前元素触发
    console.log("current target", event.currentTarget); // 指向当前元素， 假象！！！

    // 注意：event其实是 React 封装的，可以看__proto__.constructor 是 SyntheticEvent（组合事件）
    console.log('event', event) // 不是原生的 event 

    // 原生 event 如下，其__proto__.constructor 是 MouseEvent
    console.log('nativeEvent', event.nativeEvent);
    console.log('nativeEvent target', event.nativeEvent.target); // 指向当前元素，即当前元素触发
    console.log('nativeEvent current target', event.nativeEvent.currentTarget); // 指向 document
    // 1. event 是 SyntheticEvent（组合事件）模拟出 DOM 事件所有能力
    // 2. event.nativeEvent 是原生事件
    // 3. 所有的事件都被挂在 到 document 上，
    // 4. 和 DOM 事件不一样， 和 Vue 事件也不一样
  }

  // 函数传递参数（不需要传递event，在接收的时候在最后写上event即可）
  clickHandler4 = (id, title, event) => {
    console.log(id, title)
    console.log("event", event) // 最后追加一个参数，即可接收event
  }
}

export default EventDemo;