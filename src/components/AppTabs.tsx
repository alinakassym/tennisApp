import { FC, lazy, Suspense } from 'react';
import { Tabs } from 'antd';
import { HomeOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './AppTabs.module.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const NotificationsPage = lazy(() => import('../pages/NotificationsPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));

const AppTabs: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = [
    {
      key: '/home',
      label: 'Главная',
      icon: <HomeOutlined />,
      content: <HomePage />,
    },
    {
      key: '/notifications',
      label: 'Уведомления',
      icon: <BellOutlined />,
      content: <NotificationsPage />,
    },
    {
      key: '/profile',
      label: 'Профиль',
      icon: <UserOutlined />,
      content: <ProfilePage />,
    },
  ];

  return (
    <>
      <Tabs
        activeKey={location.pathname}
        onChange={(key) => navigate(key)}
        centered
        items={tabs.map(({ key, icon, label, content }) => ({
          key,
          icon,
          label,
          children: (
            <Suspense fallback={<div>Loading...</div>}>
              {content}
            </Suspense>
          ),
        }))}
        className={styles.tabBar}
      />
    </>
  );
};

export default AppTabs;
