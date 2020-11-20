import React, { Component } from 'react'

class ComLife extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'hello world!'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props, state, '33')
        return props
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState, '111111')
        return 'nnn'
    }
    componentDidUpdate(prevProps, prevState, newVal) {
        console.log(prevProps)
        console.log(prevState, newVal, '222222')
    }
    render() {
        return (
            <div>
                {this.props.test}:{this.state.msg}
                <div onClick={this.cv}>点击</div>
            </div>
        )
    }
    cv = () => {
        this.setState({
            msg: '改变'
        })
    }
}

export default ComLife