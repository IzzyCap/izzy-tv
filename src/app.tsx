import * as React from 'react';
import ReactDOM from "react-dom/client";
import './app.css'
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { fetchAction, fetchBest, fetchOriginal, fetchStore, fetchDrama, fetchFamily, fetchSuspense } from './store/features/sliderSlice';
import store, { useAppDispatch } from './store/store';

// pages
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { PlayerPage } from './pages/PlayerPage';

// router
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBest());
    dispatch(fetchStore());
    dispatch(fetchOriginal());
    dispatch(fetchAction());
    dispatch(fetchDrama());
    dispatch(fetchSuspense());
    dispatch(fetchFamily());
  });

  // [TODO] make details be inside of homepage like a modal.
  return (
    <>
      <Layout>
        <HomePage/>
        <Routes>
          <Route path='/details/:id' element={<DetailPage/>}/>
          <Route path='/player/:id' element={<PlayerPage/>}/>
        </Routes>
      </Layout>
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
