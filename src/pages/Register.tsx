import React, { useState } from 'react';

interface Props {}

const Register: React.FC<Props> = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
