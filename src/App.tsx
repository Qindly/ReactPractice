import { useState, useEffect } from "react";
import UserProfile from "./components/UserProfile";
import LoginForm from "./components/LoginForm";
import UserContext from "./utils/MyContext/UserContext";
import { useFetchUser } from "./utils/Myhooks/useFetchUser";
//������·�ɵĳ���
import { Outlet, Link } from "react-router-dom";
const App = () => {
  const { userData, loading, error } = useFetchUser(1);
  console.log("userData:", userData);
  console.log("loading:", loading);
  console.log("error:", error);
  const [users, setUsers] = useState([
    { id: 1, username: "Apple", email: "Apple.email", displayName: "AAAApple" },
    { id: 1, username: "Apple", email: "Apple.email", displayName: "AAAApple" },
  ]);
  //��ס����û����ţ���Ҫ���Է��أ���Ҫ��return��û��return�Ļ�Ҫ��Բ����()
  return (
    <>
      {users.map((user) =>
        <UserProfile key={user.id} user={user} setUsers={setUsers} />
      )}
    </>
  );
};

export default App;
{
  /* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav> */
}
{
  /* <UserContext.Provider
        value={{
          id: 1,
          username: "Apple",
          email: "Apple.email",
          displayName: "AAAApple",
        }}
      >
        <div>11</div>
        <Outlet />
      </UserContext.Provider> */
}
