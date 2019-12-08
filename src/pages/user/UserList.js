import React from 'react'
import { Table, Divider, Tag } from 'antd';

const Column = Table
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];


class UserList extends React.Component{

    render() {
        return (
            <div>
                <Table dataSource={dataSource}>
                    <Column title="ID" dataIndex="key" key="key"/>
                    <Column title="姓名" dataIndex="name" key="name"/>
                    <Column title="年龄" dataIndex="age" key="age"/>
                    <Column title="地址" dataIndex="address" key="address"/>
                </Table>
            </div>
        )
    }
}

export default UserList
