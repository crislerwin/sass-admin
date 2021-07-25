type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  age: number;
};
const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    role: "admin",
    age: 43,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@email.com",
    role: "user",
    age: 20,
  },
  {
    id: 3,
    name: "John Smith",
    email: "johnsmith@email.com",
    role: "user",
    age: 30,
  },
  {
    id: 4,
    name: "John Smith",
    email: "johnsmith@email.com",
    role: "user",
    age: 30,
  },
  {
    id: 5,
    name: "John Smith",
    email: "john@email.com",
    role: "user",
    age: 30,
  },
];
export const UserTable: React.FC<{}> = () => {
  return (
    <div className="table-container">
      <h1>Users</h1>
      <table className=" container table  table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
