import React from 'react';
import { useGetUsersQuery } from '../generated/graphql';

interface Props {}

const Users: React.FC<Props> = () => {
  const { data, loading, error } = useGetUsersQuery({
    fetchPolicy: 'network-only',
  });
  if (!data) return <div>no data</div>;
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      {data.getUsers.map((user) => {
        return <h1 key={user.username}>{user.username}</h1>;
      })}
    </div>
  );
};

export default Users;
