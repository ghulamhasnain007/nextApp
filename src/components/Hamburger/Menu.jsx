import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const DropdownMenu = () => {
  const [activeKey, setActiveKey] = useState('1'); // Initial active key

  const handleMenuClick = (e) => {
    setActiveKey(e.key);
  };

  const menu = (
    <Menu
      selectedKeys={[activeKey]}
      onClick={handleMenuClick}
      className="bg-gray-800 rounded-lg"
    >
      <Menu.Item key="1" className={`text-white px-4 py-2 hover:bg-gray-700 ${activeKey === '1' ? 'bg-gray-700' : ''}`}>Item 1</Menu.Item>
      <Menu.Item key="2" className={`text-white px-4 py-2 hover:bg-gray-700 ${activeKey === '2' ? 'bg-gray-700' : ''}`}>Item 2</Menu.Item>
      <Menu.Item key="3" className={`text-white px-4 py-2 hover:bg-gray-700 ${activeKey === '3' ? 'bg-gray-700' : ''}`}>Item 3</Menu.Item>
      <Menu.Item key="4" className={`text-white px-4 py-2 hover:bg-gray-700 ${activeKey === '4' ? 'bg-gray-700' : ''}`}>Item 4</Menu.Item>
      <Menu.Item key="5" className={`text-white px-4 py-2 hover:bg-gray-700 ${activeKey === '5' ? 'bg-gray-700' : ''}`}>Item 5</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottom">
      <Button
        type="primary"
        icon={<MenuOutlined />}
        className="border-none bg-transparent shadow-none p-0 flex items-center justify-center text-2xl text-white"
      />
    </Dropdown>
  );
};

export default DropdownMenu;
