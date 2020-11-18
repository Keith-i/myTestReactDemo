import React from 'react'

function UserGreet(Props) {
    return (<div>欢迎登陆</div>)
}

function UserLogin(Props) {
    return (<div>请先登陆</div>)
}

let arr = ['小明', '小黑', '小白']

class Eitem extends React.Component {
    constructor(props) {
        super(props)
    }
    clickEvent = (index, title, event) => {
        console.log(event)
        alert(`${index}-${title}`)
    }
    render() {
        return (
            <div onClick={(e) => this.clickEvent(this.props.cindex, this.props.data.title, e)}>{this.props.data.title}</div>
        )
    }
}

class Judge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            list: [
                {
                    title: '第一节 React事件',
                    content: '事件内容'
                },
                {
                    title: '第二节 React数据传递',
                    content: '数据传递内容'
                },
                {
                    title: '第三节 条件渲染',
                    content: '条件渲染内容'
                }
            ]
        }
    }
    render() {
        let styleA = {
            color: 'skyblue'
        }
        let styleB = {
            color: 'pink'
        }
        let element = null
        if (this.state.isLogin) {
            element = <UserGreet />
        } else {
            element = <UserLogin />
        }
        let listArr = []
        for(let i=0; i<this.state.list.length; i++) {
            let item = (
                <li key={i} style={{color:'#fff'}}>
                    <p>{this.state.list[i].title}</p>
                    <p>{this.state.list[i].content}</p>
                </li>
            )
            listArr.push(item)
        }
        console.log(listArr)
        return (
            <div>
                <div style={styleA}>头部</div>
                <ul>{listArr}</ul>
                {element}
                {
                    arr.map((item, index) => <span key={index}>{item} </span>)
                }
                {
                    this.state.list.map((item, index) => (
                        <Eitem key={index} cindex={index} data={item} />
                    ))
                }
                <div style={styleB}>尾部</div>
            </div>
        )
    }
}

export default Judge