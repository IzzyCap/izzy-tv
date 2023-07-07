import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { DetailPage } from '../../pages/DetailPage';
import { act } from 'react-dom/test-utils';
import store from "../../store/store";
import { Provider } from "react-redux";

describe('DetailPage', () => {
  it('should renders DetailPage with URL parameter and correct title', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/misterios-del-titanic']}>
            <Routes>
              <Route path="/:id" element={<DetailPage />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });

    await waitFor(() => {
      expect(screen.getByText('Misterios del Titanic')).toBeInTheDocument();
    });
  });
});
