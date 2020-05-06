import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import { setAccessToken } from './token';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/user/refresh_token', {
      method: 'GET',
      credentials: 'include',
    }).then(async (response) => {
      const { accessToken } = await response.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading</h1>;

  return <Routes />;
};

export default App;
