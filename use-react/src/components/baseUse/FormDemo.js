import React, { Component } from 'react';

class FormDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'thiem',
      info: '个人信息',
      city: '',
      flag: true,
      gender: 'male'
    }
  }
  render() {
    // 受控组件 表单里面的值受 state 控制
    // eslint-disable-next-line
    const { name, info, city, flag, gender } = this.state
    // return <div>
    //   <p>{name}</p>
    //   <label htmlFor="name">姓名：</label> {/*用 htmlFor 代替 for */}
    //   <input type="text" id="name" value={name} onChange={this.onInputChange} />
    // </div>

    // textarea - 使用 value
    // return <div>
    //   <textarea value={info} onChange={this.onTextareaChange} style={{ resize: 'none' }}></textarea>
    //   <p>{info}</p>
    // </div>

    // select - 使用 value
    // return <div>
    //   <select value={city} onChange={this.onSelectChange}>
    //     <option value="" disabled>请选择</option>
    //     <option value="hangzhou" >hangzhou</option>
    //     <option value="beijing">beijing</option>
    //     <option value="shanghai">shanghai</option>
    //   </select>
    // </div>

    // checkbox - checked
    // return <div>
    //   <input type="checkbox" checked={flag} onChange={this.onCheckboxChange} />
    //   <p>{flag.toString()}</p>
    // </div>

    // radio - checked
    return <div>
      <label htmlFor="male">male</label>
      <input id="male" type="radio" checked={gender === 'male'} value="male" onChange={this.onRadioChange} />
      <label htmlFor="female">female</label>
      <input id="female" type="radio" checked={gender === 'female'} value="female" onChange={this.onRadioChange} />
    </div>
  }
  onInputChange = (event) => {
    console.log('onInputChange')
    console.log(event.target.value)
    const inputName = event.target.value
    this.setState(() => {
      return {
        name: inputName
      }
    })
  }

  onTextareaChange = (event) => {
    console.log('onTextareaChange')
    console.log(event.target.value)
    const textareaInfo = event.target.value
    this.setState(() => {
      return {
        info: textareaInfo
      }
    })
  }

  onSelectChange = (event) => {
    console.log('onSelectChange')
    console.log(event.target.value)
    const selectCity = event.target.value
    this.setState(() => {
      return {
        city: selectCity
      }
    })
  }

  onCheckboxChange = (event) => {
    console.log('onCheckboxChange')
    console.log(event.target.value) // => 'on' 所以只能获取原先的 flag 的值
    this.setState(() => {
      return {
        flag: !this.state.flag
      }
    })
  }

  onRadioChange = (event) => {
    console.log('onRadioChange')
    console.log(event.target.value)
    const radioSelect = event.target.value
    this.setState(() => {
      return { gender: radioSelect }
    })
  }
}

export default FormDemo;