import React from 'react'
import jsonData from './list-total.json'
import { Table } from 'antd'

let chinaData = jsonData.data.areaTree.find((item, index) => item.id === '0')
chinaData.children.sort((a, b) => {
    if (a.total.confirm > b.total.confirm) {
        return -1
    } else {
        return 1
    }
})
console.log(chinaData.children)
const columns = [
    {
        title: '序号',
        render: (text, record, index) => `${index + 1}`
    },
    {
        title: '地名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '确诊人数',
        dataIndex: ['total', 'confirm'],
        key: 'confirm'
    },
    {
        title: '治愈人数',
        dataIndex: ['total', 'heal'],
        key: 'confirm'
    },
    {
        title: '死亡人数',
        dataIndex: ['total', 'dead'],
        key: 'dead'
    },
]

class AjaxDemoCom extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Table
                columns={columns}
                dataSource={chinaData.children}
                childrenColumnName={'childrenNode'}
                rowKey='id'
                />
        )
    }
}

export default AjaxDemoCom