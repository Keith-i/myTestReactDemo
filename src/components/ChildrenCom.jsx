import React from 'react'

class ChildrenCom extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }
  k = () => {
    console.log(this)
    if (this.props.isActive) {
      return <div>对的</div>
    } else {
      return <div>错的</div>
    }
  }
  render() {
    return (
      <div>
        <div>
          <div>子组件</div>
          {this.k()}
        </div>
      </div>
    )
  }
}

export default ChildrenCom