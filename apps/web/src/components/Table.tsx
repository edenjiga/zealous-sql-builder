import { User, UserResponse } from '@edgar/common-types';
import { FC } from 'react';

type Props = {
  users: UserResponse['items'];
};

const TableElement = (user: User) => {
  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.status}</td>
      <td>
        {user.userTechnologies.reduce(
          (prevStatus, { technology }) => `${prevStatus}, ${technology.name}`,
          ''
        )}
      </td>
    </tr>
  );
};

export const Table: FC<Props> = ({ users }) => {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Status</th>
        <th>Technologies</th>
      </thead>
      <tbody>{users.map(TableElement)}</tbody>
    </table>
  );
};
