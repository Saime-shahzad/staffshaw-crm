import React, { useState } from 'react';
import {
 
  PieChartOutlined,
  
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import colors from '../../assets/colors/color';
import './Index.css'


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  
];
const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundColor:colors.theme 
      }}
    >
      <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme={colors.theme} className='border ' defaultSe lectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colors.theme,
              borderRadius: borderRadiusLG,
            }}
          >
        cards section.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Index;