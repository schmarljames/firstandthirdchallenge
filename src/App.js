import React, { useEffect, useState } from 'react';
import notificationJSON from './data/notification-data';
import './App.scss';

import Loading from './components/Loading';
import NewsletterSection from './components/NewsletterSection';

function useNotificationOptions() {
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    setTimeout(() => {
      setState({ data: notificationJSON, loading: false });
    }, 2000);
  }, []);

  return state;
}

function App() {
  const { data, loading } = useNotificationOptions();

  return (
    <div className="app">
      <div className="notes-form-wrapper">
        <header className="app-header">
          <h1>Newsletters</h1>
          <p className="app-sub-header">
            Select all of the newsletters you would like to receive
          </p>
        </header>
        { loading ? <Loading /> : <NewsletterSection data={data} /> }
      </div>
    </div>
  );
}

export default App;
