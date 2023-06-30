import * as React from 'react';
import ReactDOM from "react-dom/client";
import './app.css'
import Layout from './components/layout/layout';

const App = () => {

  return (
    <Layout>
    </Layout>
  )
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
