import React, { Component } from 'react'

function Imtrue() {
    return (
        <div>我是对的</div>
    )
}

function Imfalse() {
    return (
        <div>我是错的</div>
    )
}

class ComLife extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'hello world!',
            isTrue: true
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props, state, '33')
        console.log('getDerivedStateFromProps')
        return props
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState, '111111')
        console.log('getSnapshotBeforeUpdate')
        return true
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate(prevProps, prevState, newVal) {
        console.log(prevProps)
        console.log(prevState, newVal, '222222')
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        console.log('render', '调用渲染函数')
        return (
            <div>
                {this.props.test}:{this.state.msg}
                {
                    this.state.isTrue?<Imtrue />: <Imfalse />
                }
                <div onClick={this.cv}>点击</div>
            </div>
        )
    }
    cv = () => {
        this.setState({
            msg: '改变',
            isTrue: !this.state.isTrue
        })
    }
}

export default ComLife