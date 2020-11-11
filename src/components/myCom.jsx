import React from 'react'

class MyCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }
  render() {
    return (
      <div>名字叫：{this.state.name}</div>
    )
  }
}

export default MyCom