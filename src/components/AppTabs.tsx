import { FC } from 'react';
import { Tabs } from 'antd';
import { HomeOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import HomePage from '../pages/HomePage';
import NotificationsPage from '../pages/NotificationsPage';
import ProfilePage from '../pages/ProfilePage';

const AppTabs: FC = () => {
  const tabs = [
    {
      key: 'home',
      label: 'Главная',
      icon: <HomeOutlined />,
      content: <HomePage />,
    },
    {
      key: 'notifications',
      label: (
        <>
          <BellOutlined />
          Уведомления
        </>
      ),
      content: <NotificationsPage />,
    },
    {
      key: 'profile',
      label: (
        <>
          <UserOutlined />
          Профиль
        </>
      ),
      content: <ProfilePage />,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="home"
      centered
      items={tabs.map(({ key, icon, label, content }) => ({
        key,
        label,
        icon,
        children: content,
      }))}
      tabBarStyle={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        zIndex: 10,
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      }}
    />
  );
};

export default AppTabs;
