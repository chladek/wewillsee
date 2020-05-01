import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useLoginMutation } from '../generated/graphql';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [login] = useLoginMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await login({
          variables: { username, password },
        });
        history.push('/');
      }}
    >
      <div>
        <input
          value={username}
          placeholder="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
