import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppTabs from './components/AppTabs';
import 'antd/dist/reset.css'; // Стили Ant Design

const App: FC = () => {
  return (
    <Router>
      <AppTabs />
    </Router>
  );
};

export default App;
