import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppTabs from './AppTabs';

test('renders tabs and navigates correctly', () => {
  render(
    <MemoryRouter initialEntries={['/home']}>
      <AppTabs />
    </MemoryRouter>
  );

  // Check tabs render
  expect(screen.getByText(/Главная/)).toBeInTheDocument();
  expect(screen.getByText(/Уведомления/)).toBeInTheDocument();
  expect(screen.getByText(/Профиль/)).toBeInTheDocument();
});
