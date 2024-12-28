import { FC, lazy, Suspense } from 'react';
import { Tabs } from 'antd';
import { PlusCircleOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './AppTabs.module.css';

const MainPage = lazy(() => import('../../pages/MainPage'));
const NotificationsPage = lazy(() => import('../../pages/NotificationsPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage'));

const AppTabs: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = [
    {
      key: '/schedule',
      label: 'Расписание',
      icon: <CalendarOutlined />,
      content: <NotificationsPage />,
    },
    {
      key: '/main',
      label: <div className="main-page-btn"><PlusCircleOutlined /></div>,
      content: <MainPage />,
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
        tabPosition='bottom'
        activeKey={location.pathname}
        size={"large"}
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
          style: {height: "calc(-57px + 100vh)"}
        }))}
        className={styles.tabBar}
      />
    </>
  );
};

export default AppTabs;
