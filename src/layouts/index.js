import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import Link from 'umi/link'

const {Header, Footer, Sider, Content} = Layout
const {SubMenu} = Menu

class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh', color: 'white'}}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >

                        <SubMenu
                            key="sub1"
                            title={
                                    <span><Icon type="user"/><span>用户管理</span></span>
                            }
                        >
                            <Menu.Item key="5">
                                <Link to="/user/list">用户列表</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/user/add">添加用户</Link>
                            </Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {this.props.children}
                        </div>

                    </Content>
                    <Footer style={{textAlign: 'center'}}>后台管理系统</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout
