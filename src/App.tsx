import { FC, Suspense } from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppTabs from './components/AppTabs';
import 'antd/dist/reset.css';
import './App.css'

const App: FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#336699',
        },
      }}
    >
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/*" element={<AppTabs />} />
          </Routes>
        </Suspense>
      </Router>
    </ConfigProvider>
  );
};

export default App;
