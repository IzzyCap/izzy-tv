import * as React from 'react';
import ReactDOM from "react-dom/client";
import './app.css'
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { fetchBestMovies } from './store/features/sliderSlice';
import store, { useAppDispatch } from './store/store';

// pages
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';

// router
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBestMovies());
  });

  // [TODO] make details be inside of homepage like a modal.
  return (
    <Routes>
      {/* <HomePage/> */}
      <Route path='/' element={<HomePage/>}/>
      {/* http://localhost:8000/details?content_type=movies&content_id=atrapada-en-las-profundidades */}
      <Route path='/details/:id' element={<DetailPage/>}/>
    </Routes>
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
