import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useLoginMutation } from '../generated/graphql';
import { setAccessToken } from '../token';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [login] = useLoginMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await login({
          variables: { username, password },
        });
        if (res && res.data) {
          setAccessToken(res.data.login.accessToken);
        }
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
