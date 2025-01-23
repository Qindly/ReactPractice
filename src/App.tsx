import { useState, useEffect } from "react";
import UserProfile from "./components/UserProfile";
import LoginForm from "./components/LoginForm";
import UserContext from "./utils/MyContext/UserContext";
import { useFetchUser } from "./utils/Myhooks/useFetchUser";
//这里是路由的出口
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
  //记住如果用花括号，就要显性返回，即要有return，没有return的话要用圆括号()
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
