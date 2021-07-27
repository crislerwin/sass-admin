import { useFetch } from "../../hooks/useFetch";
import Link from "next/link";
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};
const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@email.com",
    role: "user",
  },
  {
    id: 3,
    name: "John Smith",
    email: "johnsmith@email.com",
    role: "user",
  },
  {
    id: 4,
    name: "John Smith",
    email: "johnsmith@email.com",
    role: "user",
  },
  {
    id: 5,
    name: "John Smith",
    email: "john@email.com",
    role: "user",
  },
];
export const UserTable: React.FC<{}> = () => {
  const { data } = useFetch<User[]>("/user");

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="container">
        <h1>Users</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
