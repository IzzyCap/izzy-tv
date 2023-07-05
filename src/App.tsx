import * as React from 'react';
import ReactDOM from "react-dom/client";
import './app.css'
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { fetchBest, fetchStore } from './store/features/sliderSlice';
import store, { useAppDispatch } from './store/store';

// pages
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { PlayerPage } from './pages/PlayerPage';

// router
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBest());
    dispatch(fetchStore());
  });

  // [TODO] make details be inside of homepage like a modal.
  return (
    <>
      <HomePage/>
      <Routes>
        <Route path='/details/:id' element={<DetailPage/>}/>
        <Route path='/player/:id' element={<PlayerPage/>}/>
      </Routes>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
