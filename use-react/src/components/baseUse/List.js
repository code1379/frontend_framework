import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        'A', 'B', 'C'
      ],
    }
  }

  listShow() {
    const { list } = this.state
    return <ul>
      {list.map(item => {
        return <li>{item}</li>
      })}
    </ul>
  }
  render() {
    return (
      <div>
        {this.listShow()}
      </div>
    );
  }
}

export default List;