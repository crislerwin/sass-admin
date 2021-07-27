import { UserTable } from "../components/Tables";
import Link from "next/link";
const Table: React.FC<{}> = () => {
  return (
    <>
      <div className="main-container">
        <Link href="/dashboard">
          <a>Voltar</a>
        </Link>
      </div>
      <UserTable />
    </>
  );
};
export default Table;
