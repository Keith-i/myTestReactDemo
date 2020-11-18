import React from 'react'
import ChildrenCom from './ChildrenCom'
import { Button } from 'antd'

class ParentCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: true,
      fatherData: '我是父数据',
      nowData: '123'
    }
  }

  setNewActive = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  setFatherData = (data) => {
    this.setState({
      fatherData: data
    })
  }

  setData = (val, e) => {
    console.log(val, e)
    this.setState({
      nowData: val
    })
  }

  normalEvent = (e) => {
    console.log(e)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <div>当前值是：{this.state.nowData}</div>
        <div>父组件：{this.state.fatherData}</div>
        <Button type="primary" onClick={this.setNewActive}>父改变子值</Button>
        <Button onClick={(e) => {this.setData('abc', e)}}>改变当前值变成abc</Button>
        <a href='http://www.baidu.com' onClick={this.normalEvent}>百度</a>
        <ChildrenCom {...this.state} setFatherData={this.setFatherData} />
      </div>
    )
  }
}

export default ParentCom