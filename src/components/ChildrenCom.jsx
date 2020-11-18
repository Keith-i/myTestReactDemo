import React from 'react'
import { Button } from 'antd'


class ChildrenCom extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }
  k = () => {
    if (this.props.isActive) {
      return <span>对的</span>
    } else {
      return <span>错的</span>
    }
  }
  sendData = () => {
    this.props.setFatherData('我是子传父的数据')
  }
  render() {
    return (
      <div>
        <div>
          <div>子组件：{this.k()}</div>
          <Button type='primary' onClick={this.sendData}>子改变父的值</Button>
        </div>
      </div>
    )
  }
}

export default ChildrenCom