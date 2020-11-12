import React from 'react'
import './style/all.css'

function Txt(props) {
  console.log(props, '+++')
  const sty = {
    color: 'red',
    fontSize: '18px'
  }
  return (
    <div style={sty}>测试：A</div>
  )
}

class MyCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      sex: '男'
    }
  }
  
  setSex = () => {
    console.log(this.state.sex)
    const newSex = this.state.sex === '男' ? '女' : '男'
    this.setState({
      sex: newSex
    })
    console.log(this.state.sex, 'sex')
  }

  render() {
    const tx = {...this.props}
    const ac = JSON.stringify(tx)
    return (
      <div>
        <div>名字叫：{this.state.name}</div>
        <div>性别：{this.state.sex}</div>
        <div>{ac}</div>
        <Txt {...this.props} />
        <button className='normalcolor' onClick={this.setSex}>修改性别</button>
      </div>
    )
  }
}

export default MyCom