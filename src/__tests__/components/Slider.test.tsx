import { render, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import store from "../../store/store";
import { Provider } from "react-redux";
import Slider from '../../components/Slider';
import { Categories } from '../../utils/endpoint';

describe('Slider', () => {
  it('should renders Slider', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Slider
            title="GRATIS | Películas familiares gratis"
            category={Categories.Family}
          />
        </Provider>
      );
    });

    await waitFor(() => {
      expect(screen.getByText('GRATIS | Películas familiares gratis')).toBeInTheDocument();
    });
  });
});
