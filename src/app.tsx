import * as React from 'react';
import ReactDOM from "react-dom/client";
import './app.css'
import Layout from './components/Layout';
import { Provider } from 'react-redux';
// import { store, useAppDispatch } from './store/store';
import { useEffect } from 'react';
import { fetchBestMovies } from './store/features/sliderSlice';
import store, { useAppDispatch } from './store/store';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBestMovies());
  });

  return (
    <Layout>
    </Layout>
  )
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
