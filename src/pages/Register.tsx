import React, { useState } from 'react';
import { useRegisterMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await register({
          variables: { email, username, password },
        });
        history.push('/');
      }}
    >
      <div>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
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

export default Register;
