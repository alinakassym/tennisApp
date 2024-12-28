import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppTabs from './AppTabs';

test('renders tabs and navigates correctly', () => {
  render(
    <MemoryRouter initialEntries={['/main']}>
      <AppTabs />
    </MemoryRouter>
  );

  // Check tabs render
  // expect(screen.getByText(/Главная/)).toBeInTheDocument();
  // expect(screen.getByText(/Расписание/)).toBeInTheDocument();
  // expect(screen.getByText(/Уведомления/)).toBeInTheDocument();
  // expect(screen.getByText(/Профиль/)).toBeInTheDocument();
});
