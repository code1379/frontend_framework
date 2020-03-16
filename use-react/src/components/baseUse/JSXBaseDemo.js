import React from 'react'
import List from './List'

class JSXBaseDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'dell',
      imgUrl: 'http://i0.hdslb.com/bfs/archive/ed92db305ae43c7fc8a59b1789934caa2636b876.png',
      flag: true
    }
  }

  render() {
    // 获取变量 （插值  vue 两个大括号 {{xxx}} react 一个大括号 {} ）
    // const pElem = <p>{ this.state.name }</p>
    // return pElem

    // 表达式
    // eslint-disable-next-line
    const expressionElem = <p> {this.state.flag ? 'yes' : 'no'}</p>
    // return expressionElem

    // 子元素
    // eslint-disable-next-line
    const childElem = <div>
      <p>我的头像</p>
      <img src={this.state.imgUrl} alt="" />
    </div>
    // return childElem

    // class
    // eslint-disable-next-line
    const classElem = <p className="box">设置 css class</p>
    // return classElem

    // style
    // eslint-disable-next-line
    const styleData = { fontSize: '30px', color: 'red' }
    // const styleElem = <p style={styleData}>设置 style </p>
    // eslint-disable-next-line
    const styleElem = <p style={{ fontSize: '30px', color: 'blue' }}>设置 style </p>
    // return styleElem

    // 原生html
    const rawHtml = '<span>富文本内容<i>斜体</i><b>粗体</b></span>'
    const rawHtmlData = {
      __html: rawHtml // 注意：必须是这种格式
    }
    // eslint-disable-next-line
    const rawHtmlElem = <div>
      <p dangerouslySetInnerHTML={rawHtmlData}></p>
      <p>{rawHtml}</p>
    </div>
    // return rawHtmlElem

    // 加载组件
    const componentElem = <div>
      <div>JSX 中加载一个组件</div>
      <hr />
      <List />
    </div>
    return componentElem
  }
}


export default JSXBaseDemo