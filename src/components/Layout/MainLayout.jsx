'use client'

import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, Drawer, theme } from 'antd';
import DropdownMenu from '../Hamburger/Menu';

const { Header, Content, Footer } = Layout;

const menuItems = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const breadcrumbItems = [
  { title: 'Home' },
  { title: 'List' },
  { title: 'MainLayout' },
];

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [mobile, setMobile] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  useEffect(() => {
    // This check ensures that the code runs only on the client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setMobile(window.innerWidth <= 768);
      };

      // Set initial state
      setMobile(window.innerWidth <= 768);

      window.addEventListener('resize', handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <div className="demo-logo" style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>LOGO</div>

        {/* Menu items */}
        {!mobile && (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={menuItems}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
            className="desktop-menu"
          />
        )}

        {/* Hamburger Button */}
        {mobile && (
          <DropdownMenu />
        )}
      </Header>
      <Drawer
        title="Navigation"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        style={{ padding: 0 }}
      >
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['2']}
          items={menuItems}
        />
      </Drawer>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
          items={breadcrumbItems}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
      <style jsx>{`
        .desktop-menu {
          display: ${mobile ? 'none' : 'flex'};
        }
        .mobile-menu-button {
          display: ${mobile ? 'block' : 'none'};
        }
      `}</style>
    </Layout>
  );
};

export default MainLayout;
