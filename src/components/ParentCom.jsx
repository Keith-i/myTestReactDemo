import React from 'react'
import ChildrenCom from './ChildrenCom'
import { Button } from 'antd'

class ParentCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: true
    }
  }

  setNewActive = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
      <div>
        <div>父组件</div>
        <ChildrenCom {...this.state} />
        <Button type="primary" onClick={this.setNewActive}>父改变值</Button>
      </div>
    )
  }
}

export default ParentCom