import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link }  from 'react-router-dom';
import './index.css';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

@inject('indexStore')
@observer
class Index extends Component {
  render() {

    const { indexStore } = this.props;

    const collapsed = true;

    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px', height: 'calc(100vh-65px)', overflow: 'auto' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {
                [...Array(10).keys()].map((n) => {
                  return (
                    <div>Bill is a cat.{n}</div>
                  )
                })
              }
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
