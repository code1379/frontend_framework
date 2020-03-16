import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myInputVal: 'child input'
    }
  }
  render() {
    const { myInputVal } = this.state
    // eslint-disable-next-line
    const { inputVal, execFatherFunc, addItem, addItemUseParam } = this.props
    return <div>
      {/* <input type="text" value={inputVal} onChange={execFatherFunc} /> <button onClick={addItem}>添加</button> */}
      <input type="text" value={myInputVal} onChange={this.myInputValChange} /> <button onClick={this.myAddItem}>添加</button>
    </div>
  }
  myInputValChange = (event) => {
    const value = event.target.value
    this.setState(() => {
      return {
        myInputVal: value
      }
    })
  }

  myAddItem = () => {
    const { myInputVal } = this.state
    const { addItemUseParam } = this.props
    addItemUseParam(myInputVal)
    this.setState(() => {
      return {
        myInputVal: ''
      }
    })
  }
}

// props 类型检查
Input.propTypes = {
  addItem: PropTypes.func.isRequired
}


class List extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { list } = this.props
    return <div>
      <h3>this is list component</h3>
      <ul>
        {
          list.map(item => {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </div>
  }
}

// props 类型检查
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}


class TodoListDemo extends Component {
  constructor(props) {
    super(props)
    // 状态（数据）提升，数据放在父组件中，或者说让最高级别的组件 管理数据
    // 底层组件只负责渲染，提交等
    this.state = {
      list: [
        { id: 'id-1', title: '标题1' },
        { id: 'id-2', title: '标题2' },
        { id: 'id-3', title: '标题3' },
      ],
      inputVal: '123'
    }
    this.inputValueChange = this.inputValueChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.addItemUseParam = this.addItemUseParam.bind(this)
  }
  render() {
    const { list, inputVal } = this.state
    return (
      <div>
        <Input type="text" inputVal={inputVal} execFatherFunc={this.inputValueChange} addItem={this.addItem} addItemUseParam={this.addItemUseParam} />
        <List list={list}></List>
      </div>
    );
  }

  inputValueChange(event) {
    const val = event.target.value
    this.setState(() => {
      return {
        inputVal: val
      }
    })
  }

  addItem() {
    const { list, inputVal } = this.state
    const id = list.length + 1
    this.setState((oldState) => {
      return {
        list: [...oldState.list, { id: `id-${id}`, title: inputVal }],
        inputVal: ''
      }
    })
  }

  addItemUseParam(param) {
    const { list } = this.state
    const id = list.length + 1
    this.setState((oldState) => {
      return {
        list: [...oldState.list, { id: `id-${id}`, title: param }]
      }
    })
  }
}

export default TodoListDemo;

