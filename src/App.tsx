import { FC, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppTabs from './components/AppTabs';
import 'antd/dist/reset.css'; // Стили Ant Design

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/*" element={<AppTabs />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
