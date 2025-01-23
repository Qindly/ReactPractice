import PropTypes from "prop-types";
import { useState } from "react";

const UserProfile = ({ user ,setUsers}: any) => {
  //console.log(props);
  // props.callMe("John");
  const [isModify, setIsModify] = useState(false);
  console.log(user.id);
  const[username, setUsername] = useState(user.username);
  return (
    <>
      <ul>
        <li>ID:{user.id}</li>
        <li>
          Username:
          {isModify ? (
            <input
              id="username"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          ) : (
            username
          )}
        </li>
        <li>Email: {user.email}</li>
      </ul>
      <button
        onClick={() => {
          setIsModify(!isModify);
        }}
      >
        modify
      </button>
      <div>
        <button>finish</button>
        <button>cancel</button>
      </div>
      <button>delete</button>

      {/* <UserFavoriteFoods favoriteFoods={props.favoriteFoods} /> */}
    </>
  );
};

UserProfile.prototypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  favoriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default UserProfile;
