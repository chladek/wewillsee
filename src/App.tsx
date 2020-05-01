import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <div>hello</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
